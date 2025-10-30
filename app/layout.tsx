import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SzalunkiPro - Profesjonalny Wynajem Szalunków Budowlanych | Warszawa, Lublin, Siedlce",
  description: "Profesjonalny wynajem szalunków stropowych, ściennych i do słupów. Obsługujemy całą Polskę wschodnią i centralną - Warszawa, Lublin, Siedlce. Nowoczesne rozwiązania dla Twojej budowy.",
  keywords: "wynajem szalunków, szalunki stropowe, szalunki budowlane, Warszawa, Lublin, Siedlce, szalunki ścienne, deskowanie",
  authors: [{ name: "SzalunkiPro" }],
  openGraph: {
    title: "SzalunkiPro - Profesjonalny Wynajem Szalunków",
    description: "Nowoczesne szalunki budowlane w wynajem. Warszawa, Lublin, Siedlce i cała Polska wschodnia.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
