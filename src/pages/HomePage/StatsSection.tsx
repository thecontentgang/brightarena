import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import BrightLogo from "/bright-logo.webp";

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
    text: "Transcendent design. Bright Arena didn't just design a house — they crafted a symphony of light and space.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael L.",
    text: "Precision executed perfectly. Minimal noise, maximum impact. Truly unparalleled luxury.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Elena V.",
    text: "They minimize structural noise to let materiality tell a perfectly balanced story.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const clientLogos = [
  BrightLogo, BrightLogo, BrightLogo, BrightLogo,
  BrightLogo, BrightLogo, BrightLogo, BrightLogo,
];

// ─── LAYOUT CONSTANTS ────────────────────────────────────────────────────────
const GUTTER = "px-8 sm:px-14 lg:px-24 xl:px-32 2xl:px-40";
const MAX_W = "max-w-[1400px]";

// ─── COMPONENT ────────────────────────────────────────────────────────────────

const StatsSection = () => {
  // Desktop refs
  const desktopRef = useRef<HTMLDivElement>(null);
  const projectCountRef = useRef<HTMLSpanElement>(null);
  const retentionCountRef = useRef<HTMLSpanElement>(null);

  // Mobile refs
  const mobileRef = useRef<HTMLDivElement>(null);
  const mProjectCountRef = useRef<HTMLSpanElement>(null);
  const mRetentionCountRef = useRef<HTMLSpanElement>(null);

  // ── MOBILE GSAP PINNED SCROLL ────────────────────────────────────────────
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mobileRef.current,
          start: "top top",
          end: "+=520%",
          scrub: 1.5,
          pin: true,
        },
      });

      // ── STEP 1: Reading Cushion & Exit ──
      tl.to({}, { duration: 2.0 })
        .to(".m-step-1", {
          opacity: 0, y: -50, filter: "blur(10px)",
          duration: 1, ease: "power2.inOut",
        });

      // ── STEP 2: Enter, Counter, Reading Cushion & Exit ──
      const projectObj = { value: 0 };
      tl.fromTo(".m-step-2",
        { opacity: 0, y: 50, filter: "blur(15px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
      .to(projectObj, {
        value: 180, snap: "value", duration: 1.5, ease: "power1.out",
        onUpdate: () => {
          if (mProjectCountRef.current)
            mProjectCountRef.current.innerText = String(projectObj.value);
        },
      }, "-=0.5")
      .to({}, { duration: 2.0 })
      .to(".m-step-2", {
        opacity: 0, y: -50, filter: "blur(10px)",
        duration: 1, ease: "power2.inOut",
      });

      // ── STEP 3: Enter, Cascading Reviews, Reading Cushion & Exit ──
      tl.fromTo(".m-step-3",
        { opacity: 0, y: 50, filter: "blur(15px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
      .fromTo(".m-review-card-item",
        { opacity: 0, y: 80, rotate: -8 },
        {
          opacity: 1, y: 0,
          rotate: (i: number) => (i - 1) * 5,
          stagger: 0.2, duration: 1, ease: "power4.out",
        }, "-=0.5"
      )
      .to({}, { duration: 2.5 })
      .to(".m-step-3", {
        opacity: 0, y: -50, filter: "blur(10px)",
        duration: 1, ease: "power2.inOut",
      });

      // ── STEP 4: Enter, Retention Counter, Logo Stagger & Final Cushion ──
      const retentionObj = { value: 0 };
      tl.fromTo(".m-step-4",
        { opacity: 0, y: 50, filter: "blur(15px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
      .to(retentionObj, {
        value: 98, snap: "value", duration: 1.5, ease: "power1.out",
        onUpdate: () => {
          if (mRetentionCountRef.current)
            mRetentionCountRef.current.innerText = String(retentionObj.value);
        },
      }, "-=0.5")
      .to(".m-client-logo-box", {
        opacity: 1, scale: 1, filter: "grayscale(0%)",
        stagger: { each: 0.12, from: "center" },
        duration: 0.8, ease: "power2.out",
      }, "<+=0.2")
      .to({}, { duration: 2.0 });

    }, mobileRef);

    return () => ctx.revert();
  }, []);

  // ── DESKTOP GSAP PINNED SCROLL ───────────────────────────────────────────
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: desktopRef.current,
          start: "top top",
          end: "+=520%",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to({}, { duration: 2.0 })
        .to(".d-step-1", {
          opacity: 0, y: -50, filter: "blur(10px)",
          duration: 1, ease: "power2.inOut",
        });

      const projectObj = { value: 0 };
      tl.fromTo(".d-step-2",
        { opacity: 0, y: 50, filter: "blur(15px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
      .to(projectObj, {
        value: 180, snap: "value", duration: 1.5, ease: "power1.out",
        onUpdate: () => {
          if (projectCountRef.current)
            projectCountRef.current.innerText = String(projectObj.value);
        },
      }, "-=0.5")
      .to({}, { duration: 2.0 })
      .to(".d-step-2", {
        opacity: 0, y: -50, filter: "blur(10px)",
        duration: 1, ease: "power2.inOut",
      });

      tl.fromTo(".d-step-3",
        { opacity: 0, y: 50, filter: "blur(15px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
      .fromTo(".review-card-item",
        { opacity: 0, y: 80, rotate: -8 },
        {
          opacity: 1, y: 0,
          rotate: (i: number) => (i - 1) * 5,
          stagger: 0.2, duration: 1, ease: "power4.out",
        }, "-=0.5"
      )
      .to({}, { duration: 2.5 })
      .to(".d-step-3", {
        opacity: 0, y: -50, filter: "blur(10px)",
        duration: 1, ease: "power2.inOut",
      });

      const retentionObj = { value: 0 };
      tl.fromTo(".d-step-4",
        { opacity: 0, y: 50, filter: "blur(15px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
      .to(retentionObj, {
        value: 98, snap: "value", duration: 1.5, ease: "power1.out",
        onUpdate: () => {
          if (retentionCountRef.current)
            retentionCountRef.current.innerText = String(retentionObj.value);
        },
      }, "-=0.5")
      .to(".client-logo-box", {
        opacity: 1, scale: 1, filter: "grayscale(0%)",
        stagger: { each: 0.12, from: "center" },
        duration: 0.8, ease: "power2.out",
      }, "<+=0.2")
      .to({}, { duration: 2.0 });

    }, desktopRef);

    return () => ctx.revert();
  }, []);

  // Shared card wrapper styles
  const cardBase =
    "absolute inset-0 flex items-center justify-center will-change-transform w-full h-full z-20 pointer-events-auto";

  // Desktop card inner
  const cardInner =
    "w-full max-w-[640px] flex flex-col gap-6 bg-[var(--color-background)] p-4";

  // Mobile card inner — full-width, centered, compact spacing, scrollable if needed
  const mCardInner =
    "w-full flex flex-col items-center gap-5 bg-[var(--color-background)] px-6 py-2 overflow-y-auto max-h-[calc(100svh-40px)] text-center";

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE  (< lg) — GSAP pinned scroll — same logic as desktop
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={mobileRef}
        className="lg:hidden relative w-full h-[100svh] bg-[var(--color-background)] overflow-hidden select-none"
      >
        <div className="h-full w-full relative">

          {/* ─── MOBILE STEP 1: Concept ─── */}
          <div className={`m-step-1 ${cardBase}`}>
            <div className={mCardInner}>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold pt-2">
                01 / Concept
              </span>

              <h2
                className="font-heading text-[1.35rem] sm:text-[1.65rem] leading-[1.35] tracking-tight italic font-light"
                style={{ color: "var(--color-primary, #111111)" }}
              >
                "Design is not the decoration of a space. It is the architectural alignment of light, form, and purpose."
              </h2>

              <div className="w-full aspect-[16/9] overflow-hidden shadow-xl border border-[var(--color-primary)]/10 rounded-[2px]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Luxury Interior Layout"
                  className="w-full h-full object-cover grayscale opacity-95"
                />
              </div>

              <div className="flex flex-col gap-1.5 items-center">
                <h3
                  className="font-heading text-[10px] uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "var(--color-primary, #111111)", opacity: 0.5 }}
                >
                  Who We Are
                </h3>
                <p className="text-[var(--color-primary)]/75 text-sm leading-[1.75] font-light">
                  Bright Arena Interiors functions as an architectural catalyst. We interpret abstract lifestyle ideals into functional layouts, stripping away decorative clutter to let authentic material textures and volumes breathe freely.
                </p>
              </div>
            </div>
          </div>

          {/* ─── MOBILE STEP 2: Scale ─── */}
          <div className={`m-step-2 opacity-0 ${cardBase}`}>
            <div className={mCardInner}>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold pt-2">
                02 / Scale
              </span>

              <div className="flex items-end justify-center leading-none">
                <span
                  ref={mProjectCountRef}
                  className="font-heading text-[5.5rem] sm:text-[7rem] leading-none tracking-tighter"
                  style={{ color: "var(--color-primary, #111111)" }}
                >
                  0
                </span>
                <span className="font-heading text-[2.5rem] text-[var(--color-primary)]/20 font-light pb-2 pl-1">+</span>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <h4
                  className="font-heading text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-primary, #111111)" }}
                >
                  Global Portfolios
                </h4>
                <p className="text-[var(--color-primary)]/55 text-sm leading-[1.75] font-light">
                  Bespoke residential compounds, penthouse structures, and commercial lifestyle headquarters designed with strict geometric intent across major global metropolises.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-1.5 w-full">
                {projectImages.map((src, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden">
                    <img
                      src={src}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-full object-cover brightness-[0.85]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── MOBILE STEP 3: Praise ─── */}
          <div className={`m-step-3 opacity-0 ${cardBase}`}>
            <div className={mCardInner}>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold pt-2">
                03 / Praise
              </span>

              <div className="flex items-end justify-center leading-none gap-2">
                <span
                  className="font-heading text-[5.5rem] sm:text-[7rem] leading-none tracking-tighter"
                  style={{ color: "var(--color-primary, #111111)" }}
                >
                  5.0
                </span>
                <span className="font-heading text-[2.5rem] text-[var(--color-primary)]/20 pb-2">★</span>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <h4
                  className="font-heading text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-primary, #111111)" }}
                >
                  Client Testimonials
                </h4>
                <p className="text-[var(--color-primary)]/55 text-sm leading-[1.75] font-light">
                  An uncompromising standard of spatial engineering validated through consistent corporate and private praise.
                </p>
              </div>

              {/* Stacked review cards — centered */}
              <div className="relative w-full h-[190px] sm:h-[220px]">
                {reviews.map((rev, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, zIndex: 20, y: -4 }}
                    className="m-review-card-item absolute w-[88%] bg-[var(--color-primary)]/[0.05] backdrop-blur-xl border border-[var(--color-primary)]/10 p-3.5 flex flex-col gap-2.5 cursor-pointer shadow-lg"
                    style={{ top: `${idx * 48}px`, left: `${idx * 18}px` }}
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-7 h-7 rounded-full object-cover grayscale border border-[var(--color-primary)]/15"
                      />
                      <div>
                        <span
                          className="font-heading text-[13px] block"
                          style={{ color: "var(--color-primary, #111111)" }}
                        >
                          {rev.name}
                        </span>
                        <span className="text-[var(--color-primary)]/35 text-[9px] tracking-widest block mt-0.5">★★★★★</span>
                      </div>
                    </div>
                    <p className="text-[var(--color-primary)]/70 text-[12px] font-light leading-relaxed">"{rev.text}"</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── MOBILE STEP 4: Trust ─── */}
          <div className={`m-step-4 opacity-0 ${cardBase}`}>
            <div className={mCardInner}>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold pt-2">
                04 / Trust
              </span>

              <div className="flex items-end justify-center leading-none">
                <span
                  ref={mRetentionCountRef}
                  className="font-heading text-[5.5rem] sm:text-[7rem] leading-none tracking-tighter"
                  style={{ color: "var(--color-primary, #111111)" }}
                >
                  0
                </span>
                <span className="font-heading text-[2.5rem] text-[var(--color-primary)]/20 font-light pb-2 pl-0.5">%</span>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <h4
                  className="font-heading text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-primary, #111111)" }}
                >
                  Client Retention
                </h4>
                <p className="text-[var(--color-primary)]/55 text-sm leading-[1.75] font-light">
                  Long-term relational continuity built on premium performance. Our clients trust our architectural methodology over years of scale development.
                </p>
              </div>

              <div className="w-full flex flex-col gap-2.5">
                <div className="grid grid-cols-4 gap-3 p-4 sm:p-5 bg-[var(--color-primary)]/[0.03] border border-[var(--color-primary)]/8">
                  {clientLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="m-client-logo-box aspect-[3/2] flex items-center justify-center opacity-10 scale-95 grayscale"
                    >
                      <img
                        src={logo}
                        alt="Client Logo"
                        className="max-w-[75%] max-h-5 object-contain invert opacity-40 mix-blend-difference"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[var(--color-primary)]/30 text-[9px] uppercase tracking-[0.25em] text-center font-medium">
                  Trusted partners across 4 continents
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP  (≥ lg)  — GSAP pinned scroll — ALL STEPS: centered card
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={desktopRef}
        className="hidden lg:block relative w-full h-screen bg-[var(--color-background)] overflow-hidden select-none"
      >
        <div className={`${GUTTER} h-full`}>
          <div className={`${MAX_W} mx-auto h-full flex items-center relative`}>

            {/* ─── STEP 1: Concept ─── */}
            <div className={`d-step-1 ${cardBase}`}>
              <div className={cardInner}>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold whitespace-nowrap">
                    01 / Concept
                  </span>
                  <div className="h-px w-full bg-[var(--color-primary)]/10" />
                </div>

                <h2
                  className="font-heading text-[1.75rem] xl:text-[2.1rem] leading-[1.35] tracking-tight italic font-light"
                  style={{ color: "var(--color-primary, #111111)" }}
                >
                  "Design is not the decoration of a space. It is the architectural alignment of light, form, and purpose."
                </h2>

                <div className="w-full aspect-[16/9] overflow-hidden shadow-2xl border border-[var(--color-primary)]/10 rounded-[2px]">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                    alt="Luxury Interior Layout"
                    className="w-full h-full object-cover grayscale opacity-95 transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xs uppercase tracking-[0.2em] font-semibold text-[var(--color-primary)]/50">
                    Who We Are
                  </h3>
                  <p className="text-[var(--color-primary)]/80 text-sm leading-[1.8] font-light tracking-wide">
                    Bright Arena Interiors functions as an architectural catalyst. We interpret abstract lifestyle ideals into functional layouts, stripping away decorative clutter to let authentic material textures and volumes breathe freely.
                  </p>
                </div>
              </div>
            </div>

            {/* ─── STEP 2: Scale ─── */}
            <div className={`d-step-2 opacity-0 ${cardBase}`}>
              <div className={cardInner}>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold whitespace-nowrap">
                    02 / Scale
                  </span>
                  <div className="h-px w-full bg-[var(--color-primary)]/10" />
                </div>

                <div className="flex items-end leading-none">
                  <span
                    ref={projectCountRef}
                    className="font-heading text-[6rem] xl:text-[7rem] leading-none tracking-tighter"
                    style={{ color: "var(--color-primary, #111111)" }}
                  >
                    0
                  </span>
                  <span className="font-heading text-[3rem] xl:text-[3.5rem] text-[var(--color-primary)]/20 font-light pb-2 pl-1">+</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em]" style={{ color: "var(--color-primary, #111111)" }}>
                    Global Portfolios
                  </h4>
                  <p className="text-[var(--color-primary)]/55 text-sm leading-[1.8] font-light">
                    Bespoke residential compounds, penthouse structures, and commercial lifestyle headquarters designed with strict geometric intent across major global metropolises.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {projectImages.map((src, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden">
                      <img src={src} alt={`Project ${idx + 1}`} className="w-full h-full object-cover brightness-[0.85] transition-transform duration-500 hover:scale-110" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── STEP 3: Praise ─── */}
            <div className={`d-step-3 opacity-0 ${cardBase}`}>
              <div className={cardInner}>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold whitespace-nowrap">
                    03 / Praise
                  </span>
                  <div className="h-px w-full bg-[var(--color-primary)]/10" />
                </div>

                <div className="flex items-end leading-none gap-3">
                  <span
                    className="font-heading text-[6rem] xl:text-[7rem] leading-none tracking-tighter"
                    style={{ color: "var(--color-primary, #111111)" }}
                  >
                    5.0
                  </span>
                  <span className="font-heading text-[3rem] xl:text-[3.5rem] text-[var(--color-primary)]/20 pb-2">★</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em]" style={{ color: "var(--color-primary, #111111)" }}>
                    Client Testimonials
                  </h4>
                  <p className="text-[var(--color-primary)]/55 text-sm leading-[1.8] font-light">
                    An uncompromising standard of spatial engineering validated through consistent corporate and private praise.
                  </p>
                </div>

                <div className="relative w-full h-[210px]">
                  {reviews.map((rev, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03, zIndex: 20, y: -6 }}
                      className="review-card-item absolute w-[85%] bg-[var(--color-primary)]/[0.05] backdrop-blur-xl border border-[var(--color-primary)]/10 p-4 flex flex-col gap-3 cursor-pointer shadow-xl"
                      style={{ top: `${idx * 55}px`, left: `${idx * 24}px` }}
                    >
                      <div className="flex items-center gap-3">
                        <img src={rev.avatar} alt={rev.name} className="w-8 h-8 rounded-full object-cover grayscale border border-[var(--color-primary)]/15" />
                        <div>
                          <span className="font-heading text-sm block" style={{ color: "var(--color-primary, #111111)" }}>{rev.name}</span>
                          <span className="text-[var(--color-primary)]/35 text-[10px] tracking-widest block mt-0.5">★★★★★</span>
                        </div>
                      </div>
                      <p className="text-[var(--color-primary)]/70 text-[13px] font-light leading-relaxed">"{rev.text}"</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── STEP 4: Trust ─── */}
            <div className={`d-step-4 opacity-0 ${cardBase}`}>
              <div className={cardInner}>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-primary)]/50 font-bold whitespace-nowrap">
                    04 / Trust
                  </span>
                  <div className="h-px w-full bg-[var(--color-primary)]/10" />
                </div>

                <div className="flex items-end leading-none">
                  <span
                    ref={retentionCountRef}
                    className="font-heading text-[6rem] xl:text-[7rem] leading-none tracking-tighter"
                    style={{ color: "var(--color-primary, #111111)" }}
                  >
                    0
                  </span>
                  <span className="font-heading text-[3rem] xl:text-[3.5rem] text-[var(--color-primary)]/20 font-light pb-2 pl-0.5">%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em]" style={{ color: "var(--color-primary, #111111)" }}>
                    Client Retention
                  </h4>
                  <p className="text-[var(--color-primary)]/55 text-sm leading-[1.8] font-light">
                    Long-term relational continuity built on premium performance. Our clients trust our architectural methodology over years of scale development.
                  </p>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <div className="grid grid-cols-4 gap-4 p-6 bg-[var(--color-primary)]/[0.03] border border-[var(--color-primary)]/8">
                    {clientLogos.map((logo, idx) => (
                      <div key={idx} className="client-logo-box aspect-[3/2] flex items-center justify-center opacity-10 scale-95 grayscale">
                        <img src={logo} alt="Client Logo" className="max-w-[75%] max-h-6 object-contain invert opacity-40 mix-blend-difference" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[var(--color-primary)]/30 text-[10px] uppercase tracking-[0.25em] text-center font-medium">
                    Trusted partners across 4 continents
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;