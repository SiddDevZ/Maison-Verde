'use client';
import React from 'react';
import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import ParallaxImage from './components/ParallaxImage';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const services = [
    {
      title: "Residential Design",
      description: "Transform your home into a personal sanctuary. From elegant living rooms to serene bedrooms, we create spaces that reflect your unique style.",
      image: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=900&q=80",
      alt: "Residential Design"
    },
    {
      title: "Commercial Spaces",
      description: "Elevate your business environment with designs that inspire productivity and impress clients. Offices, restaurants, and retail spaces reimagined.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      alt: "Commercial Design"
    },
    {
      title: "Design Consultation",
      description: "Need expert guidance? Our consultation services provide tailored advice on color schemes, furniture selection, and spatial planning.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
      alt: "Consultation"
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description:
        "Understanding your lifestyle, aspirations, and spatial needs through immersive workshops.",
    },
    {
      title: "Concept",
      description:
        "Translating insights into moodboards, palettes, and spatial concepts that set the vision.",
    },
    {
      title: "Refinement",
      description:
        "Co-creating detailed plans, selecting finishes, and refining every tactile element.",
    },
    {
      title: "Realization",
      description:
        "Orchestrating artisans and vendors while ensuring a flawless handover of your space.",
    },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer font-cormorant font-light tracking-[0.15em]">MAISON VERDE</h2>
          </div>
          
          <div className="hidden lg:flex gap-6 xl:gap-12 text-white font-crimson text-xs lg:text-sm uppercase tracking-[0.2em]">
            <a href="#" className="relative py-1 group">
              <span>Portfolio</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#" className="relative py-1 group">
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#" className="relative py-1 group">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#" className="relative py-1 group">
              <span>Process</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#" className="relative py-1 group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-white cursor-pointer font-crimson text-xs lg:text-sm uppercase tracking-[0.2em] px-3 sm:px-4 md:px-6 lg:px-8 py-2 lg:py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-500">
              Get Started
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 transition-colors rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <i className="ri-close-line text-2xl"></i>
              ) : (
                <i className="ri-menu-line text-2xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] bg-[#f8f6f3] backdrop-blur-lg transition-transform duration-500 ease-in-out z-50 shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="px-6 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-[#3d3d3d] font-cormorant text-xl tracking-[0.15em]">MENU</h3>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#3d3d3d] p-2 hover:bg-[#8b7355]/10 transition-colors rounded"
                aria-label="Close menu"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="flex-1 space-y-2">
              <a href="#" className="block text-[#3d3d3d] font-crimson text-base uppercase tracking-[0.2em] py-4 border-b border-[#8b7355]/20 hover:text-[#8b7355] hover:pl-2 transition-all duration-300">
                Portfolio
              </a>
              <a href="#" className="block text-[#3d3d3d] font-crimson text-base uppercase tracking-[0.2em] py-4 border-b border-[#8b7355]/20 hover:text-[#8b7355] hover:pl-2 transition-all duration-300">
                Services
              </a>
              <a href="#" className="block text-[#3d3d3d] font-crimson text-base uppercase tracking-[0.2em] py-4 border-b border-[#8b7355]/20 hover:text-[#8b7355] hover:pl-2 transition-all duration-300">
                About
              </a>
              <a href="#" className="block text-[#3d3d3d] font-crimson text-base uppercase tracking-[0.2em] py-4 border-b border-[#8b7355]/20 hover:text-[#8b7355] hover:pl-2 transition-all duration-300">
                Process
              </a>
              <a href="#" className="block text-[#3d3d3d] font-crimson text-base uppercase tracking-[0.2em] py-4 border-b border-[#8b7355]/20 hover:text-[#8b7355] hover:pl-2 transition-all duration-300">
                Contact
              </a>
            </div>
            
            <button className="w-full text-[#3d3d3d] cursor-pointer font-crimson text-sm uppercase tracking-[0.2em] px-6 py-4 border-2 border-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all duration-300 mt-8">
              Get Started
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-40 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
      </nav>

      <div className="relative min-h-screen">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&q=80"
          alt="Luxurious interior design"
          title=""
          subtitle=""
          isHero={true}
        />
        <div className="absolute bottom-0 left-0 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 z-10 w-full text-white">
          <p className="text-sm sm:text-sm md:text-base lg:text-lg font-crimson font-light tracking-[0.3em] mb-4 md:mb-6 uppercase opacity-90">Interior Design Excellence</p>
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-cormorant font-light leading-[0.85] tracking-tight mb-2 md:mb-3">MAISON</h1>
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-cormorant font-light leading-[0.85] tracking-tight mb-4 md:mb-8">VERDE</h1>
          {/* <p className="text-[1.4vw] font-crimson font-light mb-10 max-w-2xl opacity-90 leading-relaxed">Crafting dreams into living spaces where elegance meets innovation, and every detail tells your unique story.</p> */}


          
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-[5%] py-12 sm:py-16 md:py-20 lg:py-[8%] bg-[#f8f6f3]">
        <div className="max-w-[95%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16 lg:mb-20">
            <div>
              <p className="text-[#8b7355] font-crimson text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase mb-4 md:mb-6">About Maison Verde</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3d3d3d] leading-[0.95] font-cormorant font-light tracking-tight mb-6 md:mb-8">
                WHERE VISION<br/>MEETS CRAFT
              </h2>
              <p className="text-[#5a5a5a] font-crimson text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light mb-4 md:mb-6">
                For over a decade, Maison Verde has been at the forefront of transforming spaces into breathtaking sanctuaries. Our philosophy is simple yet profound: every space tells a story, and we're here to help you tell yours.
              </p>
              <p className="text-[#5a5a5a] font-crimson text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light mb-6 md:mb-8">
                From contemporary minimalism to timeless classics, we blend artistry with functionality, creating interiors that don't just look beautiful—they feel like home.
              </p>
              <a href="#" className="inline-flex items-center text-[#8b7355] font-crimson font-medium text-sm md:text-base lg:text-lg tracking-wide uppercase group border-b-2 border-[#8b7355]/30 hover:border-[#8b7355] transition-all pb-1">
                <span className="mr-4">Our Story</span>
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-2"></i>
              </a>
            </div>
            <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
              <img 
                className="absolute inset-0 w-full h-full object-cover shadow-xl" 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" 
                alt="Interior design showcase"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
            <div className="border-l-2 border-[#8b7355] pl-4 md:pl-6 py-3 md:py-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant font-light text-[#3d3d3d] mb-0">250+</h3>
              <p className="text-[#7a7a7a] font-crimson text-xs sm:text-sm md:text-base uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="border-l-2 border-[#a0927d] pl-4 md:pl-6 py-3 md:py-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant font-light text-[#3d3d3d] mb-0">15+</h3>
              <p className="text-[#7a7a7a] font-crimson text-xs sm:text-sm md:text-base uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="border-l-2 border-[#8b7355] pl-4 md:pl-6 py-3 md:py-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant font-light text-[#3d3d3d] mb-0">98%</h3>
              <p className="text-[#7a7a7a] font-crimson text-xs sm:text-sm md:text-base uppercase tracking-wider">Client Satisfaction</p>
            </div>
            <div className="border-l-2 border-[#a0927d] pl-4 md:pl-6 py-3 md:py-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant font-light text-[#3d3d3d] mb-0">30+</h3>
              <p className="text-[#7a7a7a] font-crimson text-xs sm:text-sm md:text-base uppercase tracking-wider">Design Awards</p>
            </div>
          </div>
        </div>
      </div>

      <ParallaxImage
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=2400&q=80"
        alt="Modern living room design"
        title="The Madison Residence"
        subtitle="Featured Project"
      />

      <div className="relative px-4 sm:px-6 md:px-8 lg:px-[5%] py-12 sm:py-16 md:py-20 lg:py-[12%] overflow-hidden bg-white">

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <p className="text-[#8b7355] font-crimson text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase mb-4 md:mb-6 opacity-60">Our Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#2a2a2a] leading-[0.95] font-cormorant font-light tracking-tight mb-4 md:mb-6">
              COMPREHENSIVE<br/>DESIGN SOLUTIONS
            </h2>
            <div className="w-12 h-px bg-linear-to-r from-transparent via-[#8b7355] to-transparent mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer bg-[#fafaf9] hover:bg-[#f5f5f4] transition-all duration-500 border border-[#e5e5e5]/50 hover:border-[#d4d4d4]/60">
                <div className="relative h-[30vh] sm:h-[35vh] overflow-hidden">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" 
                    src={service.image} 
                    alt={service.alt}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cormorant text-[#2a2a2a] font-light mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-[#6a6a6a] font-crimson text-sm sm:text-base md:text-lg leading-[1.8] font-light mb-4 md:mb-6">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#8b7355] font-crimson text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase transition-all duration-300 border-b border-[#8b7355]/0 hover:border-[#8b7355] pb-1">
                    <span>Explore</span>
                    <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ParallaxImage
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=2400&q=80"
        alt="Green interior with plants"
        title="Bringing Nature Inside"
        subtitle="Natural Living"
      />

      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-[10%]">
        <div className="px-4 sm:px-6 md:px-8 lg:px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-8 md:mb-12 lg:mb-16">
              <div>
                <p className="text-[#8b7355] font-crimson text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase mb-3 md:mb-4 opacity-70">Portfolio</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] leading-[0.95] font-cormorant font-light tracking-tight">
                  FEATURED<br/>DESIGNS
                </h2>
              </div>
              <a href="#" className="hidden lg:inline-flex items-center gap-3 text-[#1a1a1a] font-crimson text-sm md:text-base tracking-[0.15em] uppercase group pb-1">
                <span className="border-b border-[#1a1a1a]/20 group-hover:border-[#8b7355] transition-all">View All</span>
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>

            <div className="grid lg:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="lg:col-span-7 cursor-pointer relative h-[50vh] md:h-[60vh] lg:h-[65vh] group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80" 
                  alt="Elegant Bath"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 md:gap-3 mb-0">
                    <span className="w-6 md:w-8 h-px bg-white/60"></span>
                    <p className="font-crimson text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-white/90">Residential</p>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cormorant font-light text-white sm:mb-0 mb-3">Elegant Bath Retreat</h3>
                  {/* <p className="font-crimson text-[0.95vw] text-white/80 max-w-md">Modern luxury meets tranquility</p> */}
                </div>
              </div>

              <div className="lg:col-span-5 cursor-pointer relative h-[50vh] md:h-[60vh] lg:h-[65vh] group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" 
                  alt="Contemporary Living"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 md:gap-3 mb-0">
                    <span className="w-6 md:w-8 h-px bg-white/60"></span>
                    <p className="font-crimson text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-white/90">Residential</p>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cormorant font-light text-white sm:mb-0 mb-3">Contemporary Living</h3>
                  {/* <p className="font-crimson text-[0.95vw] text-white/80">Form and function perfected</p> */}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="relative h-[40vh] md:h-[45vh] cursor-pointer group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80" 
                  alt="Office Design"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <span className="w-4 sm:w-6 h-px bg-white/60"></span>
                    <p className="font-crimson text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/90">Office</p>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-cormorant font-light text-white sm:mb-0 mb-3">Serene Sanctuary</h3>
                </div>
              </div>

              <div className="relative h-[40vh] md:h-[45vh] cursor-pointer group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" 
                  alt="Living Space"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <span className="w-4 sm:w-6 h-px bg-white/60"></span>
                    <p className="font-crimson text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/90">Living</p>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-cormorant font-light text-white sm:mb-0 mb-3">Urban Oasis</h3>
                </div>
              </div>

              <div className="relative h-[40vh] md:h-[45vh] cursor-pointer group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80" 
                  alt="Dining Area"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <span className="w-4 sm:w-6 h-px bg-white/60"></span>
                    <p className="font-crimson text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/90">Dining</p>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-cormorant font-light text-white sm:mb-0 mb-3">Refined Dining</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#8b7355] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b7355] rounded-full blur-[120px]"></div>
        </div>

        <div className="px-4 sm:px-6 md:px-8 lg:px-[5%] relative z-10">
          <div className="max-w-7xl mb-0 mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 md:mb-20 lg:mb-24">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#8b7355]/40"></span>
                <p className="text-[#8b7355] font-crimson text-xs sm:text-sm tracking-[0.35em] uppercase">Our Process</p>
                <span className="w-8 h-px bg-[#8b7355]/40"></span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2a2a] leading-none font-cormorant font-light tracking-tight mb-6">
                FROM CONCEPT<br/>TO CREATION
              </h2>
              <p className="text-[#6a6a6a] font-crimson text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                A refined four-stage journey that transforms your vision into reality through collaboration and precision.
              </p>
            </div>

            {/* Process Steps Grid */}
            <div className="relative">

              <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-4 lg:gap-6">
                {processSteps.map(({ title, description }, index) => (
                  <div 
                    key={title} 
                    className="group relative bg-white rounded-2xl border-2 border-[#f0f0f0] hover:border-[#8b7355]/30 p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(139,115,85,0.15)] hover:-translate-y-1"
                  >
                    {/* Step Number */}
                    <div className="relative mb-6">
                      {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#8b7355]/5 to-[#8b7355]/10 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-500"></div> */}
                      <span className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white border-2 border-[#8b7355]/20 text-3xl font-cormorant text-[#8b7355] font-light group-hover:border-[#8b7355]/40 group-hover:bg-[#8b7355]/5 transition-all duration-500">
                        {`0${index + 1}`}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl sm:text-3xl md:text-2xl font-cormorant text-[#2a2a2a] font-light mb-3 tracking-tight group-hover:text-[#8b7355] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-[#6a6a6a] font-crimson text-sm sm:text-base leading-relaxed">
                      {description}
                    </p>

                    {/* Decorative Element */}
                    {/* <div className="mt-6 w-12 h-1 bg-gradient-to-r from-[#8b7355]/20 to-transparent rounded-full group-hover:w-20 transition-all duration-500"></div> */}

                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 md:mt-20 text-center">
              <p className="text-[#6a6a6a] font-crimson text-base sm:text-lg mb-6">
                Ready to start your design journey?
              </p>
              <a href="#" className="inline-flex items-center gap-3 text-[#8b7355] font-crimson text-sm tracking-[0.2em] uppercase group border-b-2 border-[#8b7355]/30 hover:border-[#8b7355] transition-all pb-2">
                <span>Let's Begin</span>
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 md:px-8 lg:px-[5%] py-12 sm:py-16 md:py-20 lg:py-[10%] overflow-hidden bg-[#52615c]">
        <div className="absolute inset-0">
          <img
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
            src="https://images.unsplash.com/photo-1596205250164-3f7b11a0b23d?auto=format&fit=crop&w=1800&q=80"
            alt="Minimal interior background"
          />
          <div className="absolute inset-0 bg-[#0f1a16]/75"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] font-cormorant font-light tracking-tight mb-6 md:mb-8">
            READY TO TRANSFORM<br/>YOUR SPACE?
          </h2>
          <p className="text-white/85 font-crimson text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
            Let's start a conversation about your design dreams. Schedule a complimentary consultation with our expert team.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            <a href="#" className="inline-flex items-center gap-3 md:gap-4 bg-white text-[#15221b] font-crimson font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-wide uppercase px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 hover:bg-[#f4f7f2] transition-all duration-300">
              <span>Schedule Consultation</span>
              <i className="ri-calendar-line"></i>
            </a>
            <a href="#" className="inline-flex items-center gap-3 md:gap-4 border-2 border-white text-white font-crimson font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-wide uppercase px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 hover:bg-white hover:text-[#15221b] transition-all duration-300">
              <span>View Portfolio</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-[#443930] text-white px-4 sm:px-6 md:px-8 lg:px-[5%] py-12 sm:py-16 md:py-20 lg:py-[5%]">
        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-cormorant font-light mb-4 md:mb-6">MAISON VERDE</h3>
            <p className="text-white/70 font-crimson text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Transforming spaces into timeless works of art since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/25 rounded-full flex items-center justify-center hover:border-[#b7c7b0] hover:text-[#b7c7b0] transition-all">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/25 rounded-full flex items-center justify-center hover:border-[#b7c7b0] hover:text-[#b7c7b0] transition-all">
                <i className="ri-pinterest-line"></i>
              </a>
              <a href="#" className="w-10 h-10 border border-white/25 rounded-full flex items-center justify-center hover:border-[#b7c7b0] hover:text-[#b7c7b0] transition-all">
                <i className="ri-linkedin-line"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-lg font-crimson font-medium mb-4 md:mb-6 tracking-wider uppercase">Services</h4>
            <ul className="space-y-2 md:space-y-3 font-crimson text-sm sm:text-base md:text-lg">
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>Residential Design</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>Commercial Spaces</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>Consultation</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>Project Management</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-lg font-crimson font-medium mb-4 md:mb-6 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 md:space-y-3 font-crimson text-sm sm:text-base md:text-lg">
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>About Us</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>Portfolio</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>Process</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
              <li><a href="#" className="relative inline-block py-1 text-white/70 hover:text-white transition-colors group"><span>Contact</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-lg font-crimson font-medium mb-4 md:mb-6 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2 md:space-y-3 font-crimson text-sm sm:text-base md:text-lg text-white/70">
              <li>123 Design Street</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="relative inline-block py-1 hover:text-white transition-colors group"><span>+1 (555) 123-4567</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a>
              </li>
              <li>
                <a href="mailto:hello@maisonverde.com" className="relative inline-block py-1 hover:text-white transition-colors group"><span>hello@maisonverde.com</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/70 transition-all duration-500 ease-out group-hover:w-full"></span></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-white/60 font-crimson text-xs sm:text-sm md:text-base mb-4 lg:mb-0">
            © 2024 Maison Verde. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 md:gap-8 font-crimson text-xs sm:text-sm md:text-base">
            <a href="#" className="relative py-1 text-white/60 hover:text-white transition-colors group"><span>Privacy Policy</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-500 ease-out group-hover:w-full"></span></a>
            <a href="#" className="relative py-1 text-white/60 hover:text-white transition-colors group"><span>Terms of Service</span><span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-500 ease-out group-hover:w-full"></span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
