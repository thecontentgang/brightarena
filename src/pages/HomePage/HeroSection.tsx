import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const headingText = "Where Every Space Tells a Story Worth Living In";

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // --- GSAP ANIMATIONS (Only triggers on Desktop) ---
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
        },
      });

      // Text moves left and fades out
      tl.to(".hero-content", {
        x: -100, 
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      });

      // Video wrapper expands leftward to cover the screen
      tl.to(
        ".hero-image-wrapper",
        {
          width: "100%",
          ease: "power2.inOut",
          duration: 1.2,
        },
        "<"
      );

      tl.to(
        ".hero-image",
        {
          scale: 1.1,
          ease: "power2.inOut",
          duration: 1.2,
        },
        "<"
      );

      tl.to(
        ".hero-expand-content",
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.5,
        },
        "-=0.4"
      );

      tl.to(
        ".hero-word",
        {
          color: "#3A393F",
          stagger: 0.15,
          duration: 0.5,
          ease: "none",
        },
        "+=0.2"
      );

      tl.to(
        ".hero-subtext",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };

  return (
    <section
      ref={sectionRef}
      className="hero-section relative w-full min-h-[100dvh] lg:h-[120dvh] bg-[var(--color-primary)] overflow-hidden"
    >
      {/* =========================================
          MOBILE & TABLET LAYOUT (< 1024px)
          Uniform spacing using flex gap, strictly ordered
      ========================================= */}
      <div className="flex flex-col lg:hidden w-full min-h-[100dvh] px-6 sm:px-8 md:px-10 py-16 top-10 gap-10 justify-center items-center text-center z-10 relative">
        
        {/* 1. Headline */}
        <div className="w-full max-w-xl flex-shrink-0">
          <h1 className="font-heading text-[3.2rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[0.88] tracking-[-0.06em] text-[var(--color-background)]">
            Elevating Spaces,
            <br />
            Mastering Luxury
          </h1>
        </div>

        {/* 2. Video */}
        <div className="w-full h-[45dvh] sm:h-[50dvh] relative flex-shrink-0 overflow-hidden rounded-sm">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/herovideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* 3. Description */}
        <div className="w-full max-w-xl flex-shrink-0">
          <p className="max-w-[420px] mx-auto text-[var(--color-background)]/90 text-sm sm:text-[15px] md:text-[16px] leading-[1.9] font-body font-light">
            Crafting timeless interiors with refined elegance, we create
            sophisticated spaces that blend luxury, comfort, and modern living
            into one seamless experience.
          </p>
        </div>
          
        {/* 4. Dual Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 w-full flex-shrink-0 mt-2">
          <Link to="/projects" onClick={handleLinkClick}>
            <button className="px-6 py-3.5 sm:px-8 sm:py-4 bg-[var(--color-background)] text-[var(--color-primary)] text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:scale-105 shadow-md">
              Projects
            </button>
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            <button className="px-6 py-3.5 sm:px-8 sm:py-4 border border-[var(--color-background)] text-[var(--color-background)] text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--color-background)] hover:text-[var(--color-primary)]">
              Contact
            </button>
          </Link>
        </div>
      </div>

      {/* =========================================
          DESKTOP LAYOUT (>= 1024px)
          Text on LEFT (43%), Video on RIGHT (57%)
      ========================================= */}
      <div className="hidden lg:block relative h-full w-full">
        
        {/* CONTENT (Left side) */}
        <div className="hero-content absolute left-0 -top-10 h-full w-[36%] bg-[var(--color-primary)] flex items-center justify-center px-12 lg:px-16 xl:px-24 py-16 z-10">
          <div className="max-w-xl w-full flex flex-col items-start text-left">
            <h1 className="font-heading text-[5.5rem] xl:text-[6rem] leading-[0.88] tracking-[-0.06em] text-[var(--color-background)] z-20">
              Elevating Spaces,
              <br />
              Mastering Luxury
            </h1>
            <p className="mt-10 max-w-[420px] text-[var(--color-background)]/90 text-[16px] leading-[1.9] font-body font-light">
              Crafting timeless interiors with refined elegance, we create
              sophisticated spaces that blend luxury, comfort, and modern living
              into one seamless experience.
            </p>
            
            {/* Dual Buttons */}
            <div className="flex items-center gap-4 mt-10">
              <Link to="/projects" onClick={handleLinkClick}>
                <button className="px-8 py-4 bg-[var(--color-background)] text-[var(--color-primary)] text-[11px] xl:text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:scale-105 shadow-md">
                  Projects
                </button>
              </Link>
              <Link to="/contact" onClick={handleLinkClick}>
                <button className="px-8 py-4 border border-[var(--color-background)] text-[var(--color-background)] text-[11px] xl:text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--color-background)] hover:text-[var(--color-primary)]">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE/VIDEO WRAPPER (Right side) */}
        {/* Removed the conflicting 'relative' class to ensure 'absolute right-0' works perfectly */}
        <div className="hero-image-wrapper absolute right-0 top-0 h-full w-[64%] flex-shrink-0 z-20 overflow-hidden">
          <video
            className="hero-image absolute inset-0 w-full h-full object-cover"
            src="/herovideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* EXPANDED CONTENT (Visible during scroll) */}
          <div className="hero-expand-content absolute inset-0 flex flex-col items-center justify-center opacity-0 px-10 z-30">
            <div className="max-w-5xl text-center flex flex-col items-center -translate-y-12">
              <h2 className="font-heading font-bold text-[2.5rem] xl:text-[4rem] leading-[0.95] tracking-[-0.05em] flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]">
                {headingText.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className="hero-word text-transparent bg-clip-text bg-gradient-to-r from-[#F4EDDB] to-[#3A393F]"
                  >
                    {word}
                  </span>
                ))}
              </h2>
            </div>

            <p className="hero-subtext absolute bottom-12 sm:bottom-16 z-40 max-w-3xl text-center opacity-0 translate-y-10 text-[#3A393F] text-sm sm:text-base md:text-lg leading-[1.8] font-body font-light px-4">
              Our spaces breathe life into walls, warmth into rooms, and purpose
              into every corner. At Bright Arena Interiors, we craft
              environments that are distinctly yours — designed with intention,
              finished with care.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;