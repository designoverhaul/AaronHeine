'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="navy">
      <h1 className="myLogo" style={{ fontWeight: 500, marginLeft: '16px', marginTop: '8px', color: '#cacaca' }}>
        Aaron Heine
      </h1>

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
          Writing
        </Link>
        <Link
          href="/contact"
          className={pathname === '/contact' ? 'current-page' : ''}
        >
          Need Help?
        </Link>
      </div>

      <div className="theme-switch-wrapper" style={{ marginRight: '8px' }}>
        <i className="fas fa-sun"></i>
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        <i className="fas fa-moon"></i>
      </div>
    </div>
  );
}
