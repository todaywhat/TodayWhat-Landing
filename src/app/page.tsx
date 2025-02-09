"use client";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Reviews from "@/components/sections/Reviews";
import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/firebase";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // 스크롤 깊이를 퍼센트로 계산
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // 25%, 50%, 75%, 100% 지점에서 이벤트 발생
      if (scrollPercentage >= 25 && scrollPercentage < 50) {
        trackScrollDepth(25);
      } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
        trackScrollDepth(50);
      } else if (scrollPercentage >= 75 && scrollPercentage < 100) {
        trackScrollDepth(75);
      } else if (scrollPercentage === 100) {
        trackScrollDepth(100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Hero />
      <Features />
      <Reviews />
    </main>
  );
}
