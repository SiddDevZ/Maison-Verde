import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import ParallaxImage from './components/ParallaxImage';

export default function Home() {
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
      <nav className="absolute top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center">
        <div className="text-white">
          <h2 className="text-[1.6vw] cursor-pointer font-cormorant font-light tracking-[0.15em]">MAISON VERDE</h2>
        </div>
        <div className="hidden lg:flex gap-12 text-white font-crimson text-[0.8vw] uppercase tracking-[0.2em]">
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
        <div>
          <button className="text-white cursor-pointer font-crimson text-[0.8vw] uppercase tracking-[0.2em] px-8 py-3 border border-white/40 hover:bg-white hover:text-black transition-all duration-500">
            Get Started
          </button>
        </div>
      </nav>

      <div className="relative min-h-screen">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&q=80"
          alt="Luxurious interior design"
          title=""
          subtitle=""
          isHero={true}
        />
        <div className="absolute bottom-0 left-0 px-10 py-20 z-10 w-full text-white">
          <p className="text-[1.1vw] font-crimson font-light tracking-[0.3em] mb-6 uppercase opacity-90">Interior Design Excellence</p>
          <h1 className="text-[9vw] font-cormorant font-light leading-[0.85] tracking-tight mb-3">MAISON</h1>
          <h1 className="text-[9vw] font-cormorant font-light leading-[0.85] tracking-tight mb-8">VERDE</h1>
          {/* <p className="text-[1.4vw] font-crimson font-light mb-10 max-w-2xl opacity-90 leading-relaxed">Crafting dreams into living spaces where elegance meets innovation, and every detail tells your unique story.</p> */}


          
        </div>
      </div>

      <div className="px-[5%] py-[8%] bg-[#f8f6f3]">
        <div className="max-w-[95%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="text-[#8b7355] font-crimson text-[0.9vw] tracking-[0.25em] uppercase mb-6">About Maison Verde</p>
              <h2 className="text-[6.5vw] lg:text-[4.5vw] text-[#3d3d3d] leading-[0.95] font-cormorant font-light tracking-tight mb-8">
                WHERE VISION<br/>MEETS CRAFT
              </h2>
              <p className="text-[#5a5a5a] font-crimson text-[1.1vw] lg:text-[1.3vw] leading-relaxed font-light mb-6">
                For over a decade, Maison Verde has been at the forefront of transforming spaces into breathtaking sanctuaries. Our philosophy is simple yet profound: every space tells a story, and we're here to help you tell yours.
              </p>
              <p className="text-[#5a5a5a] font-crimson text-[1.1vw] lg:text-[1.3vw] leading-relaxed font-light mb-8">
                From contemporary minimalism to timeless classics, we blend artistry with functionality, creating interiors that don't just look beautiful—they feel like home.
              </p>
              <a href="#" className="inline-flex items-center text-[#8b7355] font-crimson font-medium text-[1.1vw] tracking-wide uppercase group border-b-2 border-[#8b7355]/30 hover:border-[#8b7355] transition-all pb-1">
                <span className="mr-4">Our Story</span>
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-2"></i>
              </a>
            </div>
            <div className="relative h-[70vh]">
              <img 
                className="absolute inset-0 w-full h-full object-cover shadow-xl" 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" 
                alt="Interior design showcase"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
            <div className="border-l-2 border-[#8b7355] pl-6 py-4">
              <h3 className="text-[4vw] lg:text-[3.5vw] font-cormorant font-light text-[#3d3d3d] mb-0">250+</h3>
              <p className="text-[#7a7a7a] font-crimson text-[0.95vw] uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="border-l-2 border-[#a0927d] pl-6 py-4">
              <h3 className="text-[4vw] lg:text-[3.5vw] font-cormorant font-light text-[#3d3d3d] mb-0">15+</h3>
              <p className="text-[#7a7a7a] font-crimson text-[0.95vw] uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="border-l-2 border-[#8b7355] pl-6 py-4">
              <h3 className="text-[4vw] lg:text-[3.5vw] font-cormorant font-light text-[#3d3d3d] mb-0">98%</h3>
              <p className="text-[#7a7a7a] font-crimson text-[0.95vw] uppercase tracking-wider">Client Satisfaction</p>
            </div>
            <div className="border-l-2 border-[#a0927d] pl-6 py-4">
              <h3 className="text-[4vw] lg:text-[3.5vw] font-cormorant font-light text-[#3d3d3d] mb-0">30+</h3>
              <p className="text-[#7a7a7a] font-crimson text-[0.95vw] uppercase tracking-wider">Design Awards</p>
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

      <div className="relative px-[5%] py-[12%] overflow-hidden bg-white">

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#8b7355] font-crimson text-[0.85vw] tracking-[0.35em] uppercase mb-6 opacity-60">Our Services</p>
            <h2 className="text-[6.5vw] lg:text-[4.5vw] text-[#2a2a2a] leading-[0.95] font-cormorant font-light tracking-tight mb-6">
              COMPREHENSIVE<br/>DESIGN SOLUTIONS
            </h2>
            <div className="w-12 h-px bg-linear-to-r from-transparent via-[#8b7355] to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-13">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer bg-[#fafaf9] hover:bg-[#f5f5f4] transition-all duration-500 border border-[#e5e5e5]/50 hover:border-[#d4d4d4]/60">
                <div className="relative h-[35vh] overflow-hidden">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" 
                    src={service.image} 
                    alt={service.alt}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-[2.2vw] lg:text-[1.75vw] font-cormorant text-[#2a2a2a] font-light mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-[#6a6a6a] font-crimson text-[1vw] lg:text-[1vw] leading-[1.8] font-light mb-6">
                    {service.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#8b7355] font-crimson text-[0.9vw] tracking-[0.15em] uppercase transition-all duration-300 border-b border-[#8b7355]/0 hover:border-[#8b7355] pb-1">
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

      <div className="bg-white py-[10%]">
        <div className="px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-[#8b7355] font-crimson text-[0.85vw] tracking-[0.35em] uppercase mb-4 opacity-70">Portfolio</p>
                <h2 className="text-[6vw] lg:text-[4.2vw] text-[#1a1a1a] leading-[0.95] font-cormorant font-light tracking-tight">
                  FEATURED<br/>DESIGNS
                </h2>
              </div>
              <a href="#" className="hidden lg:inline-flex items-center gap-3 text-[#1a1a1a] font-crimson text-[0.95vw] tracking-[0.15em] uppercase group pb-1">
                <span className="border-b border-[#1a1a1a]/20 group-hover:border-[#8b7355] transition-all">View All</span>
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 mb-6">
              <div className="lg:col-span-7 cursor-pointer relative h-[65vh] group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80" 
                  alt="Elegant Bath"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-0">
                    <span className="w-8 h-px bg-white/60"></span>
                    <p className="font-crimson text-[0.75vw] tracking-[0.25em] uppercase text-white/90">Residential</p>
                  </div>
                  <h3 className="text-[2.8vw] lg:text-[2.2vw] font-cormorant font-light text-white">Elegant Bath Retreat</h3>
                  {/* <p className="font-crimson text-[0.95vw] text-white/80 max-w-md">Modern luxury meets tranquility</p> */}
                </div>
              </div>

              <div className="lg:col-span-5 cursor-pointer relative h-[65vh] group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" 
                  alt="Contemporary Living"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-0">
                    <span className="w-8 h-px bg-white/60"></span>
                    <p className="font-crimson text-[0.75vw] tracking-[0.25em] uppercase text-white/90">Residential</p>
                  </div>
                  <h3 className="text-[2.8vw] lg:text-[2.2vw] font-cormorant font-light text-white">Contemporary Living</h3>
                  {/* <p className="font-crimson text-[0.95vw] text-white/80">Form and function perfected</p> */}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="relative h-[45vh] cursor-pointer group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80" 
                  alt="Office Design"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-px bg-white/60"></span>
                    <p className="font-crimson text-[0.7vw] tracking-[0.25em] uppercase text-white/90">Office</p>
                  </div>
                  <h3 className="text-[2.2vw] lg:text-[1.6vw] font-cormorant font-light text-white">Serene Sanctuary</h3>
                </div>
              </div>

              <div className="relative h-[45vh] cursor-pointer group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" 
                  alt="Living Space"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-px bg-white/60"></span>
                    <p className="font-crimson text-[0.7vw] tracking-[0.25em] uppercase text-white/90">Living</p>
                  </div>
                  <h3 className="text-[2.2vw] lg:text-[1.6vw] font-cormorant font-light text-white">Urban Oasis</h3>
                </div>
              </div>

              <div className="relative h-[45vh] cursor-pointer group overflow-hidden bg-[#f5f5f5]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" 
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80" 
                  alt="Dining Area"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-px bg-white/60"></span>
                    <p className="font-crimson text-[0.7vw] tracking-[0.25em] uppercase text-white/90">Dining</p>
                  </div>
                  <h3 className="text-[2.2vw] lg:text-[1.6vw] font-cormorant font-light text-white">Refined Dining</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f1ea] py-[8%]">
        <div className="px-[5%]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#6d8a75] font-crimson text-[0.9vw] tracking-[0.3em] uppercase mb-4">Our Process</p>
              <h2 className="text-[7vw] lg:text-[5vw] text-[#1f2c24] leading-[0.95] font-cormorant font-light tracking-tight mb-6">
                FROM CONCEPT<br/>TO CREATION
              </h2>
              <p className="text-[#4b5b52] font-crimson text-[1.2vw] max-w-3xl mx-auto leading-relaxed">
                A refined four-stage journey that keeps you at the center, balancing imagination with meticulous execution.
              </p>
            </div>

            <div className="relative mt-16">
              <div className="hidden lg:block absolute inset-x-[4%] top-16 h-px bg-linear-to-r from-transparent via-[#9fb2a5] to-transparent pointer-events-none"></div>
              <div className="grid gap-10 lg:grid-cols-4">
                {processSteps.map(({ title, description }, index) => (
                  <div key={title} className="relative bg-white/80 backdrop-blur rounded-3xl border border-[#d9e3d8] px-8 py-8 shadow-[0_25px_60px_-45px_rgba(20,32,27,0.65)] transition-transform duration-300 hover:-translate-y-2">
                    <span className="left-8 text-[3.5vw] lg:text-[2.5vw] font-cormorant text-[#b9c7bb]/70">{`0${index + 1}`}</span>
                    <h3 className="text-[2.3vw] lg:text-[1.8vw] font-cormorant text-[#1f2c24] font-light mb-2">{title}</h3>
                    <p className="text-[#4b5b52] font-crimson text-[1vw] leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-[5%] py-[10%] overflow-hidden bg-[#52615c]">
        <div className="absolute inset-0">
          <img
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
            src="https://images.unsplash.com/photo-1596205250164-3f7b11a0b23d?auto=format&fit=crop&w=1800&q=80"
            alt="Minimal interior background"
          />
          <div className="absolute inset-0 bg-[#0f1a16]/75"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h2 className="text-[7vw] lg:text-[5vw] leading-[0.95] font-cormorant font-light tracking-tight mb-8">
            READY TO TRANSFORM<br/>YOUR SPACE?
          </h2>
          <p className="text-white/85 font-crimson text-[1.3vw] leading-relaxed mb-12 max-w-3xl mx-auto">
            Let's start a conversation about your design dreams. Schedule a complimentary consultation with our expert team.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="inline-flex items-center gap-4 bg-white text-[#15221b] font-crimson font-medium text-[1.1vw] tracking-wide uppercase px-12 py-5 hover:bg-[#f4f7f2] transition-all duration-300">
              <span>Schedule Consultation</span>
              <i className="ri-calendar-line"></i>
            </a>
            <a href="#" className="inline-flex items-center gap-4 border-2 border-white text-white font-crimson font-medium text-[1.1vw] tracking-wide uppercase px-12 py-5 hover:bg-white hover:text-[#15221b] transition-all duration-300">
              <span>View Portfolio</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-[#3d3d3d] text-white px-[5%] py-[5%]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[2.5vw] lg:text-[2vw] font-cormorant font-light mb-6">MAISON VERDE</h3>
            <p className="text-white/70 font-crimson text-[1vw] leading-relaxed mb-6">
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
            <h4 className="text-[1.3vw] font-crimson font-medium mb-6 tracking-wider uppercase">Services</h4>
            <ul className="space-y-3 font-crimson text-[1vw]">
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">Residential Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">Commercial Spaces</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">Consultation</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">Project Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[1.3vw] font-crimson font-medium mb-6 tracking-wider uppercase">Company</h4>
            <ul className="space-y-3 font-crimson text-[1vw]">
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">Process</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#b7c7b0] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[1.3vw] font-crimson font-medium mb-6 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3 font-crimson text-[1vw] text-white/70">
              <li>123 Design Street</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-[#b7c7b0] transition-colors">+1 (555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:hello@maisonverde.com" className="hover:text-[#b7c7b0] transition-colors">hello@maisonverde.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-white/60 font-crimson text-[0.9vw] mb-4 lg:mb-0">
            © 2024 Maison Verde. All rights reserved.
          </p>
          <div className="flex gap-8 font-crimson text-[0.9vw]">
            <a href="#" className="text-white/60 hover:text-[#b7c7b0] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#b7c7b0] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
