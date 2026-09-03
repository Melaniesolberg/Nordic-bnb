export interface SeoPageConfig {
  slug: string;
  location: string;
  focus: "short-term" | "long-term" | "both";
  title: string;
  description: string;
  h1: string;
  intro: string;
}

export const seoPages: SeoPageConfig[] = [
  {
    slug: "property-management-costa-del-sol",
    location: "Costa del Sol",
    focus: "both",
    title: "Property Management Costa del Sol | Nordic BnB",
    description:
      "Full-service short-term and long-term property management across the Costa del Sol — Marbella, Mijas, Fuengirola and Benalmádena. Your property, continuously improved.",
    h1: "Property management across the Costa del Sol.",
    intro:
      "Nordic BnB manages holiday and long-term rentals for owners across the Costa del Sol — handling positioning, pricing, distribution, guest experience, cleaning and maintenance as one continuous system, rather than a one-time listing setup.",
  },
  {
    slug: "airbnb-management-marbella",
    location: "Marbella",
    focus: "short-term",
    title: "Airbnb Management Marbella | Nordic BnB",
    description:
      "Airbnb and Booking.com management for property owners in Marbella. Listing optimisation, dynamic pricing, guest communication, cleaning and maintenance — fully managed.",
    h1: "Airbnb management in Marbella.",
    intro:
      "Marbella is Spain's most established luxury short-term rental market — and one of the most competitive. Nordic BnB manages the full Airbnb and Booking.com operation for Marbella property owners, from listing presentation to nightly pricing to guest experience.",
  },
  {
    slug: "airbnb-management-fuengirola",
    location: "Fuengirola",
    focus: "short-term",
    title: "Airbnb Management Fuengirola | Nordic BnB",
    description:
      "Airbnb and Booking.com management for property owners in Fuengirola. Listing optimisation, dynamic pricing, guest communication, cleaning and maintenance — fully managed.",
    h1: "Airbnb management in Fuengirola.",
    intro:
      "Fuengirola sees consistent, high-volume beachfront tourism year-round. Nordic BnB manages the full short-term rental operation for Fuengirola owners — positioning the listing, pricing it dynamically, and handling every guest touchpoint.",
  },
  {
    slug: "airbnb-management-benalmadena",
    location: "Benalmádena",
    focus: "short-term",
    title: "Airbnb Management Benalmádena | Nordic BnB",
    description:
      "Airbnb and Booking.com management for property owners in Benalmádena. Listing optimisation, dynamic pricing, guest communication, cleaning and maintenance — fully managed.",
    h1: "Airbnb management in Benalmádena.",
    intro:
      "Benalmádena blends family holiday lets with long-term coastal living. Nordic BnB manages the complete short-term rental operation for Benalmádena owners — listing, pricing, guest communication, cleaning and maintenance.",
  },
  {
    slug: "property-management-mijas",
    location: "Mijas",
    focus: "both",
    title: "Property Management Mijas | Nordic BnB",
    description:
      "Short-term and long-term property management in Mijas Costa and the hillside pueblo. Listing optimisation, pricing, tenant coordination and full operational management.",
    h1: "Property management in Mijas.",
    intro:
      "From coastal Mijas Costa to the hillside pueblo, Nordic BnB manages both short-term and long-term rentals for Mijas property owners — with local operational coverage across cleaning, styling and maintenance.",
  },
  {
    slug: "long-term-rental-management-costa-del-sol",
    location: "Costa del Sol",
    focus: "long-term",
    title: "Long-Term Rental Management Costa del Sol | Nordic BnB",
    description:
      "Long-term rental management for property owners across the Costa del Sol — marketing, tenant coordination, rent management and property oversight.",
    h1: "Long-term rental management on the Costa del Sol.",
    intro:
      "For owners who want predictable, lower-intensity income, Nordic BnB manages the complete long-term rental operation across the Costa del Sol — from tenant sourcing to rent collection to ongoing property oversight.",
  },
];
