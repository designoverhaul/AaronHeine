'use client';

import { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImageLightboxProps {
  children: React.ReactNode;
}

export default function ImageLightbox({ children }: ImageLightboxProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [images, setImages] = useState<Array<{ src: string; alt: string }>>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Array<{ src: string; alt: string }>>([]);

  useEffect(() => {
    console.log('=== ImageLightbox: Component mounted ===');
    
    // Use a longer delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      if (!contentRef.current) {
        console.error('ImageLightbox: contentRef.current is still null after delay');
        return;
      }

      console.log('ImageLightbox: contentRef.current found:', contentRef.current);

      const updateImages = () => {
        const imgElements = contentRef.current?.querySelectorAll('img') || [];
        console.log('ImageLightbox: Found', imgElements.length, 'images in DOM');
        
        const imageArray: Array<{ src: string; alt: string }> = [];

        imgElements.forEach((img, idx) => {
          let src = img.src || img.getAttribute('src') || '';
          
          // Handle Next.js optimized images
          if (img.getAttribute('srcset')) {
            const srcset = img.getAttribute('srcset') || '';
            const matches = srcset.match(/(https?:\/\/[^\s,]+)/);
            if (matches && matches[1]) {
              src = matches[1];
            }
          }
          
          const alt = img.alt || img.getAttribute('alt') || '';
          
          if (src && !src.startsWith('data:')) {
            imageArray.push({ src, alt });
            img.style.cursor = 'pointer';
            console.log(`ImageLightbox: Added image ${idx + 1}:`, src.substring(0, 50) + '...');
          }
        });

        imagesRef.current = imageArray;
        setImages(imageArray);
        console.log('ImageLightbox: Total images in array:', imageArray.length);
      };

      // Initial update
      updateImages();

      // Update again after delay for lazy-loaded images
      const updateTimeout = setTimeout(updateImages, 1000);

      const handleImageClick = (e: MouseEvent) => {
        console.log('ImageLightbox: Click event fired on:', e.target);
        const target = e.target as HTMLElement;
        
        let imgElement: HTMLImageElement | null = null;
        
        if (target.tagName === 'IMG') {
          imgElement = target as HTMLImageElement;
          console.log('ImageLightbox: Direct IMG click');
        } else if (target.closest('img')) {
          imgElement = target.closest('img') as HTMLImageElement;
          console.log('ImageLightbox: Click inside IMG');
        } else if (target.closest('a')) {
          const link = target.closest('a');
          const imgInLink = link?.querySelector('img');
          if (imgInLink) {
            imgElement = imgInLink;
            console.log('ImageLightbox: Click on link containing IMG');
          }
        }

        if (imgElement) {
          console.log('ImageLightbox: Image element found!');
          e.preventDefault();
          e.stopPropagation();
          
          let src = imgElement.src || imgElement.getAttribute('src') || '';
          console.log('ImageLightbox: Image src:', src.substring(0, 50) + '...');
          
          if (imgElement.getAttribute('srcset')) {
            const srcset = imgElement.getAttribute('srcset') || '';
            const matches = srcset.match(/(https?:\/\/[^\s,]+)/);
            if (matches && matches[1]) {
              src = matches[1];
              console.log('ImageLightbox: Extracted from srcset:', src.substring(0, 50) + '...');
            }
          }

          if (src && !src.startsWith('data:')) {
            // Create a single-image array with just the clicked image
            const clickedImage = { src, alt: imgElement.alt || '' };
            imagesRef.current = [clickedImage];
            setImages([clickedImage]);
            setLightboxIndex(0);
            setLightboxOpen(true);
            console.log('ImageLightbox: Opening lightbox with clicked image:', src.substring(0, 50) + '...');
          }
        } else {
          console.log('ImageLightbox: No IMG element found in click target');
        }
      };

      const container = contentRef.current;
      container.addEventListener('click', handleImageClick, true); // Use capture phase
      console.log('ImageLightbox: Event listener attached with capture');

      return () => {
        clearTimeout(updateTimeout);
        if (container) {
          container.removeEventListener('click', handleImageClick, true);
        }
      };
    }, 100);

    return () => {
      clearTimeout(initTimeout);
    };
  }, []);

  console.log('ImageLightbox render: images.length =', images.length, 'lightboxOpen =', lightboxOpen);

  return (
    <>
      <div ref={contentRef}>{children}</div>
      {images.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => {
            console.log('ImageLightbox: Closing lightbox');
            setLightboxOpen(false);
          }}
          index={lightboxIndex}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />
      )}
    </>
  );
}
