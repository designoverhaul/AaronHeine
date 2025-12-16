'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p style={{ color: 'var(--text-color)', textAlign: 'center' }}>
        Aaron Heine - {currentYear}
      </p>

      <div
        style={{
          backgroundColor: 'var(--text-color)',
          borderRadius: '11px',
          padding: '9px',
        }}
        className="theme-switch-wrapper"
      >
        <i className="fas fa-sun"></i>
        <label className="theme-switch" htmlFor="checkbox-footer">
          <input type="checkbox" id="checkbox-footer" />
          <div className="slider round"></div>
        </label>
        <i className="fas fa-moon"></i>
      </div>
    </footer>
  );
}
