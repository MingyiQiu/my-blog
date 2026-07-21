export function pickColor(id: string, palette: string[]) {
  let hash = 2166136261;

  for (let i = 0; i < id.length; i++) {
    hash ^= id.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return palette[(hash >>> 0) % palette.length];
}
