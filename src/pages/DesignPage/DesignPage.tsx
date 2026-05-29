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
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: index * 0.1, ease: EASE }}
        viewport={{ once: true, margin: "-60px" }}
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden bg-[#3A393F]">

          {/* parallax image */}
          <motion.img
            src={design.coverImage}
            alt={design.title}
            className="w-full aspect-[4/5] object-cover"
            style={{ y: imgY, scale: 1.08 }}
            whileHover={{ scale: 1.12, transition: { duration: 0.9 } }}
          />

          {/* cover overlay wipes down on scroll */}
          <motion.div
            className="absolute inset-0 bg-[#F4EDDB]"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            transition={{ duration: 1.1, delay: index * 0.1, ease: EASE }}
            viewport={{ once: true, margin: "-60px" }}
          />

        </div>

        {/* CONTENT */}
        <div className="pt-8">

          {/* category */}
          <motion.div
            className="uppercase tracking-[0.25em] font-heading text-[2.5rem] text-[#3A393F]/50 mb-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: EASE }}
            viewport={{ once: true }}
          >
            {design.category}
          </motion.div>

          {/* title — word by word */}
          <h2 className="font-heading text-[2.4rem] md:text-[3.6rem] leading-[0.92] tracking-[-0.05em]">
            {design.title.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block overflow-hidden pb-1 mr-[0.2em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.75, delay: index * 0.1 + 0.25 + wi * 0.07, ease: EASE }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* description */}
          <motion.p
            className="mt-6 text-[15px] md:text-[17px] leading-[2] text-[#3A393F]/70 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 + 0.38, ease: EASE }}
            viewport={{ once: true }}
          >
            {design.description}
          </motion.p>

          {/* cta */}
          <motion.div
            className="mt-8 inline-flex items-center gap-4 uppercase tracking-[0.22em] text-[10px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.46, ease: EASE }}
            viewport={{ once: true }}
          >
            Explore Design
            <span className="w-11 h-11 rounded-full border border-[#3A393F]/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[#3A393F] group-hover:text-[#F4EDDB]">
              <ArrowUpRight size={15} />
            </span>
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
      <section className="relative min-h-[85vh] flex items-center">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16 py-28 w-full">
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
            <h1 className="mt-8 font-heading text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.92] tracking-[-0.08em]">
              {HEADING_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-2">
                  <motion.span
                    className="block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.1 + i * 0.12, ease: EASE }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* divider */}
            <motion.div
              className="mt-10 h-px bg-[#3A393F]/15"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
            />

            {/* description */}
            <motion.p
              className="mt-10 max-w-3xl text-[15px] md:text-[18px] leading-[2] text-[#3A393F]/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            >
              Explore curated luxury interior concepts, premium modern aesthetics,
              and timeless design inspirations crafted for elegant living spaces.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {designsData.map((design, index) => (
              <DesignCard key={design.id} design={design} index={index} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}