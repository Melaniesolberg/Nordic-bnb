import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const WHATSAPP_NUMBER = "4740465093";
export const WHATSAPP_LINK = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const CONTACT = {
  emailGeneral: "hello@nordicbnb.es",
  emailFounder: "petter@nordicbnb.es",
  emailMelanie: "melanie@nordicbnb.es",
  whatsappDisplay: "+47 404 65 093",
  site: "https://nordicbnb.es",
};

export const ORG_NUMBER_URL =
  "https://www.proff.no/selskap/nordic-bnb-solberg/laksev%C3%A5g/reklamebyr%C3%A5er/IFETZ5S01DI";
