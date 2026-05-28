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
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul K.",
    text: "Exceptional attention to detail. Every corner feels thoughtfully designed and beautifully balanced.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha V.",
    text: "The team perfectly blended elegance, warmth, and functionality into our dream home.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
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
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".horizontal-slide");

      const scrollTween = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () =>
            `+=${(containerRef.current?.offsetWidth || window.innerWidth) * 3}`,
        },
      });

      // PROJECT COUNTER
      const projectObj = { value: 0 };

      gsap.to(projectObj, {
        value: 180,
        snap: "value",
        ease: "none",
        scrollTrigger: {
          trigger: ".slide-2",
          containerAnimation: scrollTween,
          start: "left 60%",
          end: "center center",
          scrub: true,
        },
        onUpdate: () => {
          if (projectCountRef.current) {
            projectCountRef.current.innerText = String(projectObj.value);
          }
        },
      });

      // REVIEWS
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
            containerAnimation: scrollTween,
            start: "left 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // RETENTION COUNTER
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
          if (retentionCountRef.current) {
            retentionCountRef.current.innerText = String(
              retentionObj.value
            );
          }
        },
      });

      // LOGOS
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
            containerAnimation: scrollTween,
            start: "left 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // SHARED
const slideWrapper =
  "horizontal-slide w-screen h-[80dvh] md:h-screen flex-shrink-0 flex items-center justify-center px-5 sm:px-6 md:px-12 lg:px-20 py-8 md:py-0 relative";

const contentGrid =
  "w-full max-w-[1450px] h-full flex flex-col justify-center lg:flex-row items-center gap-8 md:gap-16";

  return (
    <section
  ref={containerRef}
  className="
    relative
    w-full
    h-screen
    overflow-hidden
    pt-[10vh]
    sm:pt-[8vh]
    md:pt-0
  "
>

      <div className="flex h-full w-[400vw]">

        {/* ───────────────── SLIDE 1 ───────────────── */}
        <div
          className={`slide-1 ${slideWrapper} bg-[#F4EDDB] text-[#3A393F]`}
        >
          <div className={contentGrid}>

            {/* LEFT */}
            <div className="flex-1 flex flex-col gap-6">

              <span className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-50">
                01 / Bright Arena
              </span>

              <h2
                className="
                  font-heading
                  text-4xl
                  md:text-5xl
                  lg:text-7xl
                  leading-[1]
                  tracking-tight
                  font-light
                "
              >
                Designing timeless interiors with warmth, elegance, and purpose.
              </h2>

              <div className="max-w-md mt-2">
                <h3 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-3">
                  Who We Are
                </h3>

                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Bright Arena Interiors crafts refined living experiences
                  through luxurious materials, spatial harmony, and
                  contemporary aesthetics tailored to modern lifestyles.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 w-full h-[40vh] lg:h-[70vh] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ───────────────── SLIDE 2 ───────────────── */}
        <div
          className={`slide-2 ${slideWrapper} bg-[#3A393F] text-[#F4EDDB]`}
        >
          <div className={contentGrid}>

            {/* LEFT */}
            <div className="flex-1 flex flex-col justify-center">

              <span className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-50 mb-6">
                02 / Projects
              </span>

              <div className="flex items-start leading-none -ml-2">
                <span
                  ref={projectCountRef}
                  className="
                    font-heading
                    text-[4.5rem] sm:text-[6rem] md:text-[10rem]
                    
                    lg:text-[14rem]
                    leading-none
                    tracking-tighter
                  "
                >
                  0
                </span>

                <span className="font-heading text-5xl md:text-7xl opacity-40 mt-8 ml-2">
                  +
                </span>
              </div>

              <div className="max-w-md mt-4">
                <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">
                  Interior Spaces
                </h4>

                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Residential and luxury interiors crafted with precision,
                  modern functionality, and timeless elegance.
                </p>
              </div>
            </div>

            {/* RIGHT */}
           <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full max-w-[520px] lg:max-w-none mx-auto">
              {projectImages.map((src, idx) => (
                <div
                  key={idx}
                  className="
  aspect-[4/4.5]
  sm:aspect-[4/5]
  overflow-hidden
  rounded-2xl
"
                >
                  <img
                    src={src}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────────── SLIDE 3 ───────────────── */}
        <div
          className={`slide-3 ${slideWrapper} bg-[#F4EDDB] text-[#3A393F]`}
        >
          <div className={contentGrid}>

            {/* LEFT */}
            <div className="flex-1 flex flex-col justify-center">

              <span className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-50 mb-6">
                03 / Reviews
              </span>

              <div className="flex items-center leading-none">
                <span
                  className="
                    font-heading
                   text-[4.5rem] sm:text-[6rem] 
                    md:text-[10rem]
                    lg:text-[13rem]
                    leading-none
                    tracking-tighter
                  "
                >
                  5.0
                </span>

                <span className="font-heading text-4xl md:text-7xl opacity-40 ml-4 mb-8">
                  ★
                </span>
              </div>

              <div className="max-w-md mt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">
                  Client Experience
                </h4>

                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Every Bright Arena project is designed with thoughtful
                  detailing, functionality, and a deep understanding of modern
                  living.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6 w-full">

              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="
                    review-card
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    gap-4
                    border
                    border-[#3A393F]/10
                    bg-white/40
                    p-5
                    md:p-8
                  "
                >
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="
                      w-12
                      h-12
                      md:w-16
                      md:h-16
                      rounded-full
                      object-cover
                    "
                  />

                  <div className="flex flex-col gap-2">

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">
                        {review.name}
                      </span>

                      <span className="text-[10px] tracking-[0.2em] opacity-40">
                        ★★★★★
                      </span>
                    </div>

                    <p className="text-sm md:text-base opacity-70 italic font-light leading-relaxed">
                      "{review.text}"
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ───────────────── SLIDE 4 ───────────────── */}
        <div
          className={`slide-4 ${slideWrapper} bg-[#3A393F] text-[#F4EDDB]`}
        >
          <div className={contentGrid}>

            {/* LEFT */}
            <div className="flex-1 flex flex-col justify-center">

              <span className="text-xs md:text-sm uppercase tracking-[0.3em] opacity-50 mb-6">
                04 / Trust
              </span>

              <div className="flex items-start leading-none -ml-2">
                <span
                  ref={retentionCountRef}
                  className="
                    font-heading
                   text-[4.5rem] sm:text-[6rem] md:text-[10rem]
                    
                    lg:text-[14rem]
                    leading-none
                    tracking-tighter
                  "
                >
                  0
                </span>

                <span className="font-heading text-5xl md:text-7xl opacity-40 mt-8 ml-2">
                  %
                </span>
              </div>

              <div className="max-w-md mt-4">
                <h4 className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">
                  Client Satisfaction
                </h4>

                <p className="opacity-70 text-sm md:text-base leading-relaxed font-light">
                  Our long-term client relationships are built through quality,
                  transparency, and beautifully executed interiors.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex flex-col items-center justify-center w-full">

              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-6
                  md:gap-8
                  w-full
                  border
                  border-[#F4EDDB]/10
                  p-8
                  md:p-12
                "
              >
                {clientLogos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="client-logo flex items-center justify-center h-12 md:h-20"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="
                        max-w-full
                        max-h-full
                        object-contain
                        invert
                        opacity-80
                      "
                    />
                  </div>
                ))}
              </div>

              <p
                className="
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.3em]
                  text-center
                  opacity-30
                  mt-8
                "
              >
                Trusted by homeowners across India
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}