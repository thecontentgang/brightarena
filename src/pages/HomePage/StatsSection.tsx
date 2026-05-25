import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrightLogo from "/bright-logo.webp"; // Update with your actual logo path

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ────────────────────────────────────────────────────────────────────

const projectImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566752355-35792bed3a88?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop",
];

const reviews = [
  {
    name: "Sarah J.",
    text: "Transcendent design. Clickora didn't just build an interface — they crafted a digital symphony.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael L.",
    text: "Precision executed perfectly. Minimal noise, maximum impact. Truly unparalleled performance.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Elena V.",
    text: "They minimize architectural noise to let the brand tell a perfectly balanced story.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const clientLogos = [
  BrightLogo, BrightLogo, BrightLogo, BrightLogo,
  BrightLogo, BrightLogo, BrightLogo, BrightLogo,
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function HorizontalStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Counters
  const projectCountRef = useRef<HTMLSpanElement>(null);
  const retentionCountRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".horizontal-slide");
      
      // 1. Main Horizontal Scroll Tween
      const scrollTween = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing
          // FIX: Use a fallback (window.innerWidth) instead of the unsafe ! assertion
          end: () => `+=${(containerRef.current?.offsetWidth || window.innerWidth) * 3}`, 
        },
      });

      // 2. Animate Project Counter inside Slide 2
      const projectObj = { value: 0 };
      gsap.to(projectObj, {
        value: 180,
        snap: "value",
        ease: "none",
        scrollTrigger: {
          trigger: ".slide-2",
          containerAnimation: scrollTween, // Links this trigger to the horizontal scroll
          start: "left 60%", // Start counting when the slide is 60% into view
          end: "center center",
          scrub: true,
        },
        onUpdate: () => {
          if (projectCountRef.current) projectCountRef.current.innerText = String(projectObj.value);
        },
      });

      // 3. Stagger Reviews inside Slide 3
      gsap.fromTo(".review-card", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".slide-3",
            containerAnimation: scrollTween,
            start: "left 70%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // 4. Animate Retention Counter & Logos inside Slide 4
      const retentionObj = { value: 0 };
      gsap.to(retentionObj, {
        value: 98,
        snap: "value",
        ease: "none",
        scrollTrigger: {
          trigger: ".slide-4",
          containerAnimation: scrollTween,
          start: "left 60%",
          end: "center center",
          scrub: true,
        },
        onUpdate: () => {
          if (retentionCountRef.current) retentionCountRef.current.innerText = String(retentionObj.value);
        },
      });

      gsap.fromTo(".client-logo", 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 0.4, 
          scale: 1, 
          stagger: 0.1, 
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".slide-4",
            containerAnimation: scrollTween,
            start: "left 70%",
            toggleActions: "play none none reverse",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Shared classes for slide layouts
  const slideWrapper = "horizontal-slide w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-16 lg:p-24 relative";
  const contentGrid = "w-full max-w-[1400px] h-full flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#1A1A1A] text-[#F4EDDB] overflow-hidden selection:bg-[#F4EDDB] selection:text-[#1A1A1A]"
    >
      {/* The long horizontal track */}
      <div ref={sliderRef} className="flex h-full w-[400vw]">

        {/* ─── SLIDE 1: CONCEPT ─── */}
        <div className={`slide-1 ${slideWrapper}`}>
          <div className={contentGrid}>
            <div className="flex-1 flex flex-col gap-6">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium opacity-50">
                01 / Concept
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight italic font-light text-white">
                "Design is not the decoration of a space. It is the alignment of light, form, and purpose."
              </h2>
              <div className="max-w-md mt-4">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold opacity-50 mb-2">Who We Are</h3>
                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Clickora functions as a digital catalyst. We interpret abstract ideals into functional, high-performance layouts, stripping away visual clutter to let authentic interactions breathe.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full h-[40vh] lg:h-[70vh] rounded-md overflow-hidden bg-[#2A2A2A] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                alt="Architecture"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
            </div>
          </div>
        </div>

        {/* ─── SLIDE 2: SCALE ─── */}
        <div className={`slide-2 ${slideWrapper}`}>
          <div className={contentGrid}>
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium opacity-50 mb-6">
                02 / Scale
              </span>
              <div className="flex items-start leading-none -ml-2">
                <span ref={projectCountRef} className="font-heading text-[8rem] md:text-[12rem] lg:text-[15rem] leading-none tracking-tighter text-white">
                  0
                </span>
                <span className="font-heading text-5xl md:text-8xl font-light opacity-40 mt-8 ml-2">+</span>
              </div>
              <div className="max-w-md mt-6">
                <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Global Portfolios</h4>
                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Bespoke digital environments and comprehensive systems designed with strict intent across major global industries.
                </p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full h-fit">
              {projectImages.map((src, idx) => (
                <div key={idx} className="aspect-[4/5] overflow-hidden rounded-sm bg-[#2A2A2A]">
                  <img src={src} alt={`Project ${idx}`} className="w-full h-full object-cover brightness-[0.65] transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── SLIDE 3: PRAISE ─── */}
        <div className={`slide-3 ${slideWrapper}`}>
          <div className={contentGrid}>
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium opacity-50 mb-6">
                03 / Praise
              </span>
              <div className="flex items-center leading-none">
                <span className="font-heading text-[7rem] md:text-[10rem] lg:text-[13rem] leading-none tracking-tighter text-white">
                  5.0
                </span>
                <span className="font-heading text-4xl md:text-7xl opacity-40 ml-4 mb-8">★</span>
              </div>
              <div className="max-w-md mt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Client Testimonials</h4>
                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  An uncompromising standard of engineering validated through consistent corporate and private praise.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 md:gap-6 w-full">
              {reviews.map((rev, idx) => (
                <div key={idx} className="review-card flex flex-col sm:flex-row sm:items-center gap-4 bg-[#2A2A2A]/30 border border-[#F4EDDB]/10 p-5 md:p-8 rounded-md backdrop-blur-md">
                  <img src={rev.avatar} alt={rev.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover grayscale opacity-90 shrink-0" />
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center w-full mb-2">
                      <span className="block font-medium text-white text-lg">{rev.name}</span>
                      <span className="block text-[10px] md:text-xs tracking-[0.2em] opacity-40">★★★★★</span>
                    </div>
                    <p className="text-sm md:text-base opacity-70 font-light leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── SLIDE 4: TRUST ─── */}
        <div className={`slide-4 ${slideWrapper}`}>
          <div className={contentGrid}>
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium opacity-50 mb-6">
                04 / Trust
              </span>
              <div className="flex items-start leading-none -ml-2">
                <span ref={retentionCountRef} className="font-heading text-[8rem] md:text-[12rem] lg:text-[15rem] leading-none tracking-tighter text-white">
                  0
                </span>
                <span className="font-heading text-5xl md:text-8xl font-light opacity-40 mt-8 ml-2">%</span>
              </div>
              <div className="max-w-md mt-6">
                <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Client Retention</h4>
                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Long-term relational continuity built on premium performance. Our clients trust our methodology over years of scale development.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full bg-[#2A2A2A]/20 border border-[#F4EDDB]/5 p-8 md:p-12 rounded-md">
                {clientLogos.map((logo, idx) => (
                  <div key={idx} className="client-logo flex items-center justify-center h-12 md:h-20">
                    <img src={logo} alt="Client Logo" className="max-w-full max-h-full object-contain filter invert opacity-80" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-center opacity-30 mt-8 font-medium">
                Trusted partners across the globe
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}