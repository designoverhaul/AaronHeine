import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Heine",
  description: "Life and designs of a dad in Atlanta Georgia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="page" className="hfeed site">
          <div id="content" className="site-content">
            {children}
          </div>
        </div>

        <Script id="dark-mode-toggle" strategy="afterInteractive">
          {`
            const toggleSwitches = document.querySelectorAll('.theme-switch input[type="checkbox"]');

            function switchTheme(e) {
              if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                // Sync all toggles
                toggleSwitches.forEach(toggle => toggle.checked = true);
              } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                // Sync all toggles
                toggleSwitches.forEach(toggle => toggle.checked = false);
              }
            }

            // Check for saved theme preference, or use system preference if none
            const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

            if (currentTheme === 'dark') {
              toggleSwitches.forEach(toggle => toggle.checked = true);
              document.documentElement.setAttribute('data-theme', 'dark');
            } else {
              document.documentElement.setAttribute('data-theme', 'light');
            }

            toggleSwitches.forEach(toggle => {
              toggle.addEventListener('change', switchTheme, false);
            });
          `}
        </Script>
      </body>
    </html>
  );
}
