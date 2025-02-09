export const siteConfig = {
  title: "오늘 뭐임 - 오늘 급식과 시간표를 한눈에",
  description:
    "아이폰과 맥의 위젯, 애플워치, 맥의 Menubar, 안드로이드에서 편리하게 급식/시간표를 확인할 수 있는 서비스. 학교생활에 필요한 모든 정보를 한눈에 확인하세요.",
  keywords: [
    "학교",
    "급식",
    "시간표",
    "위젯",
    "애플워치",
    "메뉴바",
    "iOS",
    "macOS",
    "watchOS",
    "Android",
    "학교생활",
    "학생",
    "교육",
    "알레르기",
    "학교앱",
    "교육앱",
    "안드로이드",
    "구글플레이",
    "플레이스토어",
  ],
  authors: [
    {
      name: "baegteun",
      url: "https://github.com/baegteun",
    },
  ],
  creator: "baegteun",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://today-what.com",
    title: "오늘 뭐임 - 오늘 급식과 시간표를 한눈에",
    description:
      "iOS, Android, macOS에서 편리하게 급식/시간표를 확인할 수 있는 서비스",
    siteName: "오늘 뭐임",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "오늘 뭐임 - 오늘 급식과 시간표를 한눈에",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오늘 뭐임 - 오늘 급식과 시간표를 한눈에",
    description:
      "iOS, Android, macOS에서 편리하게 급식/시간표를 확인할 수 있는 서비스",
    images: ["/og-image.png"],
    creator: "@baegteun",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
    naver: "naver-site-verification=YOUR_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://today-what.com",
    languages: {
      "ko-KR": "https://today-what.com",
    },
  },
  category: "Education",
  applicationName: "오늘 뭐임",
  appleWebApp: {
    capable: true,
    title: "오늘 뭐임",
    statusBarStyle: "default",
  },
  playStore: {
    url: "https://play.google.com/store/apps/details?id=com.onmi.aos",
    package: "com.onmi.aos",
  },
};
