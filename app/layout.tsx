import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wynajem Szalunków Budowlanych Warszawa Siedlce Lublin | SzalunkiPro - Szalunki Stropowe, Ścienne, Systemowe",
  description: "Profesjonalny wynajem szalunków budowlanych: stropowych, ściennych, słupowych. Obsługujemy Warszawę, Siedlce, Lublin, Łuków i całe woj. mazowieckie i lubelskie. Szybka dostawa, konkurencyjne ceny, wsparcie techniczne. Wypożyczalnia szalunków - zaufało nam 500+ klientów!",
  keywords: "wynajem szalunków, wynajem szalunków budowlanych, wynajem szalunków Warszawa, wynajem szalunków Siedlce, wynajem szalunków Lublin, wynajem szalunków Łuków, wynajem szalunków mazowieckie, wynajem szalunków lubelskie, wynajem szalunków stropowych, wynajem szalunków stropowych Warszawa, wynajem szalunków stropowych Siedlce, wynajem szalunków stropowych Lublin, wynajem szalunków ściennych, wynajem szalunków systemowych, wypożyczalnia szalunków, szalunki do wynajęcia, wynajem deskowania, tanie szalunki wynajem, szalunki budowlane wynajem, wynajem podpór stropowych, wynajem szalunków cena",
  authors: [{ name: "SzalunkiPro - Wynajem Szalunków" }],
  openGraph: {
    title: "SzalunkiPro - Wynajem Szalunków Budowlanych | Warszawa, Siedlce, Lublin",
    description: "Profesjonalny wynajem szalunków stropowych i systemowych. Obsługujemy Warszawę, Siedlce, Lublin i całą Polskę wschodnią. Konkurencyjne ceny, szybka dostawa!",
    type: "website",
    locale: "pl_PL",
    siteName: "SzalunkiPro - Wynajem Szalunków Budowlanych",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://szalunkipro.pl',
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
