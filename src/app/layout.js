import { Geist, Geist_Mono, Mulish } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const mulish = Mulish({
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ClinTech",
  description: "Welcome to ClinTech, my Next.js portfolio website.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ClinTech",
    description: "Welcome to ClinTech, my Next.js portfolio website.",
    // url: SITE_URL,
    siteName: "ClinTech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${mulish.variable} font-sans bg-white text-[#2d2e32] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
