/**
 * Cinematic imagery generated via Higgsfield for the Nordic BnB experience.
 *
 * These are served directly from Higgsfield's CDN (see next.config.ts
 * remotePatterns). This sandbox's network policy blocks that CDN host, so
 * the images can't be downloaded into /public or verified with a local
 * screenshot in this environment — they will render normally once the site
 * is deployed. Swap any of these for real property photography by
 * replacing the URL string.
 */
export const media = {
  // Real Nordic BnB brand assets, uploaded by the user via the Higgsfield
  // media widget. These are the exact original files — do not regenerate.
  brandLogo:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/bef9492b-de81-4667-856c-c1432fec1c60.png",
  brandIcon:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/3ae2acbc-bddb-4922-bfa9-d1e09c88d7d5.png",
  brandMerch:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/0b6e253a-5c3d-4549-8b13-bc988759332b.png",

  heroVilla:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_111038_b2e7c852-74ff-4b5b-b324-ee38838ae978.png",
  listingBefore:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_111040_7feec892-c68f-44bd-b8d1-3d2d8b72b8b7.png",
  listingAfter:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_111038_bd665605-7742-45cf-9af5-3e76cffdbc59.png",
  coastline:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_111038_f024a3e1-fa0d-4e99-97c2-1d6b8ea3b843.png",
  poolNight:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_111038_85c14d1a-1427-46c3-9492-061fd5951b29.png",
} as const;
