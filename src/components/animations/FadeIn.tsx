import React, { ReactNode } from 'react';
import { motion, type Transition } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  amount?: 'some' | 'all' | number;
  triggerOnce?: boolean;
  cascade?: boolean;
  damping?: number;
  type?: 'fade' | 'slide' | 'zoom';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  style,
  amount = 0.2,
  triggerOnce = true,
  cascade = false,
  damping = 0,
  type = 'fade',
}) => {
  const directions = {
    up: { y: 40, x: 0, scale: 1 },
    down: { y: -40, x: 0, scale: 1 },
    left: { x: 40, y: 0, scale: 1 },
    right: { x: -40, y: 0, scale: 1 },
    none: { x: 0, y: 0, scale: 1 },
  };

  const zoomVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const fadeVariants = {
    initial: {
      opacity: 0,
      ...directions[direction],
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const transition: Transition = {
    duration,
    delay: cascade ? undefined : delay,
    ease: 'easeOut',
  };

  if (type === 'zoom') {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={zoomVariants}
        transition={transition}
        viewport={{ once: triggerOnce, amount }}
        className={className}
        style={style}
      >
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                transition: cascade
                  ? { ...transition, delay: delay + index * (damping || 0.1) }
                  : undefined,
              })
            : child
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeVariants}
      transition={transition}
      viewport={{ once: triggerOnce, amount }}
      className={className}
      style={style}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              transition: cascade
                ? { ...transition, delay: delay + index * (damping || 0.1) }
                : undefined,
            })
          : child
      )}
    </motion.div>
  );
};

// Slide component for compatibility
export const Slide: React.FC<FadeInProps> = (props) => (
  <FadeIn {...props} type="slide" direction={props.direction || 'up'} />
);
