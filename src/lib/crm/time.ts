/** ISO timestamp `days` from now. Kept outside components so render stays pure. */
export function isoDaysFromNow(days: number): string {
  return new Date(Date.now() + days * 86_400_000).toISOString();
}
