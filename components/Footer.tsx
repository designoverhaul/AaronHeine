export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p className="mb-2">Life and designs of a dad in Atlanta Georgia.</p>
          <p className="text-sm">&copy; {currentYear} Aaron Heine. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://twitter.com/aaronheine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/aaronheine/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/AaronMaxHeine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
