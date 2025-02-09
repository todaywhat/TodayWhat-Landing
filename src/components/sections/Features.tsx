"use client";

import { motion } from "framer-motion";
import BlurImage from "@/components/ui/BlurImage";

const features = [
  {
    title: "홈 화면 위젯",
    description: "홈 화면에서 바로 급식과 시간표를 확인하세요",
    image: "/widget-preview.png",
  },
  {
    title: "애플워치 앱",
    description: "손목에서 바로 확인하는 오늘의 일정",
    image: "/watch-preview.png",
  },
  {
    title: "메뉴바 앱",
    description: "맥에서도 편리하게 확인하세요",
    image: "/menubar-preview.png",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-backgroundSecondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            다양한 플랫폼 지원
          </h2>
          <p className="text-textSecondary text-base sm:text-lg leading-relaxed">
            언제 어디서나 편리하게 확인하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full aspect-square mb-4 sm:mb-6">
                <BlurImage
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
