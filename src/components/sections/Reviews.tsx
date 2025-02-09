"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z" />
  </svg>
);

const reviews = [
  {
    content:
      "깔끔한 디자인, 유용한 기능(급식 조회, 시간표 조회), 복잡하지 않은 시작 과정까지 3개를 다 충족했습니다.",
    title: "학생에게 단연 최고의 앱",
  },
  {
    content:
      "아이폰인데 가젯인가 그걸로 홈화면에 급식이랑 시간표 해놓으니까 겁나 편리하네요 감사합니다 복 받으십시오",
    title: "당신은 신입니까?",
  },
  {
    content:
      "깃헙에 문의한것도 다 답변해주시고 위젯으로 급식,시간표 보고싶었는데 이렇게 좋은 앱 만들어주셔서 너무 감사해요",
    title: "너무 좋음",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-2">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            사용자 리뷰
          </h2>
          <p className="text-textSecondary text-base sm:text-lg leading-relaxed">
            실제 사용자들의 이야기를 들어보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-cardBackground p-4 sm:p-6 md:p-8 rounded-2xl hover:shadow-lg 
                transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-3 sm:mb-4">
                <StarRating />
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {review.title}
                </h3>
              </div>
              <p className="text-textSecondary text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                {review.content}
              </p>
              <div className="flex items-center gap-2">
                <AppStoreIcon />
                <p className="font-medium text-sm sm:text-base">
                  App Store 리뷰
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
