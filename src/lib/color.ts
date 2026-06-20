import { palettes } from "./palettes";

export function pickColor(id: string, theme: keyof typeof palettes) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }

  const palette = palettes[theme];
  return palette[Math.abs(hash) % palette.length];
}
