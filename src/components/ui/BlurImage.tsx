"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export default function BlurImage({
  src,
  alt,
  className = "",
  fill,
  width,
  height,
  sizes,
  priority,
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-gray-200 animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ borderRadius: "inherit" }}
          />
        )}
      </AnimatePresence>
      <Image
        src={src}
        alt={alt}
        className={`duration-700 ease-in-out object-contain ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        quality={90}
        onLoad={() => setIsLoading(false)}
        style={fill ? { objectFit: "cover" } : undefined}
      />
    </div>
  );
}
