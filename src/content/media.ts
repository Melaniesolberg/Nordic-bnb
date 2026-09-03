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

  // Second generation batch — villas, interiors, per-area scenes, operations
  // sequence and atmosphere shots.
  villaAerial:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142507_ddd9ed1a-0039-44e5-a0d0-b118c8263e90.png",
  interiorLiving:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142507_da4e262f-5178-490b-8255-6a5705c00f96.png",
  poolDay:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142507_52b1592c-fc99-42af-a05d-9538eca19cd9.png",
  seaView:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142506_61d8aaa9-7b5f-4908-a074-07a80feee1ec.png",
  marbellaLifestyle:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142506_ed904f5e-2909-4109-987b-2c36e82adc79.png",
  mijasScene:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142506_5d3397da-3e0e-4e28-bd63-2dcee47812ad.png",
  fuengirolaScene:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142506_8459ec8b-33ee-4de4-9ae7-bef59aac9c1d.png",
  benalmadenaScene:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142507_f862026c-5f13-4d08-bdf8-02c5e985676e.png",
  stylingDetail:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142506_cc4032a0-85da-44a2-92bc-ce7f5c0855d2.png",
  cleaningMoment:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142507_b6f43e44-537e-45b2-8b86-9c5aadeb758f.png",
  guestArrival:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142507_105a43a9-4d16-45c6-ac53-0a30d6c6fc08.png",
  detailShot:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142507_d05137c2-2315-4b37-8004-fc29842197a9.png",
  nightVilla:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142518_d0ce9f72-cd5b-4e89-a3fb-79971b81778e.png",
  sunsetSea:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142518_695df57d-bd33-4802-add5-d8f74ce54828.png",
  aerialCoast:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_142518_e12d2911-c97a-4929-a1b8-1ea84be93f9b.png",
} as const;
