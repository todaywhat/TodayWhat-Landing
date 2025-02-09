"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    content:
      "깔끔한 디자인, 유용한 기능(급식 조회, 시간표 조회), 복잡하지 않은 시작 과정까지 3개를 다 충족했습니다.",
    author: "App Store 리뷰 - 1",
    title: "학생에게 단연 최고의 앱",
    date: "2023년 4월 6일",
  },
  {
    content:
      "아이폰인데 가젯인가 그걸로 홈화면에 급식이랑 시간표 해놓으니까 겁나 편리하네요 감사합니다 복 받으십시오",
    author: "App Store 리뷰 - 2",
    title: "당신은 신입니까?",
    date: "2023년 10월 30일",
  },
  {
    content:
      "깃헙에 문의한것도 다 답변해주시고 위젯으로 급식,시간표 보고싶었는데 이렇게 좋은 앱 만들어주셔서 너무 감사해요",
    author: "App Store 리뷰 - 3",
    title: "너무 좋음",
    date: "2023년 4월 7일",
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
              key={review.author}
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
                <p className="text-textSecondary text-xs sm:text-sm">
                  {review.date}
                </p>
              </div>
              <p className="text-textSecondary text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                {review.content}
              </p>
              <p className="font-medium text-sm sm:text-base">
                - {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
