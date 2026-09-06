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
  // Real Nordic BnB brand assets. brandLogo is the user's single combined
  // lockup file (icon + "Nordic bnb" wordmark already laid out together as
  // one image), run through Higgsfield's background remover to guarantee a
  // transparent PNG. brandIcon is the icon alone, used standalone for the
  // favicon and small decorative marks. Do not swap for another variant.
  brandLogo:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260906_082506_33fdbab6-624b-4f34-87f8-0aabe7fc3cd8.png",
  brandIcon:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260905_144026_4d601721-c7fe-4183-9978-c1ed89f0ef51.png",
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

  // Third generation batch — team + expanded before/after portfolio.
  cleaningTeam:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_155215_22cc0b87-e5fd-41b5-a277-878265765037.png",
  villaBefore:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_155215_44bfeb9a-3fe5-4007-a2f5-cca43bd832b3.png",
  villaAfter:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_155215_0f75446e-fe33-4291-a4ac-ed7da9bc72c0.png",
  houseBefore:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_155215_a757e9a7-f8d9-4fe1-a790-788c4029c9d2.png",
  houseAfter:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260903_155215_f2f3cdd6-db6c-433a-aa97-a6289337a244.png",

  // Real, unedited photo of Petter (co-founder), uploaded by the user
  // directly — used as-is in the About section.
  founderPetter:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/d809abb8-d01d-40d5-bca7-2e339ee0255e.png",

  // Real, unedited team photos (Petter and Melanie, in Nordic BnB polo
  // shirts), uploaded by the user directly — used as-is on the Contact page.
  contactPetterPhoto:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/8f0ea737-3fef-4592-93e7-a43cfb9b4d44.png",
  contactMelaniePhoto:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/6713dab7-637e-4218-aa38-66ee56082f0b.png",

  // Real before/after property photography, uploaded by the user directly.
  // Each file is a single collage image with the "before" half on the left
  // and the "after" half on the right — rendered as a real drag-to-reveal
  // slider (see PortfolioSlider in the Portfolio component), which crops
  // each half via a doubled-width clip rather than object-position so the
  // two halves never blend together at rest.
  realApartmentFuengirolaCollage:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/99861524-ba90-4bfc-ad2f-f7d894a803c4.png",
  realHouseMijasCollage:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/b4167031-8506-4a4a-b763-37fe7975a2bf.png",
  realVillaMarbellaCollage:
    "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/a1fcdf64-b1b0-44da-9e6d-d2fc8467149a.png",

  // Matching before/after pair for the top "Samme eiendom" slider — the
  // "before" was generated from the "after" via reference-guided editing so
  // it is guaranteed to be the same room/layout (same walls, windows,
  // perspective), just with dated, ugly furniture and curtains left
  // partly open so the same view is still visibly the same room.
  roomAfterStyled:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260905_094141_2601516f-f042-4a87-9500-b16787052be0.png",
  roomBeforeUnstyled:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260905_145712_627a1fb9-e39c-4e09-91cf-cb428df58ebe.png",

  // Handover visual for the process section's first step — customer and
  // Nordic BnB team member shaking hands / exchanging keys outside a villa.
  handoverVilla:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf/hf_20260905_094209_7fbb138f-2980-446b-8ee7-5a84cebb3147.png",
} as const;
