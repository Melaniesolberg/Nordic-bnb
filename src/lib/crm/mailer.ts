import "server-only";
import nodemailer from "nodemailer";
import { crmEnv, isSmtpConfigured } from "@/lib/crm/config";

/** SMTP sending (e.g. Webhuset: smtp.webhuset.no, port 465, SSL). */
export async function sendMail(opts: {
  to: string;
  subject: string;
  text: string;
  unsubscribeUrl: string | null;
}): Promise<{ messageId: string }> {
  if (!isSmtpConfigured()) throw new Error("SMTP er ikke satt opp.");
  const transport = nodemailer.createTransport({
    host: crmEnv.smtpHost,
    port: crmEnv.smtpPort,
    secure: crmEnv.smtpPort === 465,
    auth: { user: crmEnv.smtpUser, pass: crmEnv.smtpPassword },
  });
  const headers: Record<string, string> = {};
  if (opts.unsubscribeUrl) {
    headers["List-Unsubscribe"] = `<${opts.unsubscribeUrl}>`;
    headers["List-Unsubscribe-Post"] = "List-Unsubscribe=One-Click";
  }
  const info = await transport.sendMail({
    from: crmEnv.outreachFrom,
    replyTo: crmEnv.outreachReplyTo || undefined,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    headers,
  });
  return { messageId: info.messageId };
}
