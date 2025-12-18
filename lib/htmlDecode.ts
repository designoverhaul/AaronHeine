// Helper function to decode HTML entities for use in JSX attributes
export function decodeHtmlEntities(text: string): string {
  const textArea = typeof document !== 'undefined'
    ? document.createElement('textarea')
    : null;

  if (textArea) {
    textArea.innerHTML = text;
    return textArea.value;
  }

  // Fallback for server-side rendering
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '\'')
    .replace(/&#8217;/g, '\'')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"');
}
