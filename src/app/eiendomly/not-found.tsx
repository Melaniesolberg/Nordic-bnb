import Link from "next/link";
import BbNav from "@/components/eiendomly/nav";
import BbFooter from "@/components/eiendomly/footer";
import { getBbContent, bbHref } from "@/content/eiendomly";

export default function NotFound() {
  const content = getBbContent("nb");

  return (
    <>
      <BbNav locale="nb" nav={content.nav} />
      <main className="bg-ivory text-charcoal">
        <section className="py-32 text-center sm:py-40">
          <div className="mx-auto max-w-[600px] px-5 sm:px-8">
            <h1 className="font-serif-display text-display-md text-charcoal">Siden finnes ikke.</h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal/65">
              Siden du ser etter finnes ikke, eller har flyttet.
            </p>
            <Link
              href={bbHref("nb")}
              className="mt-8 inline-flex items-center rounded-full border border-charcoal/20 px-7 py-4 text-sm font-medium tracking-wide text-charcoal/80 transition-colors hover:border-amber-600 hover:text-amber-700"
            >
              Tilbake til forsiden
            </Link>
          </div>
        </section>
      </main>
      <BbFooter locale="nb" footer={content.footer} />
    </>
  );
}
