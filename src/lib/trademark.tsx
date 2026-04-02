import type { ReactNode } from "react";

/**
 * Parses a string containing ® and ™ symbols and wraps them in <sup> tags
 * so they render as small superscripts rather than full-size inline characters.
 *
 * Usage: {tm("Cortec® VpCI® Technology")}
 */
export function tm(text: string): ReactNode {
  if (!text.includes("®") && !text.includes("™")) return text;

  const parts = text.split(/(®|™)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "®" || part === "™" ? (
          <sup key={i}>{part}</sup>
        ) : (
          part
        )
      )}
    </>
  );
}
