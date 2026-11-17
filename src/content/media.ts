/**
 * Imagery generated via Higgsfield for Eiendomly, served from Higgsfield's
 * CDN (see next.config.ts remotePatterns). Replace any entry with real
 * photography by swapping the URL.
 */
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf";
const UPLOADS = "https://d2ol7oe51mr4n9.cloudfront.net/user_3IoUHDHJ3bn5M2naOproHddtTuf";

export const media = {
  // Scroll-scrubbed hero: drone glide toward a timber house above a fjord,
  // ending inside the living room. Encoded 1080p, keyframe every 8 frames,
  // +faststart so per-frame seeking stays cheap. Poster = its first frame.
  heroVideo: `${UPLOADS}/8c205a3b-2025-4389-adc4-f7e025c752b8.mp4`,
  // 1280px, keyframe every 6 frames: lighter and smoother to scrub on phones.
  heroVideoMobile: `${UPLOADS}/8054de05-1db7-46f7-a811-d513256757e1.mp4`,
  heroPoster: `${UPLOADS}/bcda31b0-8a5c-410b-affb-851cd074e153.jpg`,

  // Same living room before and after enhancement (the "before" was made
  // from the "after" by reference editing, so layout and furniture match).
  livingBefore: `${CDN}/hf_20261116_231520_c02b0d3e-e6a1-4930-8546-f2fb9bb14f91.png`,
  livingAfter: `${CDN}/hf_20261116_213508_08bff40a-482a-40a1-aacd-d6b6d29b3ac5.png`,

  stagedLiving: `${CDN}/hf_20261116_213509_220da4bb-c3da-4aea-bfe9-18fedb3d0c1d.png`,
  // Same room, empty vs. digitally staged – aligned pair for the staging slider.
  emptyLiving: `${CDN}/hf_20261117_012657_e8fd3047-03f6-4593-a613-c5ade3ece1cc.png`,
  stagedLivingAligned: `${CDN}/hf_20261117_012953_62a5237b-e473-43ed-ba10-28744093a155.png`,
  kitchenRefresh: `${CDN}/hf_20261116_213509_8a920441-9089-4c93-bbc7-024f339a0103.png`,

  stepPhone: `${CDN}/hf_20261116_213240_42f24f55-0986-442b-ba20-1e66d060f369.png`,
  stepEditing: `${CDN}/hf_20261116_213241_3b19953d-7860-42c1-8710-13d9303a51a2.png`,
  stepListing: `${CDN}/hf_20261116_213240_58c31b83-ba53-4ef8-899e-1780af743258.png`,

  audienceCabin: `${CDN}/hf_20261116_213240_abf74ea5-1f78-4dd0-869f-7e15d6b12fdf.png`,
  audienceRental: `${CDN}/hf_20261116_213241_8a804e0e-1527-4dc4-89d7-b55f580fd833.png`,
  audienceSeller: `${CDN}/hf_20261116_213241_847aa9d1-b0cf-4a4c-a4d7-4588dde2790a.png`,
  audienceAgent: `${CDN}/hf_20261116_213240_23f8cb9c-20c7-4b85-9901-d07ee866a36d.png`,
  audienceHotel: `${CDN}/hf_20261116_213240_7140580b-79ec-4701-bec8-9920337f26da.png`,
  audienceRestaurant: `${CDN}/hf_20261116_213748_3d3b0522-df2a-4c9b-b857-10d9a93b32f8.png`,

  harbourTown: `${CDN}/hf_20261116_213749_15b0e138-383f-4570-848c-7ac87d68723a.png`,
  houseDusk: `${CDN}/hf_20261116_213749_25d5d00b-08e4-4bbf-86b5-2b5db1bab669.png`,
  heroAerial: `${CDN}/hf_20261116_213511_1e13cb4f-1ca0-4d85-ac5d-4decb663a8db.png`,

  founderPhoto: "/images/melanie.jpg",
} as const;
