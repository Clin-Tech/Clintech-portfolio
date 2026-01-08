import { Geist, Geist_Mono, Mulish } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const mulish = Mulish({
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Clinton Atayero - Frontend Engineer | React, Next.js, React Native Developer Nigeria",
  description:
    "Hire Clinton Atayero - Frontend Engineer with 3+ years building production web & mobile apps. Expert in React, Next.js, React Native, TypeScript. Available for remote work.",
  keywords:
    "frontend developer Nigeria, React developer, Next.js developer, React Native developer, hire frontend engineer, remote React developer Lagos",
  openGraph: {
    title:
      "Clinton Atayero - Frontend Engineer (React • Next.js • React Native)",
    description:
      "3+ years shipping production apps. Built e-commerce platform at POLOM. Available for remote full-time roles.",
    url: "https://clintech.me",
    siteName: "ClinTech Portfolio",
    images: [
      {
        // url: "https://clintech.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clinton Atayero - Frontend Engineer Portfolio",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinton Atayero - Frontend Engineer",
    description:
      "React • Next.js • React Native • 3+ years production experience • Available for hire",
    // images: ["https://clintech.me/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Clinton Atayero",
    jobTitle: "Frontend Engineer",
    url: "https://clintech.me",
    sameAs: [
      "https://github.com/Clin-Tech",
      "https://www.linkedin.com/in/clinton-atayero-3800b5238/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "POLOM",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Frontend Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          defer
          data-domain="clintech.me"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body
        className={`${mulish.variable} font-sans bg-white text-[#2d2e32] antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
