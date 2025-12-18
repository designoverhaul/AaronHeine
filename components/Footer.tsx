'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p style={{ color: '#b8b8b8', margin: 0, fontSize: '13px' }}>
          Aaron Heine - {currentYear}
        </p>

        <div
          style={{
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
      </div>
    </footer>
  );
}
