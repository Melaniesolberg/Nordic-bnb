import type { Channel, ContactBasis, Segment, Service, Status } from "@/lib/crm/constants";

export interface CompanyRow {
  id: string;
  name: string;
  name_normalized: string;
  org_number: string | null;
  segment: Segment;
  website: string | null;
  domain: string | null;
  general_email: string | null;
  email_is_generic: boolean | null;
  phone: string | null;
  address: string | null;
  postal_code: string | null;
  city: string | null;
  municipality: string | null;
  nace_code: string | null;
  nace_description: string | null;
  employees: number | null;
  source: string;
  source_url: string | null;
  status: Status;
  score: number | null;
  recommended_service: Exclude<Service, "other"> | null;
  needs_summary: string | null;
  score_reason: string | null;
  analysis: Record<string, unknown> | null;
  analyzed_at: string | null;
  estimated_value_nok: number | null;
  acquisition_channel: Channel | null;
  contact_basis: ContactBasis;
  contact_basis_note: string | null;
  do_not_contact: boolean;
  opted_out_at: string | null;
  opt_out_reason: string | null;
  tags: string[];
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface MessageRow {
  id: string;
  company_id: string;
  to_email: string | null;
  subject: string;
  body: string;
  status: "draft" | "approved" | "sent" | "failed" | "cancelled";
  generated_by: string;
  approved_at: string | null;
  sent_at: string | null;
  error: string | null;
  created_at: string;
  companies?: Pick<CompanyRow, "id" | "name" | "segment" | "score" | "contact_basis" | "do_not_contact" | "status"> | null;
}

export interface ActivityRow {
  id: string;
  company_id: string;
  type: string;
  summary: string;
  details: Record<string, unknown> | null;
  follow_up_at: string | null;
  occurred_at: string;
}

export interface DealRow {
  id: string;
  company_id: string;
  service: Service;
  channel: Channel;
  amount_nok: number;
  status: "open" | "won" | "lost";
  probability: number;
  expected_close: string | null;
  closed_at: string | null;
  note: string | null;
  created_at: string;
}

export interface DashboardStats {
  prospects: number;
  qualified: number;
  contacted: number;
  interested: number;
  customers: number;
  do_not_contact: number;
  awaiting_approval: number;
  approved_unsent: number;
  revenue_total: number;
  pipeline_value: number;
  pipeline_unweighted: number;
  revenue_by_service: Record<string, number>;
  revenue_by_channel: Record<string, number>;
  by_segment: Record<string, number>;
  by_status: Record<string, number>;
  follow_ups_due: number;
}
