export function estimateReadingTime(content: string): number {
  const text = content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*\-\[\]\(\)`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return 1;
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200);
  return Math.max(1, minutes);
}
