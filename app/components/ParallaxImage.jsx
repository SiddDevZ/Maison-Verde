'use client';

import { useEffect, useRef, useState } from 'react';

export default function ParallaxImage({ src, alt, title, subtitle, isHero = false }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax based on element position relative to viewport
      // When element enters from bottom (rect.top = windowHeight), start at negative offset
      // When element exits from top (rect.bottom = 0), end at positive offset
      const elementMiddle = rect.top + rect.height / 2;
      const viewportMiddle = windowHeight / 2;
      const distanceFromCenter = elementMiddle - viewportMiddle;
      
      // Parallax speed: 0.8 means image moves 80% of scroll distance (very noticeable)
      const parallaxOffset = -distanceFromCenter * 0.08;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${isHero ? 'min-h-screen bg-[#f8f6f3]' : 'h-[85vh]'} overflow-hidden`}>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute inset-0 w-full h-[150%] -top-[25%]"
          style={{ 
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: 'transform'
          }}
        >
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src={src} 
            alt={alt}
          />
        </div>
        <div className={`absolute inset-0 ${isHero ? 'bg-linear-to-b from-black/30 via-black/40 to-black/70' : 'bg-black/30'}`}></div>
      </div>
      {!isHero && (
        <div className="absolute bottom-10 sm:left-10 left-5 text-white z-10">
          <p className="font-crimson text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.25em] uppercase mb-0.5">{subtitle}</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant font-light">{title}</h3>
        </div>
      )}
    </div>
  );
}
