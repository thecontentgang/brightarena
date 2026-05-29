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
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 sm:w-14 sm:h-14"
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
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 sm:w-14 sm:h-14"
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
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 sm:w-14 sm:h-14"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ValueItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}

const VALUES: ValueItem[] = [
  {
    id: "co-creation",
    icon: <BulbIcon />,
    title: "Co-creation",
    body: "We believe that impactful design creates spaces that are an extension of an individual — a manifestation of their true selves. We curate and build the perfect space alongside you, the one who truly matters.",
  },
  {
    id: "sustainability",
    icon: <LeafIcon />,
    title: "Sustainability",
    body: "All brands in our portfolio are LEED v4.1 certified, with practices and products that embody sustainability and enrich your living spaces and the planet at large.",
  },
  {
    id: "quality",
    icon: <MedalIcon />,
    title: "Quality",
    body: "The most renowned brands from across the globe. The most avant-garde collaborations. The most premium of products, finishes, and materials. We settle for nothing less.",
  },
];

// ─── Value Row ────────────────────────────────────────────────────────────────

interface ValueRowProps {
  item: ValueItem;
  index: number;
  isLast: boolean;
}

const ValueRow = ({
  item,
  index,
  isLast,
}: ValueRowProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        flex
        flex-col
        items-start
        text-left
        lg:flex-row
        lg:items-start
        gap-5
        sm:gap-7
        lg:gap-12
        px-6
        sm:px-12
        lg:px-20
        xl:px-24
        py-12
        lg:py-16
        xl:py-20
        ${
          !isLast
            ? "border-b border-[var(--color-background)]/20"
            : ""
        }
      `}
    >

      {/* ICON */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.2,
        }}
        className="
          text-[var(--color-background)]/70
          pt-1
          shrink-0
        "
      >
        {item.icon}
      </motion.div>

      {/* TEXT */}
      <div className="flex-1 flex flex-col items-start">

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.28,
          }}
          className="
            font-heading
            text-[2.2rem]
            sm:text-[2.6rem]
            tracking-[-0.04em]
            font-normal
            text-[var(--color-background)]
            mb-5
            leading-none
          "
        >
          {item.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: index * 0.15 + 0.38,
          }}
          className="
            text-[15px]
            sm:text-[16px]
            font-light
            text-[var(--color-background)]/80
            leading-[1.8]
            max-w-[540px]
          "
        >
          {item.body}
        </motion.p>

      </div>

    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function WhatTrulyMatters() {
  const sectionRef = useRef<HTMLElement>(null);

  const headlineRef = useRef<HTMLHeadingElement>(null);

  const leftPanelRef = useRef<HTMLDivElement>(null);

  const dividerRef = useRef<HTMLDivElement>(null);

  // ─── GSAP ───────────────────────────────────────────────
  useEffect(() => {
    if (!headlineRef.current || !sectionRef.current)
      return;

    const words =
      headlineRef.current.querySelectorAll(".gsap-word");

    const ctx = gsap.context(() => {
      // HEADLINE
      gsap.fromTo(
        words,
        {
          yPercent: 110,
          opacity: 0,
          skewY: 4,
        },
        {
          yPercent: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // PARALLAX
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(leftPanelRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // DIVIDER
        if (dividerRef.current) {
          gsap.fromTo(
            dividerRef.current,
            {
              scaleY: 0,
              transformOrigin: "top center",
            },
            {
              scaleY: 1,
              duration: 1.5,
              ease: "expo.inOut",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        flex-col
        lg:flex-row
        min-h-screen
        bg-[var(--color-primary)]
        overflow-hidden
      "
      aria-label="What truly matters to us"
    >

      {/* ───────────────── LEFT PANEL ───────────────── */}
      <div
        ref={leftPanelRef}
        className="
          relative
          w-full
          lg:w-[42%]
          bg-[var(--color-background)]/[0.03]
          flex
          items-center
          justify-center
          px-6
          sm:px-12
          lg:min-h-screen
        "
      >

        {/* TEXTURE */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-background) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* HEADING */}
        <h2
          ref={headlineRef}
          className="
            relative
            font-heading
            font-light
            text-[3rem]
            sm:text-[4.5rem]
            lg:text-[5.5rem]
            leading-[0.95]
            tracking-[-0.05em]
            text-[var(--color-background)]
            text-center
            flex
            flex-col
            items-center
            justify-center
            mx-auto
            max-w-[700px]
          "
        >

          {["What truly matters", "to us"].map(
            (word) => (
              <span
                key={word}
                className="block overflow-hidden lg:pb-3"
              >
                <span className="gsap-word block">
                  {word}
                </span>
              </span>
            )
          )}

        </h2>

      </div>

      {/* ───────────────── DIVIDER ───────────────── */}
      <div
        ref={dividerRef}
        className="
          hidden
          lg:block
          flex-shrink-0
          w-px
          bg-[var(--color-background)]/20
          self-stretch
          mb-12
        "
      />

      {/* MOBILE DIVIDER */}
      <div
        className="
          block
          lg:hidden
          w-auto
          mx-6
          sm:mx-12
          h-px
          bg-[var(--color-background)]/20
        "
      />

      {/* ───────────────── RIGHT PANEL ───────────────── */}
      <div
        className="
          w-full
          lg:w-[58%]
          flex
          flex-col
          justify-center
          
          
        "
      >

        {VALUES.map((item, i) => (
          <ValueRow
            key={item.id}
            item={item}
            index={i}
            isLast={i === VALUES.length - 1}
          />
        ))}

      </div>

    </section>
  );
}