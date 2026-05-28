"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { projectsData } from "../ProjectsPage/ProjectsData";

// ─── Icons ─────────────────────────────────────────────────────────────────

const ChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={16}
    height={16}
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={16}
    height={16}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

// ─── DATA ──────────────────────────────────────────────────────────────────

const PROJECTS = projectsData.map((project) => ({
  id: project.id,
  headline: project.shortDescription,
  image: project.heroImage,
  brand: "Bright Arena Interiors",
  year: project.year,
  category: project.houseType,
  location: project.location,
  slug: project.slug,
}));

// ─── CONFIG ────────────────────────────────────────────────────────────────

const AUTOPLAY_DURATION = 6000;

type Dir = 1 | -1;

const EASE_SLIDE: Transition["ease"] = [0.76, 0, 0.24, 1];

const EASE_TEXT: Transition["ease"] = [0.22, 1, 0.36, 1];

const imgVariants = {
  enter: (d: Dir) => ({
    x: d > 0 ? "100%" : "-100%",
  }),

  center: {
    x: "0%",
  },

  exit: (d: Dir) => ({
    x: d > 0 ? "-100%" : "100%",
  }),
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────

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

  const next = useCallback(
    () => go((index + 1) % PROJECTS.length, 1),
    [index, go]
  );

  const prev = useCallback(
    () => go((index - 1 + PROJECTS.length) % PROJECTS.length, -1),
    [index, go]
  );

  useEffect(() => {
    if (paused) {
      tweenRef.current?.pause();

      return;
    }

    progressRef.current.val = 0;

    tweenRef.current?.kill();

    tweenRef.current = gsap.to(progressRef.current, {
      val: 100,
      duration: AUTOPLAY_DURATION / 1000,
      ease: "none",

      onUpdate: () => {
        if (barRef.current) {
          barRef.current.style.width = `${progressRef.current.val}%`;
        }
      },

      onComplete: () => next(),
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [index, paused, next]);

  const p = PROJECTS[index];

  return (
    <>
     <style>{`
  .ps-wrap {
    display: flex;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: #3A393F;
  }

  .ps-info {
    width: 36%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 54px 52px 42px;
    background: #F4EDDB;
    color: #3A393F;
    position: relative;
    z-index: 20;
  }

  .ps-img {
    flex: 1;
    position: relative;
    overflow: hidden;
    background: #3A393F;
  }

  .ps-headline {
    font-family: var(--font-heading);
    font-weight: 300;
    font-size: clamp(2rem, 2.8vw, 3.3rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
    margin: 0;
    max-width: 580px;
  }

  .ps-btn {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid rgba(58,57,63,0.18);
    background: transparent;
    color: #3A393F;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.35s ease;
  }

  .ps-btn:hover {
    background: #3A393F;
    color: #F4EDDB;
  }

  .ps-label {
    font-size: 9px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    opacity: 0.5;
  }

  .ps-accent-label {
    font-size: 9px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #5B5962;
  }

  .ps-progress-track {
    height: 1px;
    background: rgba(58,57,63,0.12);
    margin-bottom: 28px;
    position: relative;
  }

  .ps-progress-fill {
    position: absolute;
    inset: 0 auto 0 0;
    width: 0;
    background: #3A393F;
  }

  .ps-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
  }

  .ps-image:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1200px) {
    .ps-info {
      width: 42%;
      padding: 46px 40px 36px;
    }
  }

  @media (max-width: 768px) {
    .ps-wrap {
      flex-direction: column-reverse;
      min-height: auto;
      background: #F4EDDB;
    }

    .ps-info {
      width: 100%;
      padding: 34px 24px 28px;
      gap: 48px;
    }

    .ps-img {
      width: 100%;
      height: 52vh;
      background: #3A393F;
    }

    .ps-headline {
      font-size: clamp(2rem, 8vw, 3rem);
      line-height: 1;
    }
  }
`}</style>

      <section
        className="ps-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* ───────────────── LEFT PANEL ───────────────── */}
        <div className="ps-info">

          {/* TOP */}
          <div>

            <div className="ps-label mb-4">
              {String(index + 1).padStart(2, "0")} —{" "}
              {String(PROJECTS.length).padStart(2, "0")}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`cat-${p.id}`}
                className="ps-accent-label"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.35,
                  ease: EASE_TEXT,
                }}
              >
                {p.category} · {p.location}
              </motion.div>
            </AnimatePresence>

          </div>

          {/* HEADLINE */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`h-${p.id}`}
              className="ps-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{
                duration: 0.65,
                ease: EASE_TEXT,
              }}
            >
              {p.headline}
            </motion.h2>
          </AnimatePresence>

          {/* BOTTOM */}
          <div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`brand-${p.id}`}
                className="ps-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: EASE_TEXT,
                }}
                style={{
                  marginBottom: 28,
                  letterSpacing: "0.3em",
                }}
              >
                {p.brand} · {p.year}
              </motion.div>
            </AnimatePresence>

            {/* PROGRESS */}
            <div className="ps-progress-track">
              <div
                ref={barRef}
                className="ps-progress-fill"
              />
            </div>

            {/* NAV */}
            <div className="flex items-center gap-3">

              <button
                className="ps-btn"
                onClick={prev}
                aria-label="Previous"
              >
                <ChevronLeft />
              </button>

              {/* DOTS */}
              <div className="flex items-center gap-2 flex-1">

                {PROJECTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      go(i, i > index ? 1 : -1)
                    }
                    className="flex-1"
                  >
                    <motion.span
                      animate={{
                        opacity: i === index ? 1 : 0.18,
                        backgroundColor:
                          i === index
                            ? "#3A393F"
                            : "#CFC5B1",
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        block
                        h-[1px]
                        w-full
                      "
                    />
                  </button>
                ))}

              </div>

              <button
                className="ps-btn"
                onClick={next}
                aria-label="Next"
              >
                <ChevronRight />
              </button>

            </div>

          </div>
        </div>

        {/* ───────────────── IMAGE PANEL ───────────────── */}
        <div className="ps-img">

          <AnimatePresence custom={dir} mode="sync">

            <motion.div
              key={p.id}
              custom={dir}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 1,
                ease: EASE_SLIDE,
              }}
              style={{
                position: "absolute",
                inset: 0,
              }}
            >

              <Link to={`/projects/${p.slug}`}>

                <img
                  src={p.image}
                  alt={p.category}
                  className="ps-image"
                />

              </Link>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>
    </>
  );
}