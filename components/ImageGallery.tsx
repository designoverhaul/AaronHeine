'use client';

import { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ImageGalleryProps {
  children: React.ReactNode;
}

export default function ImageGallery({ children }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [images, setImages] = useState<Array<{ src: string; alt: string }>>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Array<{ src: string; alt: string }>>([]);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateImages = () => {
      const imgElements = contentRef.current?.querySelectorAll('img') || [];
      const imageArray: Array<{ src: string; alt: string }> = [];

      imgElements.forEach((img) => {
        let src = img.src || img.getAttribute('src') || '';
        const alt = img.alt || img.getAttribute('alt') || '';
        
        if (src && !src.startsWith('data:')) {
          imageArray.push({ src, alt });
          img.style.cursor = 'pointer';
        }
      });

      imagesRef.current = imageArray;
      setImages(imageArray);
    };

    updateImages();
    const updateTimeout = setTimeout(updateImages, 500);

    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      let imgElement: HTMLImageElement | null = null;
      
      if (target.tagName === 'IMG') {
        imgElement = target as HTMLImageElement;
      } else if (target.closest('img')) {
        imgElement = target.closest('img') as HTMLImageElement;
      }

      if (imgElement) {
        e.preventDefault();
        e.stopPropagation();
        
        let src = imgElement.src || imgElement.getAttribute('src') || '';
        
        if (src && !src.startsWith('data:')) {
          const currentImages = imagesRef.current;
          const index = currentImages.findIndex((img) => {
            const imgSrc = img.src.split('?')[0].replace(/^https?:\/\//, '');
            const targetSrc = src.split('?')[0].replace(/^https?:\/\//, '');
            return imgSrc === targetSrc || img.src === src || img.src.includes(targetSrc) || targetSrc.includes(imgSrc);
          });
          
          if (index !== -1) {
            setLightboxIndex(index);
            setLightboxOpen(true);
          }
        }
      }
    };

    const container = contentRef.current;
    container.addEventListener('click', handleImageClick, true);

    return () => {
      clearTimeout(updateTimeout);
      if (container) {
        container.removeEventListener('click', handleImageClick, true);
      }
    };
  }, []);

  return (
    <>
      <div ref={contentRef}>{children}</div>
      {images.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      )}
    </>
  );
}

