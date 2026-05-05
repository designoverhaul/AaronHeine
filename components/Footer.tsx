export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p style={{ color: '#b8b8b8', margin: 0, fontSize: '13px' }}>
          Aaron Heine - {currentYear}
        </p>
      </div>
    </footer>
  );
}
