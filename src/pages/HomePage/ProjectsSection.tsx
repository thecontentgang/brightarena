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
    <section
      className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-[#111] font-inherit"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* IMAGE */}
      <div className="absolute inset-0">
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
            <Link to={`/projects/${p.slug}`} className="block w-full h-full">
              <img
                src={p.image}
                alt={p.category}
                className="w-full h-full object-cover block"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${p.id}/1600/900`;
                }}
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.30)_60%,transparent_100%)]" />

      {/* COUNTER */}
      <div className="absolute top-[36px] right-[28px] md:top-[52px] md:right-[56px] text-[10px] tracking-[0.18em] text-white/35 tabular-nums z-10">
        {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
      </div>

      {/* PANEL */}
      <div className="absolute inset-0 flex flex-col justify-end p-[36px_28px] md:p-[52px_56px] w-full max-w-full md:max-w-[560px] z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`ey-${p.id}`}
            className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-[14px]"
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
            className="text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.05] tracking-[-0.04em] text-white mb-8 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: EASE_TEXT }}
          >
            {p.title}
          </motion.h2>
        </AnimatePresence>

        <div className="flex items-center gap-3">
          <button 
            className="w-[38px] h-[38px] rounded-full border border-white/20 bg-white/5 text-white/70 flex items-center justify-center cursor-pointer transition-colors duration-250 shrink-0 hover:bg-white/15 hover:border-white/40 hover:text-white" 
            onClick={prev} 
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          <div className="flex items-center gap-[6px] flex-1">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                className={`h-[1.5px] flex-1 rounded-[1px] cursor-pointer transition-colors duration-300 border-none p-0 ${
                  i === index ? "bg-white" : "bg-white/20"
                }`}
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button 
            className="w-[38px] h-[38px] rounded-full border border-white/20 bg-white/5 text-white/70 flex items-center justify-center cursor-pointer transition-colors duration-250 shrink-0 hover:bg-white/15 hover:border-white/40 hover:text-white" 
            onClick={next} 
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div ref={barRef} className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white/70 z-10" />
    </section>
  );
}