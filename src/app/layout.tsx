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
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "오늘 뭐임",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    ratingCount: "7600",
    reviewCount: "7600",
    bestRating: "5",
    worstRating: "1",
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
    "iOS 15.0 이상, watchOS 7.0 이상, macOS 11.0 이상, Android 7.0 이상, Chrome",
  screenshot: {
    "@type": "ImageObject",
    url: "https://today-what.com/og-image.png",
  },
  applicationCategory: ["EducationalApplication", "LifestyleApplication"],
  availableOnDevice: [
    "iPhone",
    "iPad",
    "Apple Watch",
    "Mac",
    "Android Phone",
    "Android Tablet",
  ],
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: "App Store 리뷰어",
      },
      reviewBody:
        "깔끔한 디자인, 유용한 기능(급식 조회, 시간표 조회), 복잡하지 않은 시작 과정까지 3개를 다 충족했습니다.",
    },
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
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-backgroundMain text-textPrimary min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
        >
          메인 콘텐츠로 바로가기
        </a>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
