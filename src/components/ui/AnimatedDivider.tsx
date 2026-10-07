import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Flower2 } from 'lucide-react';

interface AnimatedDividerProps {
  align?: 'center' | 'left';
  className?: string;
  colorClass?: string; 
  iconColorClass?: string; 
  delay?: number;
}

export const AnimatedDivider: React.FC<AnimatedDividerProps> = ({ 
  align = 'center', 
  className = '',
  colorClass = 'bg-secondary/40',
  iconColorClass = 'text-secondary',
  delay = 0
}) => {
  const isCenter = align === 'center';

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.85, 
      y: 10,
      transition: { 
        duration: 0.25, 
        ease: 'easeIn' 
      }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay, 
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const leftLineVariants: Variants = {
    hidden: { 
      scaleX: 0, 
      opacity: 0,
      transition: { 
        duration: 0.25, 
        ease: 'easeIn' 
      }
    },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { 
        duration: 0.65, 
        delay: delay + 0.15, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { 
      rotate: 90, 
      opacity: 0, 
      scale: 0.3,
      transition: { 
        duration: 0.25, 
        ease: 'easeIn' 
      }
    },
    visible: { 
      rotate: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.55, 
        delay: delay + 0.08, 
        type: 'spring', 
        bounce: 0.45 
      }
    }
  };

  const rightLineVariants: Variants = {
    hidden: { 
      scaleX: 0, 
      opacity: 0,
      transition: { 
        duration: 0.25, 
        ease: 'easeIn' 
      }
    },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { 
        duration: 0.65, 
        delay: delay + 0.15, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'} ${className}`}
    >
      <motion.span 
        variants={leftLineVariants}
        style={{ originX: 1 }}
        className={`w-12 h-[1px] ${colorClass}`}
      />
      <motion.span 
        variants={iconVariants}
        className={`select-none ${iconColorClass}`}
      >
        <Flower2 size={12} strokeWidth={2} />
      </motion.span>
      <motion.span 
        variants={rightLineVariants}
        style={{ originX: 0 }}
        className={`w-12 h-[1px] ${colorClass}`}
      />
    </motion.div>
  );
};
