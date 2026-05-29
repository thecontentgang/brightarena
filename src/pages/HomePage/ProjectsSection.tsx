"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { projectsData } from "../ProjectsPage/ProjectsData";

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const PROJECTS = projectsData.map((p) => ({
  id: p.id,
  title: p.shortDescription,
  image: p.heroImage || `https://picsum.photos/seed/${p.id}/1600/900`,
  year: p.year,
  category: p.houseType,
  location: p.location,
  slug: p.slug,
}));

const AUTOPLAY_DURATION = 6000;
type Dir = 1 | -1;
const EASE_SLIDE: Transition["ease"] = [0.76, 0, 0.24, 1];
const EASE_TEXT: Transition["ease"] = [0.22, 1, 0.36, 1];

const imgVariants = {
  enter: (d: Dir) => ({ x: d > 0 ? "100%" : "-100%" }),
  center: { x: "0%" },
  exit: (d: Dir) => ({ x: d > 0 ? "-100%" : "100%" }),
};

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
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #111;
          font-family: inherit;
        }

        .ps-img {
          position: absolute;
          inset: 0;
        }

        .ps-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ps-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 60%, transparent 100%);
        }

        .ps-panel {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 52px 56px;
          max-width: 560px;
        }

        .ps-eyebrow {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 14px;
        }

        .ps-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #fff;
          margin: 0 0 32px;
        }

        .ps-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ps-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s;
          flex-shrink: 0;
        }

        .ps-btn:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.4);
          color: #fff;
        }

        .ps-dots {
          display: flex;
          gap: 6px;
          align-items: center;
          flex: 1;
        }

        .ps-dot {
          height: 1.5px;
          flex: 1;
          background: rgba(255,255,255,0.2);
          border-radius: 1px;
          cursor: pointer;
          transition: background 0.3s;
          border: none;
          padding: 0;
        }

        .ps-dot.active {
          background: #fff;
        }

        .ps-counter {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.35);
          font-variant-numeric: tabular-nums;
          position: absolute;
          top: 52px;
          right: 56px;
        }

        .ps-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1.5px;
          width: 0%;
          background: rgba(255,255,255,0.7);
        }

        @media (max-width: 768px) {
          .ps-wrap { min-height: 100svh; }
          .ps-panel { padding: 36px 28px; max-width: 100%; }
          .ps-counter { top: 36px; right: 28px; }
        }
      `}</style>

      <section
        className="ps-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* IMAGE */}
        <div className="ps-img">
          <AnimatePresence custom={dir} mode="sync">
            <motion.div
              key={p.id}
              custom={dir}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, ease: EASE_SLIDE }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Link to={`/projects/${p.slug}`} style={{ display: "block", width: "100%", height: "100%" }}>
                <img
                  src={p.image}
                  alt={p.category}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${p.id}/1600/900`;
                  }}
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* GRADIENT */}
        <div className="ps-gradient" />

        {/* COUNTER */}
        <div className="ps-counter">
          {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
        </div>

        {/* PANEL */}
        <div className="ps-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={`ey-${p.id}`}
              className="ps-eyebrow"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: EASE_TEXT }}
            >
              {p.category} · {p.location} · {p.year}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`t-${p.id}`}
              className="ps-title font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: EASE_TEXT }}
            >
              {p.title}
            </motion.h2>
          </AnimatePresence>

          <div className="ps-row">
            <button className="ps-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft />
            </button>

            <div className="ps-dots">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  className={`ps-dot${i === index ? " active" : ""}`}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="ps-btn" onClick={next} aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div ref={barRef} className="ps-progress-bar" />
      </section>
    </>
  );
}