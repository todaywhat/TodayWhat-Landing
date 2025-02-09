"use client";

import { motion } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";
import Image from "next/image";
import { trackDownloadClick } from "@/lib/firebase";

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-6 sm:mb-8 md:mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BlurImage
            src="/logo.png"
            alt="오늘 뭐임 로고"
            className="rounded-[35px] sm:rounded-[40px] md:rounded-[45px] drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            width={200}
            height={200}
            sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
            priority
          />
        </motion.div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 
          bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
        >
          오늘 급식과 시간표를 한눈에
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-textSecondary mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto 
          leading-relaxed sm:leading-relaxed md:leading-relaxed"
        >
          급식과 시간표를 위젯, 애플워치, 메뉴바, 브라우저에서 확인하세요
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <a
            href="https://apps.apple.com/app/id1629567018"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[135px] sm:w-[155px] transition-transform hover:scale-105 active:scale-95"
            onClick={() => trackDownloadClick("ios")}
          >
            <Image
              src="/app-store-badge.svg"
              alt="App Store에서 다운로드"
              width={155}
              height={60}
              className="w-full h-auto"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.onmi.aos"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[135px] sm:w-[155px] transition-transform hover:scale-105 active:scale-95"
            onClick={() => trackDownloadClick("android")}
          >
            <Image
              src="/google-play-badge.svg"
              alt="Google Play에서 다운로드"
              width={155}
              height={60}
              className="w-full h-auto"
            />
          </a>
          <a
            href="https://chromewebstore.google.com/detail/%EC%98%A4%EB%8A%98-%EB%AD%90%EC%9E%84/cmpaibealnbmfopcgmdllcogidnmiimj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[135px] sm:w-[155px] h-[45px] bg-gray-100 rounded-full flex items-center justify-between px-5 text-gray-900 font-medium transition-all hover:bg-gray-200 active:scale-95"
            onClick={() => trackDownloadClick("chrome")}
          >
            <span>Chrome Extension</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
