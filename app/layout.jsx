
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Roboto_Condensed } from "next/font/google";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  metadataBase: new URL('https://technologi.in'),
  title: {
    default: "Technologi",
    template: "%s | Technologi",
  },
  description: "Technologi provides web development, automation, SEO, and IT solutions to help businesses scale faster.",
  keywords: ["IT services", "web development", "automation", "software solutions", "SEO services"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Technologi',
    description: 'Technologi provides web development, automation, SEO, and IT solutions to help businesses scale faster.',
    url: 'https://technologi.in',
    siteName: 'Technologi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technologi',
    description: 'Technologi provides web development, automation, SEO, and IT solutions to help businesses scale faster.',
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Technologi",
        "url": "https://technologi.in",
        "logo": "https://technologi.in/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "Contact@technologi.in",
          "contactType": "customer service"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Door No. 16-6-388/45(1), 2nd Floor, Millennium Towers, Opp. Highland Hospital",
          "addressLocality": "Mangalore",
          "postalCode": "575002",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "name": "Technologi",
        "url": "https://technologi.in",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://technologi.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.className} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
