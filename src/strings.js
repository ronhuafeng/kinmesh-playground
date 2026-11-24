/** Lower-case words joined by hyphens, for addresses. */
export function slugify(text) {
  return text
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

/** Truncate to at most max grapheme clusters, including the ellipsis. */
export function truncate(text, max) {
  const characters = Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), part => part.segment);
  if (characters.length <= max) return text;
  if (max <= 0) return '';
  return characters.slice(0, max - 1).join('') + '…';
}
