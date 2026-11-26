import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Eiendomly CRM", template: "%s – Eiendomly CRM" },
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminRootLayout({ children }: LayoutProps<"/admin">) {
  // data-lenis-prevent: the public site's smooth scrolling is turned off here
  // so tables and long forms scroll natively.
  return (
    <div data-lenis-prevent className="min-h-screen w-full bg-[#f4f2ee] font-sans text-charcoal">
      {children}
    </div>
  );
}
