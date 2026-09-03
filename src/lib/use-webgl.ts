"use client";

import { useSyncExternalStore } from "react";

let cached: boolean | null = null;

function detect(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    cached = !!gl;
  } catch {
    cached = false;
  }
  return cached;
}

function noopSubscribe() {
  return () => {};
}

/** SSR-safe WebGL feature check; assumes support during server render / hydration. */
export function useWebglSupported(): boolean {
  return useSyncExternalStore(noopSubscribe, detect, () => true);
}
