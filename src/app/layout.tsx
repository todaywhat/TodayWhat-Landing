import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/constants/metadata";
import "./globals.css";
import Footer from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "오늘 뭐임",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    ratingCount: "7600",
    reviewCount: "7600",
  },
  author: {
    "@type": "Person",
    name: siteConfig.creator,
    url: siteConfig.authors[0].url,
  },
  downloadUrl: [
    "https://apps.apple.com/app/id1629567018",
    "https://play.google.com/store/apps/details?id=com.onmi.aos",
  ],
  category: "Education",
  operatingSystem:
    "iOS 14.0 이상, watchOS 7.0 이상, macOS 11.0 이상, Android 7.0 이상",
  screenshot: {
    "@type": "ImageObject",
    url: "https://today-what.com/og-image.png",
  },
  applicationCategory: "EducationalApplication",
  availableOnDevice: [
    "iPhone",
    "iPad",
    "Apple Watch",
    "Mac",
    "Android Phone",
    "Android Tablet",
  ],
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://today-what.com"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  manifest: siteConfig.manifest,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  applicationName: siteConfig.applicationName,
  appleWebApp: {
    capable: true,
    title: "오늘 뭐임",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#ffffff",
    "msapplication-tap-highlight": "no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-backgroundMain text-textPrimary">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
