import Link from "next/link";
import BbNav from "@/components/boligboost/nav";
import BbFooter from "@/components/boligboost/footer";
import { getBbContent, bbHref } from "@/content/boligboost";

export default function NotFound() {
  const content = getBbContent("en");

  return (
    <>
      <BbNav locale="en" nav={content.nav} />
      <main className="bg-ivory text-charcoal">
        <section className="py-32 text-center sm:py-40">
          <div className="mx-auto max-w-[600px] px-5 sm:px-8">
            <h1 className="font-serif-display text-display-md text-charcoal">Page not found.</h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal/65">
              The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
            </p>
            <Link
              href={bbHref("en")}
              className="mt-8 inline-flex items-center rounded-full border border-charcoal/20 px-7 py-4 text-sm font-medium tracking-wide text-charcoal/80 transition-colors hover:border-amber-600 hover:text-amber-700"
            >
              Back to the homepage
            </Link>
          </div>
        </section>
      </main>
      <BbFooter locale="en" footer={content.footer} />
    </>
  );
}
