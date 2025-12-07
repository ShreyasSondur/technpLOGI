import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Roboto_Condensed } from "next/font/google";

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
  title: "TechnoLOGI International Private Limited",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
