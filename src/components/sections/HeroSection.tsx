import React from 'react';
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { animated, useSpring } from '@react-spring/web';
import DepthText from '../ui/DepthText';
import { HeroParticles } from '../animations/HeroParticles';
import GlassSurface from '../ui/GlassSurface';
import { TreePine, ChevronDown } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';

export const HeroSection: React.FC = () => {
  const [buttonSpring, api] = useSpring(() => ({
    scale: 1,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    y: 0,
    config: { tension: 300, friction: 20 }
  }));

  const bgSpring = useSpring({
    from: { transform: 'scale(1.1)', opacity: 0 },
    to: { transform: 'scale(1.05)', opacity: 1 },
    config: { duration: 2500, easing: t => t * (2 - t) } // Ease out
  });

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary" id="inicio">
      {/* Cinematic Background Image with warm overlay */}
      <animated.div className="absolute inset-0 z-0" style={bgSpring}>
        <ImageWithSkeleton
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcFKfQnvnOe9K0-bUOumf8bJ9kRzeeNxKJ_NyM1JpmcL0M3uFUPfZL-CWkFb5sZqqStSu-XZQqkbH9KzCuBRCCEFG-oqQF_fcfPRtt_qg5GPyHt_CfZS8XTLkAEfm-BUYiVaqdmcjGPZ2MUILmbZzrbRCOWqqrL_jNun-SFX5KtrFbctIIx2EfYss0NXzeni26R7wyaV0_gGFYIkS0qNsUplvfaOSTU5kcwBBcx17ia1l0a2zeRZQ"
          alt="Vista panorámica de Quinta Valhalla con parque iluminado"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradients to match Botanical Splendor deep forest & gold tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30 backdrop-brightness-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/40 to-primary/90"></div>
      </animated.div>

      {/* Subtle Dust Particles */}
      <HeroParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Main Headline */}
        <div className="flex flex-col items-center gap-2 max-w-4xl">
          <Slide direction="up" triggerOnce duration={1000} cascade damping={0.2}>
            <Fade triggerOnce duration={1200} delay={200}>
              <DepthText
                text="Quinta Valhalla"
                layers={12}
                depth={2}
                faceColor="#FAF8F5"
                depthColor="#725b38"
                fontSize="clamp(3rem, 10vw, 6rem)"
                className="font-serif px-8 py-6"
                shadow
              />
            </Fade>
            <Fade triggerOnce duration={1500} delay={400}>
              <span className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-cream font-normal italic tracking-tight drop-shadow-md">
                Tu evento, en un entorno distinto
              </span>
            </Fade>
          </Slide>
        </div>

        {/* CTA Button */}
        <Fade triggerOnce delay={900} duration={1200} direction="up">
          <div className="mt-8 flex items-center justify-center w-full">
            <animated.div
              style={buttonSpring}
              onMouseEnter={() => api.start({ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)', y: -2 })}
              onMouseLeave={() => api.start({ scale: 1, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', y: 0 })}
            >
              <Link to="/espacios" className="inline-block rounded-full">
                <GlassSurface
                  width="auto"
                  height="auto"
                  borderRadius={9999}
                  blur={16}
                  brightness={55}
                  opacity={0.85}
                  backgroundOpacity={0.12}
                  className="border border-brand-cream/60 text-brand-cream font-sans text-sm font-semibold transition-all duration-300 hover:border-brand-cream hover:bg-brand-cream/20 shadow-lg"
                >
                  <div className="flex items-center justify-center gap-3 px-8 py-4">
                    <TreePine size={20} strokeWidth={2} />
                    <span>Conocé el espacio</span>
                  </div>
                </GlassSurface>
              </Link>
            </animated.div>
          </div>
        </Fade>
      </div>

      {/* Scroll Down Indicator */}
      <Fade triggerOnce delay={1500} duration={1000}>
        <div className="absolute bottom-6 inset-x-0 flex justify-center z-10 pointer-events-none">
          <a
            href="#conoce-quinta"
            className="text-surface-variant/70 hover:text-brand-gold transition-colors flex flex-col items-center group pointer-events-auto"
            aria-label="Desplazarse hacia abajo"
          >
            <span className="text-[11px] font-sans uppercase tracking-widest mb-1 opacity-70 group-hover:opacity-100">
              Descubrí más
            </span>
            <span className="animate-bounce"><ChevronDown size={24} /></span>
          </a>
        </div>
      </Fade>
    </section>
  );
};
