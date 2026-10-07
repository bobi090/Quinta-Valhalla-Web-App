import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SPACES_DATA } from '../data/spaces';
import AccordionGallery from '../components/ui/AccordionGallery';
import InfiniteSpiral from '../components/ui/InfiniteSpiral';
import Grainient from '../components/ui/Grainient';
import StrokeText from '../components/ui/StrokeText';
import { Fade } from 'react-awesome-reveal';
import { MessageCircle } from 'lucide-react';

export const SpacesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accordionItems = useMemo(() =>
    SPACES_DATA.map(space => ({
      image: space.mainImage,
      label: space.name,
      alt: space.mainImageAlt,
    })),
    []
  );

  const spiralImages = useMemo(() => {
    const imgs: { src: string; alt: string }[] = [];
    SPACES_DATA.forEach(space => {
      imgs.push({ src: space.mainImage, alt: space.mainImageAlt });
      space.galleryImages.forEach(gi => {
        imgs.push({ src: gi.url, alt: gi.alt });
      });
    });
    return imgs;
  }, []);

  return (
    <main className="flex-grow bg-surface">
      {/* Scoped styles to force the title onto one line */}
      <style>{`
        .spaces-hero-title.split-parent,
        .spaces-hero-title {
          font-size: clamp(2.1rem, 8.5vw, 7.5rem) !important;
          white-space: nowrap !important;
          overflow: visible !important;
        }
      `}</style>

      {/* Intro Section - Full screen 100vh hero */}
      <section className="relative h-screen w-full flex items-center justify-center bg-surface-container-lowest">
        {/* Grainient animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <Grainient
            color1="#7cb17cff" // Lighter green
            color2="#1bce07ff" // Darker primary green
            color3="#344b37ff" // Earthy dark tone
            timeSpeed={3} // Slowed down for elegance
            colorBalance={0.0}
            warpStrength={1.5}
            warpFrequency={4.0}
            warpSpeed={1.0}
            warpAmplitude={60.0}
            blendAngle={45.0}
            blendSoftness={0.1}
            rotationAmount={300.0}
            noiseScale={1.5}
            grainAmount={0.3}
            grainScale={1.5}
            grainAnimated={true}
            contrast={1.2}
            gamma={1.1}
            saturation={0.8} // Desaturated slightly for a premium feel
            zoom={1.2}
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-surface-container-lowest/40" />
        </div>

        {/* Main content - Left aligned stacked StrokeText */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center">
          <div className="w-full flex flex-col items-start gap-1 sm:gap-2">
            <StrokeText
              text="NUESTROS"
              strokeColor="#124b13ff"
              fillColor="#27e470ff"
              strokeWidth={1.8}
              drawDuration={1.8}
              fillDelay={0.3}
              stagger={0.06}
              ease="power3.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={140}
              fontWeight={800}
              letterSpacing={2}
              className="w-full text-left"
            />
            <StrokeText
              text="ESPACIOS"
              strokeColor="#124b13ff"
              fillColor="#27e470ff"
              strokeWidth={1.8}
              drawDuration={1.8}
              fillDelay={0.5}
              stagger={0.06}
              ease="power3.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={140}
              fontWeight={800}
              letterSpacing={2}
              className="w-full text-left -mt-4 sm:-mt-8 md:-mt-12"
            />
          </div>
        </div>

      </section>

      {/* AccordionGallery — interactive spaces showcase */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <Fade triggerOnce duration={800}>
          <AccordionGallery
            items={accordionItems}
            defaultIndex={0}
            height={520}
            gap={8}
            radius={20}
            expandRatio={0.48}
            trigger="hover"
            duration={0.5}
            ease="power3.out"
            parallax={0.4}
            tilt={6}
            grayscale={true}
            showLabels={true}
            accentColor="#C5A880"
            overlayColor="#032517"
            textColor="#ffffff"
          />
        </Fade>
      </section>

      {/* Momentos Inolvidables — InfiniteSpiral showcase */}
      <section className="relative bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-surface-container overflow-hidden h-[650px] md:h-[800px] flex items-center">
        {/* Decorative radial glow behind the spiral */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.07] rounded-full blur-[120px] pointer-events-none" />
        {/* Subtle top & bottom border accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-center relative z-10">

          {/* Left: InfiniteSpiral */}
          <div className="relative w-full md:w-2/3 h-full overflow-hidden order-2 md:order-1 mt-8 md:mt-0">
            <Fade triggerOnce duration={1000} className="w-full h-full" style={{ width: '100%', height: '100%' }}>
              <InfiniteSpiral
                items={spiralImages}
                animationMode="all"
                speed={0.45}
                radius={200}
                cardWidth={160}
                cardHeight={160}
                verticalSpacing={65}
                perspective={1000}
                cardRadius={16}
                centerScale={1.15}
                edgeBlur={5}
                cardsPerTurn={6}
                pauseOnHover
              />
            </Fade>
          </div>

          {/* Right: Title */}
          <div className="text-center md:text-right z-10 md:w-1/3 pt-16 md:pt-0 shrink-0 order-1 md:order-2">
            <Fade triggerOnce direction="up" cascade damping={0.15}>
              {/* Decorative accent line */}
              <div className="hidden md:block w-16 h-[2px] bg-gradient-to-r from-primary/60 to-primary/0 ml-auto mb-6 rounded-full" />
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] tracking-tight">
                Momentos<br /><em className="not-italic font-light opacity-90">inolvidables</em>
              </h2>
            </Fade>
          </div>
        </div>
      </section>

      {/* CTA Section — links to /contacto */}
      <section className="py-24 md:py-32 bg-surface-container-low text-center px-6 border-t border-outline-variant/30 relative overflow-hidden">
        <div className="relative z-10">
          <Fade triggerOnce direction="up" cascade damping={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary mb-6">
              ¿Imaginás tu evento acá?
            </h2>
            <p className="font-sans text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Hablemos sobre tu fecha y armemos un presupuesto a medida.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-full font-sans text-sm md:text-base font-semibold hover:bg-secondary/90 transition-all shadow-xl focus:outline-none focus:ring-4 focus:ring-secondary/30"
            >
              <MessageCircle size={22} strokeWidth={2} />
              <span>Ir a Contacto</span>
            </Link>
          </Fade>
        </div>
      </section>
    </main>
  );
};
