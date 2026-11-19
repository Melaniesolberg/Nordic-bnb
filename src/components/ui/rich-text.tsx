import Link from "next/link";
import { Fragment } from "react";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Keeps Norwegian amounts like "100 000 kr" on one line. */
function keepNumbersTogether(text: string): string {
  return text.replace(/(\d) (?=\d{3}\b)/g, "$1\u00a0").replace(/(\d) (?=(kr|m²|millioner)\b)/g, "$1\u00a0");
}

/**
 * Renders content text with inline links written as [label](href).
 * Internal paths use next/link; external sources open in a new tab.
 */
export default function RichText({ text, linkClassName = "" }: { text: string; linkClassName?: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(keepNumbersTogether(text.slice(last, index)));
    const className = `underline underline-offset-4 decoration-1 hover:decoration-2 ${linkClassName}`;
    parts.push(
      href.startsWith("/") ? (
        <Link key={index} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      ),
    );
    last = index + whole.length;
  }
  if (last < text.length) parts.push(keepNumbersTogether(text.slice(last)));
  return <Fragment>{parts}</Fragment>;
}

/** The same text with link markup removed, for structured data and metadata. */
export function plainText(text: string): string {
  return text.replace(LINK, "$1");
}
