-- Eiendomly CRM and outreach: core schema.
--
-- Every table has Row Level Security switched on. Only signed-in users listed
-- in public.admin_users can read or write anything. The anon role has no
-- access at all. The service-role key (used only server-side, for the n8n
-- webhook and the unsubscribe link) bypasses RLS by design and must never be
-- exposed to the browser.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Admin users and the access check used by every policy
-- ---------------------------------------------------------------------------

create table public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  role text not null default 'admin' check (role in ('owner', 'admin', 'viewer')),
  created_at timestamptz not null default now()
);

-- security definer so policies can call it without granting read access to
-- admin_users itself; empty search_path to avoid search_path hijacking.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admin_users a
    where a.user_id = auth.uid() and a.role in ('owner', 'admin')
  );
$$;

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admin_users a where a.user_id = auth.uid());
$$;

revoke all on function public.is_admin() from public;
revoke all on function public.is_staff() from public;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_staff() to authenticated;

-- ---------------------------------------------------------------------------
-- Companies (prospects and customers)
-- ---------------------------------------------------------------------------

create table public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  name_normalized text not null,
  org_number text unique check (org_number ~ '^[0-9]{9}$'),
  segment text not null default 'other' check (segment in (
    'airbnb_manager', 'real_estate_agent', 'professional_landlord', 'hotel',
    'photographer', 'stylist', 'developer', 'other'
  )),
  website text,
  domain text,
  general_email text,
  email_is_generic boolean,
  phone text,
  address text,
  postal_code text,
  city text,
  municipality text,
  country text not null default 'NO',
  nace_code text,
  nace_description text,
  employees integer,

  -- Where the record came from. Contact data is only ever copied from the
  -- source named here; nothing is guessed.
  source text not null default 'manual' check (source in ('brreg', 'manual', 'csv', 'n8n', 'website', 'inbound')),
  source_url text,
  source_ref text,

  status text not null default 'new' check (status in (
    'new', 'researched', 'qualified', 'contacted', 'interested',
    'customer', 'not_interested', 'unqualified'
  )),
  score integer check (score between 0 and 100),
  recommended_service text check (recommended_service in (
    'photo_boost', 'sale_boost', 'virtual_staging', 'broker_plan', 'manager_plan'
  )),
  needs_summary text,
  score_reason text,
  analysis jsonb,
  analyzed_at timestamptz,
  estimated_value_nok numeric(12, 2),
  acquisition_channel text check (acquisition_channel in (
    'google_ads', 'meta_ads', 'linkedin', 'outreach', 'referral', 'partner', 'organic', 'other'
  )),

  -- Legal basis for contacting this company by e-mail.
  contact_basis text not null default 'none' check (contact_basis in (
    'none', 'b2b_generic_address', 'consent', 'existing_customer', 'inbound_inquiry'
  )),
  contact_basis_note text,
  contact_basis_checked_at timestamptz,
  do_not_contact boolean not null default false,
  opted_out_at timestamptz,
  opt_out_reason text,

  tags text[] not null default '{}',
  notes text,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index companies_domain_key on public.companies (domain) where domain is not null;
create index companies_name_city_idx on public.companies (name_normalized, postal_code);
create index companies_status_idx on public.companies (status);
create index companies_segment_idx on public.companies (segment);
create index companies_score_idx on public.companies (score desc nulls last);
create index companies_email_idx on public.companies (lower(general_email));

-- ---------------------------------------------------------------------------
-- Named contact persons (optional). Personal addresses need consent or an
-- existing customer relationship before any marketing e-mail.
-- ---------------------------------------------------------------------------

create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  full_name text,
  role_title text,
  email text,
  phone text,
  is_personal boolean not null default true,
  source text not null default 'manual',
  source_url text,
  consent_at timestamptz,
  do_not_contact boolean not null default false,
  created_at timestamptz not null default now()
);

create index contacts_company_idx on public.contacts (company_id);
create index contacts_email_idx on public.contacts (lower(email));

-- ---------------------------------------------------------------------------
-- Outreach messages. Nothing is ever sent automatically: a person approves
-- each message, then presses send. Sending is also blocked server-side
-- unless OUTREACH_SENDING_ENABLED=true.
-- ---------------------------------------------------------------------------

