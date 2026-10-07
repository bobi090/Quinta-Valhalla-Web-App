import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';

export interface ScrollStackItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ScrollStackProps {
  items: ScrollStackItem[];
  className?: string;
}

const Card = ({ item, index, total, scrollYProgress }: { item: ScrollStackItem, index: number, total: number, scrollYProgress: any }) => {
  const start = index / total;
  const end = (index + 1) / total;

  // Card dissolves during the last 50% of its scroll window
  const dissolveStart = start + (end - start) * 0.5;

  const opacity = useTransform(scrollYProgress, [start, dissolveStart, end], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, dissolveStart, end], [1, 1, 1.04]);
  const rotate = useTransform(scrollYProgress, [start, dissolveStart, end], [0, 0, -2]);

  // Higher index = lower zIndex so earlier cards appear on top
  const zIndex = total - index;

  return (
    <motion.div
      style={{ opacity, scale, rotate, zIndex }}
      className="absolute inset-0 flex items-center justify-center p-5 sm:p-10 md:p-14 will-change-transform"
    >
      <div className="relative w-full max-w-5xl h-[72vh] sm:h-[80vh] md:h-[84vh] max-h-[820px] rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-white/10 bg-surface-container-lowest">
        {/* Static image — no motion.img to avoid parallax clipping bugs */}
        <ImageWithSkeleton
          src={item.imageUrl}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

        {/* Text content — static, no whileInView (conflicts with sticky scroll) */}
        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 md:p-16 flex flex-col items-start text-left">
          <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-medium mb-3 sm:mb-5 drop-shadow-md">
            {item.title}
          </h3>
          <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 leading-relaxed drop-shadow max-w-2xl">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({ items, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-surface ${className}`}
      // The scrollable area is proportional to the number of items
      style={{ height: `${items.length * 110}vh` }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {items.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            total={items.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};
