-- Eiendomly CRM, part 2: background autopilot, AI budgets, follow-ups,
-- attribution and weekly reports. Additive only: nothing in part 1 changes
-- behaviour, and every new table follows the same RLS rules.
--
-- Safety defaults: autopilot, automatic sending and automatic approval of
-- follow-ups are all OFF. Sending also still needs OUTREACH_SENDING_ENABLED.

-- ---------------------------------------------------------------------------
-- Settings (one row)
-- ---------------------------------------------------------------------------

create table public.crm_settings (
  id integer primary key default 1 check (id = 1),
  -- Research: find and analyse new companies in the background.
  autopilot_enabled boolean not null default false,
  daily_target integer not null default 25 check (daily_target between 0 and 50),
  discovery_segments text[] not null default array[
    'real_estate_agent', 'airbnb_manager', 'professional_landlord', 'hotel', 'photographer', 'stylist', 'developer'
  ],
  discovery_municipalities text[] not null default '{}',
  require_website boolean not null default true,
  -- AI cost caps in NOK. A call is only made if its worst-case cost fits.
  ai_daily_budget_nok numeric(10, 2) not null default 30 check (ai_daily_budget_nok >= 0),
  ai_monthly_budget_nok numeric(10, 2) not null default 500 check (ai_monthly_budget_nok >= 0),
  usd_nok_rate numeric(8, 3) not null default 11.0 check (usd_nok_rate > 0),
  -- Follow-ups: drafted after N days without reply, max steps after the first mail.
  followup_enabled boolean not null default true,
  followup_after_days integer not null default 5 check (followup_after_days between 2 and 30),
  followup_max_steps integer not null default 1 check (followup_max_steps between 0 and 2),
  followup_auto_approve boolean not null default false,
  -- Sending: off until tested. Window is Oslo time, weekdays only.
  auto_send_enabled boolean not null default false,
  daily_send_cap integer not null default 30 check (daily_send_cap between 0 and 50),
  send_window_start integer not null default 8 check (send_window_start between 0 and 23),
  send_window_end integer not null default 16 check (send_window_end between 1 and 24),
  -- Reporting: minutes per activity and per delivered order, direct cost per order.
  report_email text,
  minutes_per_activity jsonb not null default '{"approve": 1, "reply": 5, "call": 10, "meeting": 30, "note": 2}',
  delivery_minutes jsonb not null default '{"photo_boost": 45, "virtual_staging": 25, "sale_boost": 30, "broker_plan": 240, "manager_plan": 180, "other": 30}',
  direct_cost_nok jsonb not null default '{"photo_boost": 20, "virtual_staging": 15, "sale_boost": 15, "broker_plan": 150, "manager_plan": 100, "other": 0}',
  updated_at timestamptz not null default now()
);
insert into public.crm_settings (id) values (1) on conflict do nothing;

-- ---------------------------------------------------------------------------
-- AI usage ledger (every Claude call, manual or automatic)
-- ---------------------------------------------------------------------------

create table public.ai_usage (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies (id) on delete set null,
  purpose text not null default 'analysis',
  model text not null,
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  cache_read_tokens integer not null default 0,
  cache_write_tokens integer not null default 0,
  cost_usd numeric(10, 5) not null default 0,
  cost_nok numeric(10, 3) not null default 0,
  triggered_by text not null default 'admin' check (triggered_by in ('admin', 'worker')),
  created_at timestamptz not null default now()
);
create index ai_usage_created_idx on public.ai_usage (created_at);

-- ---------------------------------------------------------------------------
-- Background runs: observability and a simple lock against overlaps
-- ---------------------------------------------------------------------------

create table public.worker_runs (
  id uuid primary key default gen_random_uuid(),
  trigger text not null default 'schedule' check (trigger in ('schedule', 'manual', 'send')),
  status text not null default 'running' check (status in ('running', 'done', 'failed', 'skipped')),
  stats jsonb not null default '{}',
  error text,
  started_at timestamptz not null default now(),
  finished_at timestamptz
);
create index worker_runs_started_idx on public.worker_runs (started_at desc);

