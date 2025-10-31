'use client';

import { useEffect, useRef, useState } from 'react';

export default function ParallaxImage({ src, alt, title, subtitle, isHero = false }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Calculate parallax based on element position relative to viewport
      const elementMiddle = rect.top + rect.height / 2;
      const viewportMiddle = windowHeight / 2;
      const distanceFromCenter = elementMiddle - viewportMiddle;

      // Parallax speed: 0.08 means image moves 8% of scroll distance (subtle)
      const speed = 0.08;
      let parallaxOffset = prefersReducedMotion ? 0 : -distanceFromCenter * speed;

      // Clamp to avoid revealing image edges on extreme scroll positions
      const max = isHero ? 100 : 70; // px
      if (parallaxOffset > max) parallaxOffset = max;
      if (parallaxOffset < -max) parallaxOffset = -max;

      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHero]);

  return (
    <div ref={containerRef} className={`relative ${isHero ? 'min-h-screen bg-[#f8f6f3]' : 'h-[85vh]'} overflow-hidden`}>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            ref={imageRef}
            className="w-full h-full object-cover object-center"
            src={src}
            alt={alt}
            style={{
              transform: `translate3d(0, ${offset}px, 0) scale(1.25)`,
              transformOrigin: 'center center',
              willChange: 'transform'
            }}
          />
        </div>
        <div className={`absolute inset-0 ${isHero ? 'bg-gradient-to-b from-black/30 via-black/40 to-black/70' : 'bg-black/30'}`}></div>
      </div>
      {!isHero && (
        <div className="absolute bottom-10 sm:left-10 left-5 text-white bg-transparent z-10">
          <p className="font-crimson text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.25em] uppercase mb-0.5">{subtitle}</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant font-light">{title}</h3>
        </div>
      )}
    </div>
  );
}
