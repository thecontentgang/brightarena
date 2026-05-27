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
    easing: (t: number) =>
      Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  // --- GSAP ANIMATIONS ---
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

      tl.to(".hero-content", {
        x: -100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      });

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
          color: "#F4EDDB",
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
  ScrollTrigger.getAll().forEach((trigger) =>
    trigger.kill()
  );

  ctx.revert();
};
  }, []);

  return (
    <section ref={sectionRef} className="hero-section relative w-full h-[100dvh] bg-[var(--color-primary)] overflow-hidden">
      <div className="relative flex flex-col lg:block h-full w-full">

        {/* CONTENT (Left side) */}
        <div className="hero-content order-2 lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[43%] bg-[var(--color-primary)] flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-10 sm:py-12 md:py-14 lg:py-16 min-h-[58dvh] lg:min-h-screen z-10">
          <div className="max-w-xl w-full flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="font-heading text-[3.2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[5.6rem] leading-[0.88] tracking-[-0.06em] text-[var(--color-background)] z-20">
              Elevating Spaces,
              <br />
              Mastering Luxury
            </h1>
            <p className="mt-10 max-w-[520px] text-[var(--color-background)]/90 text-sm sm:text-[15px] md:text-[16px] leading-[1.9] font-body font-light">
              Crafting timeless interiors with refined elegance, we create
              sophisticated spaces that blend luxury, comfort, and modern living
              into one seamless experience.
            </p>
            <Link
              to="/projects"
              onClick={() => {
  window.scrollTo(0, 0);

  ScrollTrigger.getAll().forEach((trigger) =>
    trigger.kill()
  );
}}
            >
              <button
                className="
      group
      relative
      translate-y-6
      sm:mt-16
      w-[90px]
      h-[90px]
      sm:w-[105px]
      sm:h-[105px]
      rounded-full
      bg-[var(--color-background)]
      text-[var(--color-primary)]
      flex
      flex-col
      items-center
      justify-center
      overflow-hidden
      transition-all
      duration-500
      hover:scale-105
      shrink-0
    "
              >
                <div
                  className="
        absolute
        inset-0
        rounded-full
        border
        border-[var(--color-background)]
        scale-0
        bg-[var(--color-primary)]
        transition-all
        duration-500
        group-hover:scale-100
      "
                />

                <span
                  className="
        relative
        z-10
        uppercase
        tracking-[0.16em]
        text-[8px]
        sm:text-[9px]
        leading-[1.7]
        text-center
        transition-colors
        duration-500
        group-hover:text-[var(--color-background)]
      "
                >
                  View
                  <br />
                  Projects
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE WRAPPER */}
        <div className="hero-image-wrapper order-1 lg:absolute lg:right-0 lg:top-0 h-[42dvh] sm:h-[48dvh] md:h-[52dvh] lg:h-full lg:w-[57%] relative overflow-hidden flex-shrink-0 z-20">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Interior"
            className="hero-image absolute inset-0 w-full h-full object-cover scale-100 transform origin-right"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />

          {/* EXPANDED CONTENT */}
          <div className="hero-expand-content absolute inset-0 hidden lg:flex flex-col items-center justify-center opacity-0 px-10 z-30">
            <div className="max-w-5xl text-center flex flex-col items-center -translate-y-12">
              <h2 className="font-heading font-bold text-[2.5rem] xl:text-[4rem] leading-[0.95] tracking-[-0.05em] flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]">
                {headingText.split(" ").map((word, index) => (
                  <span key={index} className="hero-word text-white/30">
                    {word}
                  </span>
                ))}
              </h2>
            </div>
            <p className="hero-subtext absolute bottom-12 sm:bottom-16 z-40 max-w-3xl text-center opacity-0 translate-y-10 text-[#F4EDDB] text-sm sm:text-base md:text-lg leading-[1.8] font-body font-light px-4">
              Our spaces breathe life into walls, warmth into rooms, and purpose into every corner. At Bright Arena Interiors, we craft environments that are distinctly yours — designed with intention, finished with care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;