"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { gsap } from "gsap";

// ─── Icons ─────────────────────────────────────────────────────────────────

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    headline: "Experience the exceptional up close",
    image: "https://images.unsplash.com/photo-1600566753086-00f18efc2049?q=80&w=2400&auto=format&fit=crop",
    brand: "Miele",
    year: "2024",
    category: "Kitchen Design",
    location: "Dubai",
  },
  {
    id: 2,
    headline: "Masterpieces of culinary architecture",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2400&auto=format&fit=crop",
    brand: "Gaggenau",
    year: "2023",
    category: "Hospitality",
    location: "Riyadh",
  },
  {
    id: 3,
    headline: "Where materiality meets innovation",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2400&auto=format&fit=crop",
    brand: "Sub-Zero",
    year: "2024",
    category: "Living Space",
    location: "Abu Dhabi",
  },
];

const AUTOPLAY_DURATION = 6000;
type Dir = 1 | -1;

const EASE_SLIDE: Transition["ease"] = [0.76, 0, 0.24, 1];
const EASE_TEXT: Transition["ease"] = [0.22, 1, 0.36, 1];

const imgVariants = {
  enter: (d: Dir) => ({ x: d > 0 ? "100%" : "-100%" }),
  center: { x: "0%" },
  exit: (d: Dir) => ({ x: d > 0 ? "-100%" : "100%" }),
};

// ─── Component ─────────────────────────────────────────────────────────────

export default function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<Dir>(1);
  const [paused, setPaused] = useState(false);

  const progressRef = useRef({ val: 0 });
  const barRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const go = useCallback((next: number, d: Dir) => {
    setDir(d);
    setIndex(next);
    progressRef.current.val = 0;
  }, []);

  const next = useCallback(() => go((index + 1) % PROJECTS.length, 1), [index, go]);
  const prev = useCallback(() => go((index - 1 + PROJECTS.length) % PROJECTS.length, -1), [index, go]);

  useEffect(() => {
    if (paused) { tweenRef.current?.pause(); return; }
    progressRef.current.val = 0;
    tweenRef.current?.kill();
    tweenRef.current = gsap.to(progressRef.current, {
      val: 100,
      duration: AUTOPLAY_DURATION / 1000,
      ease: "none",
      onUpdate: () => {
        if (barRef.current) barRef.current.style.width = `${progressRef.current.val}%`;
      },
      onComplete: () => next(),
    });
    return () => { tweenRef.current?.kill(); };
  }, [index, paused, next]);

  const p = PROJECTS[index];

  return (
    <>
      <style>{`
        .ps-wrap {
          display: flex;
          width: 100%;
          height: 100svh;
          min-height: 560px;
          font-family: var(--font-body, 'Work Sans', sans-serif);
        }

        .ps-info {
          width: 38%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 44px 44px 36px;
          box-sizing: border-box;
          background: var(--color-primary, #3A393F);
          color: var(--color-background, #F4EDDB);
        }

        .ps-img {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .ps-headline {
          font-family: var(--font-heading, 'Amoera', serif);
          font-weight: 400;
          font-size: clamp(1.9rem, 2.8vw, 3rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0;
          color: var(--color-background, #F4EDDB);
        }

        .ps-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--color-border, #DDD3BE);
          background: transparent;
          color: var(--color-background, #F4EDDB);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .ps-btn:hover {
          background: var(--color-accent, #B89B5E);
          border-color: var(--color-accent, #B89B5E);
        }

        .ps-label {
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-muted, #9B9588);
          font-family: var(--font-body, 'Work Sans', sans-serif);
        }

        .ps-accent-label {
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-accent, #B89B5E);
          font-family: var(--font-body, 'Work Sans', sans-serif);
        }

        .ps-progress-track {
          height: 1px;
          background: var(--color-dark-soft, #44434A);
          margin-bottom: 22px;
          position: relative;
        }

        .ps-progress-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 0;
          background: var(--color-accent, #B89B5E);
          transition: none;
        }

        .ps-dot {
          display: block;
          height: 1px;
          border-radius: 4px;
          background: var(--color-background, #F4EDDB);
        }

        @media (max-width: 768px) {
          .ps-wrap { flex-direction: column-reverse; }
          .ps-info {
            width: 100%;
            height: 46%;
            padding: 24px 24px 28px;
          }
          .ps-img { width: 100%; flex: 1; }
          .ps-headline { font-size: clamp(1.6rem, 6vw, 2.2rem); }
        }
      `}</style>

      <div
        className="ps-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Projects showcase"
      >

        {/* ── INFO PANEL ─────────────────────────────────────────────────── */}
        <div className="ps-info">

          {/* Top: counter + category */}
          <div>
            <div className="ps-label" style={{ marginBottom: 12 }}>
              {String(index + 1).padStart(2, "0")} — {String(PROJECTS.length).padStart(2, "0")}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`cat-${p.id}`}
                className="ps-accent-label"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE_TEXT }}
              >
                {p.category} · {p.location}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Middle: headline */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`h-${p.id}`}
              className="ps-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: EASE_TEXT }}
            >
              {p.headline}
            </motion.h2>
          </AnimatePresence>

          {/* Bottom: brand + progress + nav */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`brand-${p.id}`}
                className="ps-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_TEXT }}
                style={{ marginBottom: 24, letterSpacing: "0.3em" }}
              >
                {p.brand} · {p.year}
              </motion.div>
            </AnimatePresence>

            <div className="ps-progress-track">
              <div ref={barRef} className="ps-progress-fill" />
            </div>

            {/* Arrows + dots */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button className="ps-btn" onClick={prev} aria-label="Previous">
                <ChevronLeft />
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
                {PROJECTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    aria-label={`Project ${i + 1}`}
                    style={{ background: "none", border: "none", padding: "8px 0", cursor: "pointer", flex: i === index ? 1 : "none" }}
                  >
                    <motion.span
                      animate={{
                        width: i === index ? "100%" : 6,
                        opacity: i === index ? 1 : 0.25,
                        backgroundColor: i === index ? "var(--color-accent, #B89B5E)" : "var(--color-dark-soft, #44434A)",
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{
                        display: "block",
                        height: 1,
                        borderRadius: 4,
                        minWidth: i === index ? 20 : 6,
                      }}
                    />
                  </button>
                ))}
              </div>

              <button className="ps-btn" onClick={next} aria-label="Next">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* ── IMAGE PANEL ────────────────────────────────────────────────── */}
        <div className="ps-img">
          <AnimatePresence custom={dir} mode="sync">
            <motion.div
              key={p.id}
              custom={dir}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: EASE_SLIDE }}
              style={{ position: "absolute", inset: 0 }}
            >
              <img
                src={p.image}
                alt={p.category}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </>
  );
}