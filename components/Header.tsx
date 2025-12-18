'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

          // Only update if scrolled more than 5px to prevent jitter
          if (scrollDifference > 5) {
            // Show header when at top of page
            if (currentScrollY < 10) {
              setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
              // Scrolling down - hide header
              setIsVisible(false);
            } else {
              // Scrolling up - show header
              setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navy ${isVisible ? 'navy-visible' : 'navy-hidden'}`}>
      <div className="navy-container">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 className="myLogo" style={{ fontWeight: 500, marginLeft: '16px', color: '#cacaca' }}>
            Aaron Heine
          </h1>
        </Link>

        <div className="nav-links">
          <Link
            href="/"
            style={{ fontSize: '1.5rem', color: '#b8b8b8', display: 'block' }}
            className={pathname === '/' ? 'current-page' : ''}
          >
            <i className="fas fa-house"></i>
          </Link>
          <Link
            href="/portfolio"
            className={pathname === '/portfolio' ? 'current-page' : ''}
          >
            Portfolio
          </Link>
          <Link
            href="/life"
            className={pathname === '/life' ? 'current-page' : ''}
          >
            Random
          </Link>
          <Link
            href="/contact"
            className={pathname === '/contact' ? 'current-page' : ''}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