create table public.outreach_messages (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  contact_id uuid references public.contacts (id) on delete set null,
  channel text not null default 'email' check (channel in ('email')),
  to_email text,
  subject text not null,
  body text not null,
  status text not null default 'draft' check (status in (
    'draft', 'approved', 'sent', 'failed', 'cancelled'
  )),
  generated_by text not null default 'manual' check (generated_by in ('ai', 'manual', 'n8n')),
  sequence_step integer not null default 1,
  approved_by uuid references auth.users (id) on delete set null,
  approved_at timestamptz,
  sent_at timestamptz,
  provider_message_id text,
  error text,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index outreach_company_idx on public.outreach_messages (company_id);
create index outreach_status_idx on public.outreach_messages (status);

-- ---------------------------------------------------------------------------
-- Activity log: notes, replies, sent mail, status changes, sales.
-- ---------------------------------------------------------------------------

create table public.activities (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  type text not null check (type in (
    'note', 'email_sent', 'reply', 'call', 'meeting', 'status_change',
    'opt_out', 'sale', 'ai_analysis', 'import', 'follow_up'
  )),
  summary text not null,
  details jsonb,
  follow_up_at timestamptz,
  occurred_at timestamptz not null default now(),
  created_by uuid references auth.users (id) on delete set null
);

create index activities_company_idx on public.activities (company_id, occurred_at desc);
create index activities_follow_up_idx on public.activities (follow_up_at) where follow_up_at is not null;

-- ---------------------------------------------------------------------------
-- Deals: pipeline and sales, with service and marketing channel for revenue
-- reporting.
-- ---------------------------------------------------------------------------

create table public.deals (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  service text not null check (service in (
    'photo_boost', 'sale_boost', 'virtual_staging', 'broker_plan', 'manager_plan', 'other'
  )),
  channel text not null default 'other' check (channel in (
    'google_ads', 'meta_ads', 'linkedin', 'outreach', 'referral', 'partner', 'organic', 'other'
  )),
  amount_nok numeric(12, 2) not null check (amount_nok >= 0),
  status text not null default 'open' check (status in ('open', 'won', 'lost')),
  probability integer not null default 50 check (probability between 0 and 100),
  expected_close date,
  closed_at timestamptz,
  note text,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index deals_company_idx on public.deals (company_id);
create index deals_status_idx on public.deals (status);

-- ---------------------------------------------------------------------------
-- Global stop list. An address or a whole domain here is never contacted.
-- ---------------------------------------------------------------------------

create table public.suppression_list (
  id uuid primary key default gen_random_uuid(),
  value text not null unique,
  kind text not null check (kind in ('email', 'domain')),
  reason text not null default 'unsubscribe',
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Research runs (Brønnøysund search + AI analysis), for traceability.
-- ---------------------------------------------------------------------------

create table public.research_runs (
  id uuid primary key default gen_random_uuid(),
  params jsonb not null,
  status text not null default 'running' check (status in ('running', 'done', 'failed')),
  found integer not null default 0,
  imported integer not null default 0,
  duplicates integer not null default 0,
  error text,
  triggered_by text not null default 'admin' check (triggered_by in ('admin', 'n8n')),
  created_by uuid references auth.users (id) on delete set null,
  started_at timestamptz not null default now(),
  finished_at timestamptz
);

-- ---------------------------------------------------------------------------
-- Triggers
-- ---------------------------------------------------------------------------

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger companies_touch before update on public.companies
  for each row execute function public.touch_updated_at();
create trigger outreach_touch before update on public.outreach_messages
  for each row execute function public.touch_updated_at();
create trigger deals_touch before update on public.deals
  for each row execute function public.touch_updated_at();

-- Automatic stop: when a company declines or opts out, every unsent message
-- is cancelled.
create or replace function public.stop_outreach_on_opt_out()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.status = 'not_interested' and new.do_not_contact = false then
    new.do_not_contact := true;
    new.opted_out_at := coalesce(new.opted_out_at, now());
    new.opt_out_reason := coalesce(new.opt_out_reason, 'Takket nei');
  end if;
  if new.do_not_contact and (old.do_not_contact is distinct from true or tg_op = 'INSERT') then
    update public.outreach_messages
      set status = 'cancelled', error = 'Stoppet: mottaker har takket nei eller reservert seg'
      where company_id = new.id and status in ('draft', 'approved');
  end if;
  return new;
end;
$$;

create trigger companies_stop_outreach before update on public.companies
  for each row execute function public.stop_outreach_on_opt_out();

-- When an address or domain lands on the stop list, mark matching companies.
create or replace function public.apply_suppression()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.kind = 'email' then
    update public.companies
      set do_not_contact = true, opted_out_at = coalesce(opted_out_at, now()),
          opt_out_reason = coalesce(opt_out_reason, new.reason)
      where lower(general_email) = lower(new.value) and do_not_contact = false;
    update public.contacts set do_not_contact = true where lower(email) = lower(new.value);
  else
    update public.companies
      set do_not_contact = true, opted_out_at = coalesce(opted_out_at, now()),
          opt_out_reason = coalesce(opt_out_reason, new.reason)
      where domain = lower(new.value) and do_not_contact = false;
  end if;
  return new;
end;
$$;

create trigger suppression_apply after insert on public.suppression_list
  for each row execute function public.apply_suppression();

-- ---------------------------------------------------------------------------
-- Dashboard numbers in one round trip. security invoker: RLS still applies,
-- so a caller who isn't staff gets zeros.
-- ---------------------------------------------------------------------------

create or replace function public.crm_dashboard()
returns jsonb
language sql
stable
security invoker
set search_path = ''
as $$
  with c as (select * from public.companies),
  d as (select * from public.deals)
  select jsonb_build_object(
    'prospects', (select count(*) from c where status not in ('unqualified')),
    'qualified', (select count(*) from c where status in ('qualified', 'contacted', 'interested', 'customer')
                    or (score >= 60 and status not in ('unqualified', 'not_interested'))),
    'contacted', (select count(*) from c where status in ('contacted', 'interested', 'customer', 'not_interested')),
    'interested', (select count(*) from c where status in ('interested', 'customer')),
    'customers', (select count(*) from c where status = 'customer'),
    'do_not_contact', (select count(*) from c where do_not_contact),
    'awaiting_approval', (select count(*) from public.outreach_messages where status = 'draft'),
    'approved_unsent', (select count(*) from public.outreach_messages where status = 'approved'),
    'revenue_total', coalesce((select sum(amount_nok) from d where status = 'won'), 0),
    'pipeline_value', coalesce((select sum(amount_nok * probability / 100.0) from d where status = 'open'), 0),
    'pipeline_unweighted', coalesce((select sum(amount_nok) from d where status = 'open'), 0),
    'revenue_by_service', coalesce((
      select jsonb_object_agg(service, total) from (
        select service, sum(amount_nok) as total from d where status = 'won' group by service
      ) s), '{}'::jsonb),
    'revenue_by_channel', coalesce((
      select jsonb_object_agg(channel, total) from (
        select channel, sum(amount_nok) as total from d where status = 'won' group by channel
      ) s), '{}'::jsonb),
    'by_segment', coalesce((
      select jsonb_object_agg(segment, n) from (
        select segment, count(*) as n from c group by segment
      ) s), '{}'::jsonb),
    'by_status', coalesce((
      select jsonb_object_agg(status, n) from (
        select status, count(*) as n from c group by status
      ) s), '{}'::jsonb),
    'follow_ups_due', (select count(*) from public.activities
                       where follow_up_at is not null and follow_up_at <= now() + interval '1 day')
  );
$$;

revoke all on function public.crm_dashboard() from public;
grant execute on function public.crm_dashboard() to authenticated;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.admin_users enable row level security;
alter table public.companies enable row level security;
alter table public.contacts enable row level security;
alter table public.outreach_messages enable row level security;
alter table public.activities enable row level security;
alter table public.deals enable row level security;
alter table public.suppression_list enable row level security;
alter table public.research_runs enable row level security;

-- admin_users: staff can see their own row; only owners manage it (do that in
-- the Supabase dashboard or SQL editor).
create policy admin_users_self_read on public.admin_users
  for select to authenticated using (user_id = auth.uid());

-- Staff (including viewers) can read; admins and owners can write.
do $$
declare t text;
begin
  foreach t in array array[
    'companies', 'contacts', 'outreach_messages', 'activities',
    'deals', 'suppression_list', 'research_runs'
  ] loop
    execute format(
      'create policy %I on public.%I for select to authenticated using (public.is_staff())',
      t || '_staff_read', t);
    execute format(
      'create policy %I on public.%I for insert to authenticated with check (public.is_admin())',
      t || '_admin_insert', t);
    execute format(
      'create policy %I on public.%I for update to authenticated using (public.is_admin()) with check (public.is_admin())',
      t || '_admin_update', t);
    execute format(
      'create policy %I on public.%I for delete to authenticated using (public.is_admin())',
      t || '_admin_delete', t);
  end loop;
end;
$$;

-- No grants to anon on any CRM table.
revoke all on all tables in schema public from anon;
