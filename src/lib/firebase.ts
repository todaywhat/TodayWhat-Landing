import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Firebase가 이미 초기화되었는지 확인
const apps = getApps();
export const app = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0];

// Analytics는 브라우저 환경에서만 초기화
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

// 다운로드 버튼 클릭 이벤트
export const trackDownloadClick = (
  platform: "ios" | "android" | "chrome" | "macos"
) => {
  try {
    if (!analytics) return;
    logEvent(analytics, "download_click", {
      platform,
      source: "website",
    });
  } catch (error) {
    console.error("Failed to track download click:", error);
  }
};

// 외부 링크 클릭 이벤트
export const trackExternalLinkClick = (
  linkType: "privacy" | "support" | "terms",
  url: string
) => {
  try {
    if (!analytics) return;
    logEvent(analytics, "external_link_click", {
      link_type: linkType,
      link_url: url,
    });
  } catch (error) {
    console.error("Failed to track external link click:", error);
  }
};

// 스크롤 깊이 추적 이벤트
export const trackScrollDepth = (depth: number) => {
  try {
    if (!analytics) return;
    logEvent(analytics, "scroll_depth", {
      depth_percentage: depth,
    });
  } catch (error) {
    console.error("Failed to track scroll depth:", error);
  }
};
