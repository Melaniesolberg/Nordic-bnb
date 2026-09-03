import { NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
  bedrooms: string;
  currentlyRented: string;
  strategy: string;
  message: string;
}

/**
 * Receives property review requests from the homepage lead form.
 *
 * No email/CRM provider is wired up yet — this validates and accepts the
 * submission so the frontend flow is complete end to end. Before launch,
 * forward `payload` to a transactional email provider (e.g. Resend,
 * Postmark) addressed to hello@nordicbnb.es, or into a CRM.
 */
export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.phone) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  console.log("[nordic-bnb] property review request received:", {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    location: payload.location,
    propertyType: payload.propertyType,
    bedrooms: payload.bedrooms,
    currentlyRented: payload.currentlyRented,
    strategy: payload.strategy,
  });

  return NextResponse.json({ ok: true });
}
