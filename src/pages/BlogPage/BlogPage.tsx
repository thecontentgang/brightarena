"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADING_LINES = ["Stories,", "ideas &", "inspiration"];

const featuredBlog = {
  title: "How Luxury Interiors Transform Everyday Living",
  category: "Interior Design",
  image: "https://images.unsplash.com/photo-1616594039964-5c8b8f1c93cb?q=80&w=1600&auto=format&fit=crop",
  description: "Discover how thoughtfully designed interiors elevate comfort, functionality, and lifestyle while creating timeless living experiences.",
  slug: "luxury-interiors-transform-living",
};

const blogs = [
  { title: "Top Interior Design Trends for Modern Homes",       category: "Design Trends",     image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600&auto=format&fit=crop", slug: "modern-home-interior-trends" },
  { title: "Creating Elegant Office Spaces for Productivity",   category: "Office Interiors",  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop", slug: "elegant-office-space-design" },
  { title: "Minimal Luxury: The Art of Clean Interiors",        category: "Luxury Interiors",  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop", slug: "minimal-luxury-interiors" },
  { title: "Why 3D Interior Visualization Matters",             category: "3D Design",         image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop", slug: "3d-interior-visualization" },
  { title: "Luxury Villa Interiors with Timeless Aesthetics",   category: "Villa Interiors",   image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop", slug: "luxury-villa-interiors" },
  { title: "Commercial Interiors That Elevate Brand Identity",  category: "Commercial Design", image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1600&auto=format&fit=crop", slug: "commercial-brand-interiors" },
];

// ── Blog grid card ────────────────────────────────────────────────────────────
function BlogCard({ blog, index }: { blog: typeof blogs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <Link to={`/blogs/${blog.slug}`}>
      <motion.article
        ref={ref}
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: index * 0.09, ease: EASE }}
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-[#3A393F]">
          <motion.img
            src={blog.image}
            alt={blog.title}
            className="w-full aspect-[4/5] object-cover"
            style={{ y: imgY, scale: 1.08 }}
            whileHover={{ scale: 1.12, transition: { duration: 0.9 } }}
          />
          {/* cover overlay */}
          <motion.div
            className="absolute inset-0 bg-[#F4EDDB]"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            transition={{ duration: 1.1, delay: index * 0.09, ease: EASE }}
            viewport={{ once: true, margin: "-60px" }}
          />
        </div>

        {/* CONTENT */}
        <div className="pt-8">
          <motion.div
            className="uppercase tracking-[0.25em] text-[10px] text-[#3A393F]/50 mb-5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.09 + 0.2, ease: EASE }}
            viewport={{ once: true }}
          >
            {blog.category}
          </motion.div>

          <h3 className="font-heading text-[2rem] md:text-[2.6rem] leading-[0.95] tracking-[-0.05em] max-w-xl">
            {blog.title.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block overflow-hidden pb-1 mr-[0.18em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.09 + 0.25 + wi * 0.06, ease: EASE }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h3>

          <motion.div
            className="mt-8 inline-flex items-center gap-3 uppercase tracking-[0.2em] text-[10px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.09 + 0.4, ease: EASE }}
            viewport={{ once: true }}
          >
            Read More
            <span className="w-10 h-10 rounded-full border border-[#3A393F]/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[#3A393F] group-hover:text-[#F4EDDB]">
              <ArrowUpRight size={15} />
            </span>
          </motion.div>
        </div>
      </motion.article>
    </Link>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const featuredImgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: featuredScroll } = useScroll({
    target: featuredImgRef,
    offset: ["start end", "end start"],
  });
  const featuredImgY = useTransform(featuredScroll, [0, 1], ["0%", "10%"]);

  return (
    <main className="bg-[#F4EDDB] text-[#3A393F] overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center border-b border-[#3A393F]/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-32 w-full">
          <div className="max-w-6xl">

            <motion.span
              className="uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[#3A393F]/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              Bright Arena Journal
            </motion.span>

            <h1 className="mt-8 font-heading text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.92] tracking-[-0.08em] text-[#3A393F]">
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

            <motion.div
              className="mt-10 h-px bg-[#3A393F]/15"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
            />

            <motion.p
              className="mt-10 max-w-3xl text-[15px] md:text-[18px] leading-[2] text-[#3A393F]/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            >
              Explore luxury interiors, architecture insights, modern living concepts,
              and design inspirations curated by Bright Arena Interiors.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-16">
            <motion.span
              className="uppercase tracking-[0.25em] text-[10px] text-[#3A393F]/50"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true }}
            >
              Featured Article
            </motion.span>
          </div>

          <Link to={`/blogs/${featuredBlog.slug}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center group">

              {/* IMAGE */}
              <div ref={featuredImgRef} className="relative overflow-hidden bg-[#3A393F]">
                <motion.img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-[450px] md:h-[650px] object-cover"
                  style={{ y: featuredImgY, scale: 1.08 }}
                  whileHover={{ scale: 1.12, transition: { duration: 0.9 } }}
                />
                {/* cover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#F4EDDB]"
                  style={{ transformOrigin: "top" }}
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  transition={{ duration: 1.2, ease: EASE }}
                  viewport={{ once: true, margin: "-80px" }}
                />
              </div>

              {/* CONTENT */}
              <div>
                <motion.div
                  className="uppercase tracking-[0.25em] text-[10px] text-[#3A393F]/50 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                  viewport={{ once: true }}
                >
                  {featuredBlog.category}
                </motion.div>

                <h2 className="font-heading text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[0.9] tracking-[-0.06em]">
                  {featuredBlog.title.split(" ").map((word, wi) => (
                    <span key={wi} className="inline-block overflow-hidden pb-1 mr-[0.2em]">
                      <motion.span
                        className="block"
                        initial={{ y: "110%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 + wi * 0.07, ease: EASE }}
                        viewport={{ once: true }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h2>

                <motion.p
                  className="mt-8 text-[16px] md:text-[18px] leading-[2] text-[#3A393F]/70 max-w-2xl"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                  viewport={{ once: true }}
                >
                  {featuredBlog.description}
                </motion.p>

                <motion.div
                  className="mt-10 inline-flex items-center gap-4 uppercase tracking-[0.22em] text-[10px]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                  viewport={{ once: true }}
                >
                  Read Article
                  <span className="w-11 h-11 rounded-full border border-[#3A393F]/15 flex items-center justify-center transition-all duration-500 group-hover:bg-[#3A393F] group-hover:text-[#F4EDDB]">
                    <ArrowUpRight size={16} />
                  </span>
                </motion.div>

              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-16">
            <motion.span
              className="uppercase tracking-[0.25em] text-[10px] text-[#3A393F]/50"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true }}
            >
              Latest Articles
            </motion.span>

            <motion.div
              className="mt-6 h-px bg-[#3A393F]/15"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: EASE }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}