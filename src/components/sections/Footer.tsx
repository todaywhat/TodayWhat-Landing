"use client";

import Link from "next/link";
import { trackDownloadClick, trackExternalLinkClick } from "@/lib/firebase";

const Footer = () => {
  const handleExternalLinkClick =
    (linkType: "privacy" | "support" | "terms", url: string) => () => {
      trackExternalLinkClick(linkType, url);
    };

  const handleDownloadClick =
    (platform: "ios" | "android" | "chrome" | "macos") => () => {
      trackDownloadClick(platform);
    };

  return (
    <footer className="bg-gray-100 py-8 sm:py-12 mt-12 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* 법적 문서 섹션 */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4">
              개인정보
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://todaywhat.notion.site/28382ec3595e412f9862a9faf4b02a97?pvs=4"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors duration-200"
                  onClick={handleExternalLinkClick(
                    "privacy",
                    "https://todaywhat.notion.site/28382ec3595e412f9862a9faf4b02a97?pvs=4"
                  )}
                >
                  개인정보 처리방침
                </Link>
              </li>
            </ul>
          </div>

          {/* 지원 섹션 */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4">
              지원
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://todaywhat.notion.site/3c4c9949cfd14d569bb754c80545675f?pvs=4"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors duration-200"
                  onClick={handleExternalLinkClick(
                    "support",
                    "https://todaywhat.notion.site/3c4c9949cfd14d569bb754c80545675f?pvs=4"
                  )}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 설치 링크 섹션 */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4">
              다운로드
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://apps.apple.com/app/id1629567018"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors duration-200"
                  onClick={handleDownloadClick("ios")}
                >
                  iOS 설치하기
                </Link>
              </li>
              <li>
                <Link
                  href="https://apps.apple.com/app/id1629567018"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors duration-200"
                  onClick={handleDownloadClick("macos")}
                >
                  macOS 설치하기
                </Link>
              </li>
              <li>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.onmi.aos&hl=ko"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors duration-200"
                  onClick={handleDownloadClick("android")}
                >
                  Android 설치하기
                </Link>
              </li>
              <li>
                <Link
                  href="https://chromewebstore.google.com/detail/%EC%98%A4%EB%8A%98-%EB%AD%90%EC%9E%84/cmpaibealnbmfopcgmdllcogidnmiimj"
                  className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors duration-200"
                  onClick={handleDownloadClick("chrome")}
                >
                  Chrome Extension 설치하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} 오늘 뭐임. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
