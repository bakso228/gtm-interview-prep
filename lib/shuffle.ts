export function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function filterByCategory<T extends { category: string }>(
  arr: T[],
  category: string | null
): T[] {
  if (!category) return arr;
  return arr.filter((item) => item.category === category);
}
