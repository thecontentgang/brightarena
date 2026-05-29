import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADING_LINES = [
  "Beautiful interiors",
  "for every",
  "modern space",
];

export default function ProjectsHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <div className="w-full flex flex-col">

      {/* ── SECTION 1: Hero Text ── */}
      <section className="w-full min-h-[65vh] flex items-center bg-[#3A393F] px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto">
          <div className="max-w-4xl">

            {/* each line clips up from below */}
            <h1 className="font-heading text-[#F4EDDB] text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] leading-[1.05] tracking-tight uppercase mb-10">
              {HEADING_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1 + i * 0.12,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* body copy fades up after heading */}
            <motion.p
              className="font-body text-white/90 text-sm md:text-base leading-[1.8] max-w-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            >
              We create stylish and comfortable interiors with premium materials,
              modern designs, and elegant finishes that bring beauty and luxury
              to every corner of your space.
            </motion.p>

            {/* thin divider line grows in */}
            <motion.div
              className="mt-10 h-px bg-white/20"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.7, ease: EASE }}
            />

          </div>
        </div>
      </section>

     {/* ── SECTION 2: Full-Screen Image ── */}
<section
  ref={imgRef}
  className="w-full h-[50vh] md:h-screen relative overflow-hidden bg-[#35423E]"
>
  {/* parallax wrapper — no clip, just scale+y */}
  <motion.div
    className="absolute inset-0"
    style={{ y: imgY, scale: imgScale }}
  >
    <img
      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
      alt="Luxurious modern living space"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* reveal overlay — starts covering the image, animates away */}
  <motion.div
    className="absolute inset-0 bg-[#35423E] origin-top"
    initial={{ scaleY: 1 }}
    whileInView={{ scaleY: 0 }}
    transition={{ duration: 1.2, ease: EASE }}
    viewport={{ once: true, margin: "-80px" }}
    style={{ transformOrigin: "top" }}
  />

  {/* top fade overlay */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#35423E] to-transparent opacity-80 pointer-events-none" />

  {/* bottom caption */}
  <motion.div
    className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
    viewport={{ once: true }}
  >
    <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">
      Bright Arena Interiors
    </p>
  </motion.div>

</section>

    </div>
  );
}