-- Key/value state for the worker (discovery cursor, mailbox position).
create table public.worker_state (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- New columns
-- ---------------------------------------------------------------------------

alter table public.companies
  add column recurring_potential integer check (recurring_potential between 0 and 100),
  add column priority integer check (priority between 0 and 100),
  add column last_contacted_at timestamptz,
  add column replied_at timestamptz,
  add column needs_review boolean not null default false;
create index companies_priority_idx on public.companies (priority desc nulls last);

alter table public.outreach_messages
  add column parent_message_id uuid references public.outreach_messages (id) on delete set null,
  add column prompt_version text,
  add column send_requested_at timestamptz,
  add column auto_approved boolean not null default false,
  add column replied_at timestamptz,
  add column bounced_at timestamptz;
-- Follow-ups are written from a fixed template, not by the AI.
alter table public.outreach_messages drop constraint outreach_messages_generated_by_check;
alter table public.outreach_messages add constraint outreach_messages_generated_by_check
  check (generated_by in ('ai', 'manual', 'n8n', 'template'));
create index outreach_parent_idx on public.outreach_messages (parent_message_id);
create index outreach_send_requested_idx on public.outreach_messages (send_requested_at) where status = 'approved';

alter table public.deals
  add column source_message_id uuid references public.outreach_messages (id) on delete set null,
  add column segment text,
  add column delivery_minutes integer check (delivery_minutes >= 0),
  add column direct_cost_nok numeric(12, 2) check (direct_cost_nok >= 0);

alter table public.activities add column minutes integer check (minutes >= 0);

-- Allow the new «bounce» activity type.
alter table public.activities drop constraint activities_type_check;
alter table public.activities add constraint activities_type_check check (type in (
  'note', 'email_sent', 'reply', 'call', 'meeting', 'status_change',
  'opt_out', 'sale', 'ai_analysis', 'import', 'follow_up', 'bounce'
));

-- ---------------------------------------------------------------------------
-- Marketing spend per week and channel (entered manually, e.g. Google Ads)
-- ---------------------------------------------------------------------------

create table public.channel_costs (
  id uuid primary key default gen_random_uuid(),
  week_start date not null,
  channel text not null check (channel in (
    'google_ads', 'meta_ads', 'linkedin', 'outreach', 'referral', 'partner', 'organic', 'other'
  )),
  amount_nok numeric(12, 2) not null check (amount_nok >= 0),
  hours numeric(6, 2) not null default 0 check (hours >= 0),
  note text,
  unique (week_start, channel)
);

create table public.weekly_reports (
  week_start date primary key,
  data jsonb not null,
  emailed_at timestamptz,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Immediate stop: any reply, opt-out or bounce cancels every unsent message
-- to that company (first mail and follow-ups), and flags it for review.
-- ---------------------------------------------------------------------------

create or replace function public.stop_outreach_on_reply()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.type in ('reply', 'opt_out', 'bounce') then
    update public.outreach_messages
      set status = 'cancelled',
          error = case new.type
            when 'reply' then 'Stoppet: mottaker har svart'
            when 'opt_out' then 'Stoppet: mottaker har reservert seg'
            else 'Stoppet: e-posten kom i retur'
          end
      where company_id = new.company_id and status in ('draft', 'approved');
    update public.companies
      set replied_at = case when new.type = 'reply' then now() else replied_at end,
          needs_review = (new.type = 'reply')
      where id = new.company_id;
  end if;
  return new;
end;
$$;

create trigger activities_stop_outreach after insert on public.activities
  for each row execute function public.stop_outreach_on_reply();

-- ---------------------------------------------------------------------------
-- RLS for the new tables (same rules as part 1)
-- ---------------------------------------------------------------------------

alter table public.crm_settings enable row level security;
alter table public.ai_usage enable row level security;
alter table public.worker_runs enable row level security;
alter table public.worker_state enable row level security;
alter table public.channel_costs enable row level security;
alter table public.weekly_reports enable row level security;

do $$
declare t text;
begin
  foreach t in array array['crm_settings', 'ai_usage', 'worker_runs', 'worker_state', 'channel_costs', 'weekly_reports'] loop
    execute format('create policy %I on public.%I for select to authenticated using (public.is_staff())', t || '_staff_read', t);
    execute format('create policy %I on public.%I for insert to authenticated with check (public.is_admin())', t || '_admin_insert', t);
    execute format('create policy %I on public.%I for update to authenticated using (public.is_admin()) with check (public.is_admin())', t || '_admin_update', t);
    execute format('create policy %I on public.%I for delete to authenticated using (public.is_admin())', t || '_admin_delete', t);
  end loop;
end;
$$;

revoke all on all tables in schema public from anon;
