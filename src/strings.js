/** Lower-case words joined by hyphens, for addresses. */
export function slugify(text) {
  return text
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
