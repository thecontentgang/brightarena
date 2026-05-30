"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Icons ────────────────────────────────────────────────────────────────────

const BulbIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 sm:w-7 sm:h-7"
    aria-hidden="true"
  >
    <path d="M9 18h6M10 21h4M12 2a7 7 0 0 1 4 12.74V17H8v-2.26A7 7 0 0 1 12 2z" />
  </svg>
);

const LeafIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 sm:w-7 sm:h-7"
    aria-hidden="true"
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34c.5.5 1.2.66 1.82.66C8 20 10.5 18 12 17c1.5-1 3-2.5 5-2.5s3.5 1.5 4 3c.5-4-1-8-4-9.5z" />
    <path d="M3.82 19.34C6 17 10 13 16 10" />
  </svg>
);

const MedalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 sm:w-7 sm:h-7"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ValueItem {
  id: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}

const VALUES: ValueItem[] = [
  {
    id: "co-creation",
    number: "01",
    icon: <BulbIcon />,
    title: "Co-creation",
    body: "We believe that impactful design creates spaces that are an extension of an individual — a manifestation of their true selves. We curate and build the perfect space alongside you, the one who truly matters.",
  },
  {
    id: "sustainability",
    number: "02",
    icon: <LeafIcon />,
    title: "Sustainability",
    body: "All brands in our portfolio are LEED v4.1 certified, with practices and products that embody sustainability and enrich your living spaces and the planet at large.",
  },
  {
    id: "quality",
    number: "03",
    icon: <MedalIcon />,
    title: "Quality",
    body: "The most renowned brands from across the globe. The most avant-garde collaborations. The most premium of products, finishes, and materials. We settle for nothing less.",
  },
];

// ─── Value Card ────────────────────────────────────────────────────────────────

interface ValueCardProps {
  item: ValueItem;
  index: number;
}

const ValueCard = ({ item, index }: ValueCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col border-t border-[var(--color-primary)]/20 pt-8 sm:pt-10 w-full"
    >
      {/* Top Row: Number & Icon */}
      <div className="flex justify-between items-start mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-medium">
          {item.number}
        </span>
        <div
          className="
            flex items-center justify-center 
            w-14 h-14 sm:w-16 sm:h-16 
            rounded-full 
            border border-[var(--color-primary)]/10 
            bg-[var(--color-primary)]/[0.03]
            text-[var(--color-primary)]/80
          "
        >
          {item.icon}
        </div>
      </div>

      {/* Content */}
      <h3
        className="
          font-heading 
          text-3xl sm:text-4xl lg:text-[2.8rem] 
          tracking-[-0.03em] 
          text-[var(--color-primary)] 
          mb-4 sm:mb-6 
          leading-none
        "
      >
        {item.title}
      </h3>
      <p
        className="
          text-sm sm:text-[15px] md:text-base 
          font-light font-body
          text-[var(--color-primary)]/70 
          leading-[1.8] 
        "
      >
        {item.body}
      </p>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function WhatTrulyMatters() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // ─── GSAP Headline Animation ───────────────────────────────────────────────
  useEffect(() => {
    if (!headlineRef.current || !sectionRef.current) return;

    const words = headlineRef.current.querySelectorAll(".gsap-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          yPercent: 120,
          opacity: 0,
          rotateZ: 2,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full 
        bg-[var(--color-background)] 
        px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24
        py-24 sm:py-32 lg:py-30
      "
      aria-label="What truly matters to us"
    >
      {/* Background Texture (Optional, adds a premium feel) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* ───────────────── HEADER ───────────────── */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[var(--color-primary)]/50 mb-6 block">
            Our Philosophy
          </span>

          <h2
            ref={headlineRef}
            className="
              font-heading font-light
              text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] 
              leading-[0.95] tracking-[-0.04em] 
              text-[var(--color-primary)]
              max-w-[800px]
            "
          >
            {["What truly", "matters to us."].map((word, idx) => (
              <span key={idx} className="block overflow-hidden pb-2 lg:pb-2">
                <span className="gsap-word block origin-bottom-left">
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* ───────────────── 3-COLUMN GRID ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {VALUES.map((item, i) => (
            <ValueCard key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}