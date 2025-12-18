/**
 * Process WordPress content to fix image URLs and ensure proper rendering
 */
export function processWordPressContent(content: string, baseUrl: string = 'https://aaronheine.com'): string {
  // Fix video source URLs in existing video tags (WordPress already has proper video tags)
  let processed = content.replace(
    /<video([^>]*)>([\s\S]*?)<\/video>/gi,
    (match, attributes, innerContent) => {
      // Fix source URLs
      let fixedContent = innerContent.replace(
        /<source\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/gi,
        (_sourceMatch: string, beforeSrc: string, src: string, afterSrc: string) => {
          let videoSrc = src;
          if (src.startsWith('/')) {
            videoSrc = `${baseUrl}${src}`;
          } else if (!src.startsWith('http')) {
            videoSrc = `${baseUrl}/${src}`;
          }
          return `<source ${beforeSrc}src="${videoSrc}"${afterSrc}>`;
        }
      );
      
      return `<video${attributes}>${fixedContent}</video>`;
    }
  );

  // Fix relative image URLs
  processed = processed.replace(
    /<img([^>]*)\ssrc=["']([^"']+)["']/gi,
    (match, attributes, src) => {
      if (src.startsWith('/')) {
        return `<img${attributes} src="${baseUrl}${src}"`;
      }
      if (!src.startsWith('http')) {
        return `<img${attributes} src="${baseUrl}/${src}"`;
      }
      return match;
    }
  );

  // Fix relative URLs in other elements
  processed = processed.replace(
    /(href|src)=["'](\/[^"']+)["']/gi,
    (match, attr, url) => {
      if (url.startsWith('//')) {
        return `${attr}="${url}"`;
      }
      return `${attr}="${baseUrl}${url}"`;
    }
  );

  return processed;
}

