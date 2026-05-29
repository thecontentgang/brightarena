import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrightLogo from "/bright-logo.webp";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const projectImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566752355-35792bed3a88?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
];

 const reviews = [
  {
    name: "Ananya R.",
    text: "Bright Arena transformed our apartment into a luxurious and welcoming space beyond expectations.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Rahul K.",
    text: "Exceptional attention to detail. Every corner feels thoughtfully designed and beautifully balanced.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Sneha V.",
    text: "The team perfectly blended elegance, warmth, and functionality into our dream home.",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

const clientLogos = [
  BrightLogo,
  BrightLogo,
  BrightLogo,
  BrightLogo,
  BrightLogo,
  BrightLogo,
  BrightLogo,
  BrightLogo,
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

export default function HorizontalStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectCountRef = useRef<HTMLSpanElement>(null);
  const retentionCountRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // GSAP matchMedia allows us to define different behaviors based on screen size
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
      },
      (context) => {
        const { isDesktop } = context.conditions as {
          isDesktop: boolean;
          isMobile: boolean;
        };
        
        let scrollTween: gsap.core.Tween | undefined;

        // 1. HORIZONTAL SCROLL (Desktop Only)
        if (isDesktop) {
          const slides = gsap.utils.toArray(".horizontal-slide");
          scrollTween = gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              scrub: 1,
              // Multiply by the number of slides minus 1 to determine scroll distance
              end: () => `+=${(containerRef.current?.offsetWidth || window.innerWidth) * 3}`,
            },
          });
        }

        // 2. PROJECT COUNTER ANIMATION
        const projectObj = { value: 0 };
        gsap.to(projectObj, {
          value: 180,
          snap: "value",
          ease: "none",
          scrollTrigger: {
            trigger: ".slide-2",
            // If desktop, track the horizontal container animation. If mobile, track normal vertical scroll.
            containerAnimation: isDesktop ? scrollTween : undefined,
            start: isDesktop ? "left 60%" : "top 75%",
            end: isDesktop ? "center center" : "top 25%",
            scrub: true,
          },
          onUpdate: () => {
            if (projectCountRef.current) {
              projectCountRef.current.innerText = String(projectObj.value);
            }
          },
        });

        // 3. REVIEWS FADE-IN
        gsap.fromTo(
          ".review-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".slide-3",
              containerAnimation: isDesktop ? scrollTween : undefined,
              start: isDesktop ? "left 70%" : "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // 4. RETENTION COUNTER ANIMATION
        const retentionObj = { value: 0 };
        gsap.to(retentionObj, {
          value: 98,
          snap: "value",
          ease: "none",
          scrollTrigger: {
            trigger: ".slide-4",
            containerAnimation: isDesktop ? scrollTween : undefined,
            start: isDesktop ? "left 60%" : "top 75%",
            end: isDesktop ? "center center" : "top 25%",
            scrub: true,
          },
          onUpdate: () => {
            if (retentionCountRef.current) {
              retentionCountRef.current.innerText = String(retentionObj.value);
            }
          },
        });

        // 5. CLIENT LOGOS ANIMATION
        gsap.fromTo(
          ".client-logo",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 0.5,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: ".slide-4",
              containerAnimation: isDesktop ? scrollTween : undefined,
              start: isDesktop ? "left 70%" : "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    );

    return () => mm.revert();
  }, []);

  // ─────────────────────────────────────────────────────────────
  // SHARED STYLES
  // ─────────────────────────────────────────────────────────────
  
  // On mobile: normal vertical flow with padding. On desktop: full screen horizontal slide.
  const slideWrapper = `
    horizontal-slide 
    w-full lg:w-screen 
    min-h-[60vh] lg:h-screen 
    flex-shrink-0 
    flex items-center justify-center 
    px-6 md:px-12 lg:px-20 
    py-16 lg:py-0 
    relative
  `;

  // On mobile: stack vertically. On desktop: side-by-side flex row.
  const contentGrid = `
    w-full max-w-[1450px] 
    h-full 
    flex flex-col lg:flex-row 
    justify-center items-center 
    gap-10 md:gap-16
  `;

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[var(--color-primary)]"
    >
      {/* 
        The wrapper switches from vertical column (mobile) to a wide horizontal row (desktop)
      */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-full lg:w-[400vw]">
        
        {/* ───────────────── SLIDE 1: INTRO ───────────────── */}
        <div className={`slide-1 ${slideWrapper} bg-[#F4EDDB] text-[#3A393F]`}>
          <div className={contentGrid}>
            
            {/* LEFT TEXT */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 w-full text-center lg:text-left">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-50">
                01 / Bright Arena
              </span>

              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-light">
                Designing timeless interiors with warmth, elegance, and purpose.
              </h2>

              <div className="max-w-md mx-auto lg:mx-0 mt-4">
                <h3 className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2">
                  Who We Are
                </h3>
                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Bright Arena Interiors crafts refined living experiences
                  through luxurious materials, spatial harmony, and
                  contemporary aesthetics tailored to modern lifestyles.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 w-full h-[35vh] sm:h-[45vh] lg:h-[70vh] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Interior Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      
        {/* ───────────────── SLIDE 2: PROJECTS (COMPACT & SHIFTED UP) ───────────────── */}
        <div className={`slide-2 ${slideWrapper} bg-[#3A393F] text-[#F4EDDB]`}>
          {/* Added lg:-translate-y-8 to shift the entire block slightly up on desktop/laptop */}
          <div className="w-full max-w-[1050px] mx-auto flex flex-col justify-center h-full lg:-translate-y-20 py-20">
            
            {/* TOP HEADER */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
              <span className="w-8 h-[1px] bg-[#F4EDDB]/30 hidden lg:block" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-60">
                02 / Projects
              </span>
            </div>

            {/* BENTO GRID CONTAINER */}
            {/* Reduced height to 48vh to "cut the bottom" and make it even more compact */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 w-full lg:h-[48vh]">
              
              {/* LARGE HERO IMAGE (Spans 2 columns on desktop) */}
              <div className="lg:col-span-2 rounded-2xl overflow-hidden relative group h-[40vh] sm:h-[50vh] lg:h-full w-full">
                <img
                  src={projectImages[0]}
                  alt="Featured Project"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 ease-out"
                />
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-medium border border-white/50 px-8 py-4 rounded-full backdrop-blur-sm text-white">
                    View Gallery
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN (Stat Box + Secondary Image) */}
              <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-5 h-full pb-10">
                
                {/* FROSTED STAT & TEXT BOX */}
                <div className="flex-1 bg-white/[0.03] border border-[#F4EDDB]/10 rounded-2xl p-6 md:p-8 flex flex-col justify-center backdrop-blur-md hover:bg-white/[0.05] transition-colors duration-500">
                  <div className="flex items-start leading-none -ml-2 mb-2 lg:mb-4">
                    <span
                      ref={projectCountRef}
                      className="font-heading text-[5.5rem] lg:text-[6rem] leading-none tracking-tighter"
                    >
                      0
                    </span>
                    <span className="font-heading text-4xl lg:text-5xl opacity-40 mt-2 lg:mt-3 ml-2">
                      +
                    </span>
                  </div>
                  <h4 className="text-[11px] md:text-xs uppercase tracking-[0.25em] opacity-80 mb-2 md:mb-3 mt-1 lg:mt-2">
                    Interior Spaces
                  </h4>
                  <p className="opacity-60 text-[13px] md:text-sm leading-[1.6] font-light">
                    Residential and luxury interiors crafted with precision,
                    modern functionality, and timeless elegance.
                  </p>
                </div>

                {/* SECONDARY ACCENT IMAGE */}
                {/* Because the parent grid is now 48vh, this image will naturally be shorter/cut at the bottom */}
                <div className="flex-1 rounded-2xl overflow-hidden relative group hidden sm:block h-[30vh] lg:h-auto">
                  <img
                    src={projectImages[1]}
                    alt="Secondary Project"
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 ease-out"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>

       
        {/* ───────────────── SLIDE 3: GOOGLE REVIEWS (CALM & CARDS) ───────────────── */}
        <div className={`slide-3 ${slideWrapper} bg-[#F4EDDB] text-[#3A393F]`}>
          <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-10 md:gap-16">
            
            {/* TOP: GOOGLE RATING HEADER */}
            <div className="flex flex-col items-center text-center">
              {/* Google Brand Tag */}
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-80"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium opacity-60">
                  Google My Business
                </span>
              </div>

              {/* Rating Numbers */}
              <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-5">
                <div className="flex items-start leading-none tracking-tighter">
                  <span className="font-heading text-[5rem] sm:text-[6rem] md:text-[7.5rem] leading-none">
                    4.9
                  </span>
                  <span className="font-heading text-2xl md:text-4xl opacity-40 mt-2 md:mt-4 ml-2">
                    /5
                  </span>
                </div>
                
                <div className="flex flex-col items-center md:items-start pb-2 md:pb-4">
                  <div className="text-xl md:text-2xl tracking-widest text-[#D4AF37] mb-1 md:mb-2">
                    ★★★★★
                  </div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] opacity-40">
                    Based on 150+ reviews
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM: GOOGLE REVIEW CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 w-full">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="
                    review-card 
                    flex flex-col gap-4 
                    bg-[#FCFAF8] /* Very soft, warm white */
                    p-6 md:p-8 
                    rounded-2xl 
                    border border-[#3A393F]/5 
                    shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]
                    transition-all duration-500 ease-out
                  "
                >
                  {/* Card Header: Avatar & Name */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3 md:gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm md:text-base font-medium">
                          {review.name}
                        </span>
                        <span className="text-[10px] opacity-40 mt-0.5">
                          Verified Client
                        </span>
                      </div>
                    </div>
                    {/* Google G icon indicator on card */}
                    <div className="w-4 h-4 opacity-20">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="text-[#D4AF37] text-sm md:text-base tracking-wider">
                    ★★★★★
                  </div>

                  {/* Review Text */}
                  <p className="text-sm md:text-[15px] opacity-70 font-light leading-[1.8] font-body mt-1">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

       {/* ───────────────── SLIDE 4: TRUST (MONUMENTAL CENTERED) ───────────────── */}
        <div className={`slide-4 ${slideWrapper} bg-[#3A393F] text-[#F4EDDB]`}>
          <div className="w-full max-w-[1200px] h-full flex flex-col justify-between py-12 lg:py-16">
            
            {/* TOP: EYEBROW */}
            <div className="w-full flex justify-center lg:justify-start">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-50">
                04 / Trust
              </span>
            </div>

            {/* MIDDLE: MASSIVE STAT & TEXT */}
            <div className="flex-1 flex flex-col items-center justify-center text-center mt-8 lg:mt-0">
              
              <div className="flex items-start leading-none -ml-4 lg:-ml-8">
                <span
                  ref={retentionCountRef}
                  className="font-heading text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter"
                >
                  0
                </span>
                <span className="font-heading text-4xl sm:text-6xl md:text-8xl lg:text-9xl opacity-30 mt-4 sm:mt-6 md:mt-12 ml-2 lg:ml-4">
                  %
                </span>
              </div>

              <div className="max-w-[480px] mt-3 md:mt-5 flex flex-col items-center">
                <h4 className="text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-80 mb-1.5 md:mb-2">
                  Client Satisfaction
                </h4>
                <p className="opacity-60 text-sm md:text-base leading-[1.9] font-light">
                  Our long-term relationships are built on transparency, exceptional craftsmanship, and executing spaces that consistently exceed expectations.
                </p>
              </div>
              
            </div>

            {/* BOTTOM: LOGO STRIP */}
            <div className="w-full flex flex-col items-center mt-2 border-t border-[#F4EDDB]/10 pt-8 lg:pt-10">
              <p className="text-[9px] uppercase tracking-[0.3em] opacity-30 mb-6 lg:mb-8">
                Trusted by Industry Leaders
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full">
                {clientLogos.slice(0, 5).map((logo, idx) => (
                  <div
                    key={idx}
                    className="client-logo flex items-center justify-center h-8 md:h-12"
                  >
                    <img
                      src={logo}
                      alt="Client logo"
                      className="max-w-full max-h-full object-contain invert opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-out cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}