import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { designsData } from "./designData";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADING_LINES = ["Interior", "design", "inspirations"];

function DesignCard({ design, index }: { design: typeof designsData[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <Link to={`/designs/${design.slug}`}>
      <motion.article
        ref={ref}
        className="group cursor-pointer flex flex-col"
        initial={{ opacity: 0, y: 40 }} // Reduced travel distance for slicker animation
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.05, ease: EASE }} // Faster delays
        viewport={{ once: true, margin: "-40px" }}
      >

        {/* IMAGE — Swapped aspect ratio to feel wide and compact rather than tall */}
        <div className="relative overflow-hidden bg-[#3A393F] aspect-[16/10] sm:aspect-[3/2]">

          {/* parallax image */}
          <motion.img
            src={design.coverImage}
            alt={design.title}
            className="w-full h-full object-cover"
            style={{ y: imgY, scale: 1.05 }}
            whileHover={{ scale: 1.08, transition: { duration: 0.6 } }}
          />

          {/* cover overlay wipes down on scroll */}
          <motion.div
            className="absolute inset-0 bg-[#F4EDDB]"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            transition={{ duration: 0.9, delay: index * 0.05, ease: EASE }}
            viewport={{ once: true, margin: "-40px" }}
          />

        </div>

        {/* CONTENT — Drastically reduced internal padding and spacing */}
        <div className="pt-4 flex flex-col flex-grow">

          {/* category — Downscaled from huge text to a minimal elegant label */}
          <motion.div
            className="uppercase tracking-[0.2em] font-medium text-[11px] text-[#3A393F]/50 mb-1.5"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 + 0.1, ease: EASE }}
            viewport={{ once: true }}
          >
            {design.category}
          </motion.div>

          {/* title — Compact font sizing */}
          <h2 className="font-heading text-xl md:text-2xl font-light leading-tight tracking-tight text-[#3A393F]">
            {design.title.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block overflow-hidden mr-[0.18em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 + 0.15 + wi * 0.04, ease: EASE }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* description — Reduced margin, text size, and line height */}
          <motion.p
            className="mt-2 text-xs md:text-sm leading-relaxed text-[#3A393F]/70 max-w-xl line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 + 0.22, ease: EASE }}
            viewport={{ once: true }}
          >
            {design.description}
          </motion.p>

          {/* cta — Swapped for a clean arrow trigger that aligns perfectly */}
          <motion.div
            className="mt-3 flex items-center gap-2 uppercase tracking-[0.18em] text-[9px] font-medium text-[#3A393F]/80 group-hover:text-[#3A393F]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 + 0.3 }}
            viewport={{ once: true }}
          >
            <span>Explore Design</span>
            <ArrowUpRight size={12} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.div>

        </div>
      </motion.article>
    </Link>
  );
}

export default function DesignsPage() {
  return (
    <main className="bg-[#F4EDDB] text-[#3A393F] overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16 py-20 w-full">
          <div className="max-w-6xl">

            {/* label */}
            <motion.span
              className="uppercase tracking-[0.28em] text-[10px] text-[#3A393F]/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              Bright Arena Designs
            </motion.span>

            {/* heading — line by line clip reveal */}
            <h1 className="mt-6 font-heading text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.95] tracking-[-0.06em]">
              {HEADING_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: EASE }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* divider */}
            <motion.div
              className="mt-8 h-px bg-[#3A393F]/15"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
            />

            {/* description */}
            <motion.p
              className="mt-8 max-w-2xl text-sm md:text-base leading-relaxed text-[#3A393F]/70"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            >
              Explore curated luxury interior concepts, premium modern aesthetics,
              and timeless design inspirations crafted for elegant living spaces.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      {/* Changed layout option: You can increase to grid-cols-3 if you want them even smaller side-by-side */}
      <section className="pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {designsData.map((design, index) => (
              <DesignCard key={design.id} design={design} index={index} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}