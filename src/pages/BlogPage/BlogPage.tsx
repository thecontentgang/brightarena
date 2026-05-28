"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredBlog = {
  title: "How Luxury Interiors Transform Everyday Living",
  category: "Interior Design",
  image:
    "https://images.unsplash.com/photo-1616594039964-5c8b8f1c93cb?q=80&w=1600&auto=format&fit=crop",
  description:
    "Discover how thoughtfully designed interiors elevate comfort, functionality, and lifestyle while creating timeless living experiences.",
  slug: "luxury-interiors-transform-living",
};

const blogs = [
  {
    title: "Top Interior Design Trends for Modern Homes",
    category: "Design Trends",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600&auto=format&fit=crop",
    slug: "modern-home-interior-trends",
  },

  {
    title: "Creating Elegant Office Spaces for Productivity",
    category: "Office Interiors",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    slug: "elegant-office-space-design",
  },

  {
    title: "Minimal Luxury: The Art of Clean Interiors",
    category: "Luxury Interiors",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    slug: "minimal-luxury-interiors",
  },

  {
    title: "Why 3D Interior Visualization Matters",
    category: "3D Design",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
    slug: "3d-interior-visualization",
  },

  {
    title: "Luxury Villa Interiors with Timeless Aesthetics",
    category: "Villa Interiors",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
    slug: "luxury-villa-interiors",
  },

  {
    title: "Commercial Interiors That Elevate Brand Identity",
    category: "Commercial Design",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1600&auto=format&fit=crop",
    slug: "commercial-brand-interiors",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#F4EDDB] text-[#3A393F] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center border-b border-[#3A393F]/10">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-32 w-full">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl"
          >

            <span
              className="
                uppercase
                tracking-[0.28em]
                text-[10px]
                md:text-[11px]
                text-[#3A393F]/50
              "
            >
              Bright Arena Journal
            </span>

            <h1
              className="
                mt-8
                font-heading
                text-[4rem]
                sm:text-[5rem]
                md:text-[7rem]
                lg:text-[9rem]
                leading-[0.86]
                tracking-[-0.08em]
                text-[#3A393F]
              "
            >
              Stories,
              <br />
              ideas &
              <br />
              inspiration
            </h1>

            <p
              className="
                mt-10
                max-w-3xl
                text-[15px]
                md:text-[18px]
                leading-[2]
                text-[#3A393F]/70
              "
            >
              Explore luxury interiors, architecture insights,
              modern living concepts, and design inspirations
              curated by Bright Arena Interiors.
            </p>

          </motion.div>

        </div>

      </section>

      {/* FEATURED BLOG */}
      <section className="py-24 md:py-32 lg:py-40">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-16">

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[10px]
                text-[#3A393F]/50
              "
            >
              Featured Article
            </span>

          </div>

          <Link to={`/blogs/${featuredBlog.slug}`}>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-12
                lg:gap-20
                items-center
                group
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden bg-[#3A393F]">

                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="
                    w-full
                    h-[450px]
                    md:h-[650px]
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                />

              </div>

              {/* CONTENT */}
              <div>

                <div
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    text-[#3A393F]/50
                    mb-6
                  "
                >
                  {featuredBlog.category}
                </div>

                <h2
                  className="
                    font-heading
                    text-[3rem]
                    md:text-[4.5rem]
                    lg:text-[5.5rem]
                    leading-[0.9]
                    tracking-[-0.06em]
                  "
                >
                  {featuredBlog.title}
                </h2>

                <p
                  className="
                    mt-8
                    text-[16px]
                    md:text-[18px]
                    leading-[2]
                    text-[#3A393F]/70
                    max-w-2xl
                  "
                >
                  {featuredBlog.description}
                </p>

                <div
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-4
                    uppercase
                    tracking-[0.22em]
                    text-[10px]
                  "
                >

                  Read Article

                  <span
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-[#3A393F]/15
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:bg-[#3A393F]
                      group-hover:text-[#F4EDDB]
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>

                </div>

              </div>

            </motion.div>

          </Link>

        </div>

      </section>

      {/* BLOG GRID */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-16">

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[10px]
                text-[#3A393F]/50
              "
            >
              Latest Articles
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (
              <Link
                to={`/blogs/${blog.slug}`}
                key={blog.slug}
              >

                <motion.article
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    cursor-pointer
                  "
                >

                  {/* IMAGE */}
                  <div className="overflow-hidden bg-[#3A393F]">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="
                        w-full
                        aspect-[4/5]
                        object-cover
                        transition-transform
                        duration-1000
                        group-hover:scale-105
                      "
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="pt-8">

                    <div
                      className="
                        uppercase
                        tracking-[0.25em]
                        text-[10px]
                        text-[#3A393F]/50
                        mb-5
                      "
                    >
                      {blog.category}
                    </div>

                    <h3
                      className="
                        font-heading
                        text-[2rem]
                        md:text-[2.6rem]
                        leading-[0.95]
                        tracking-[-0.05em]
                        max-w-xl
                      "
                    >
                      {blog.title}
                    </h3>

                    <div
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        uppercase
                        tracking-[0.2em]
                        text-[10px]
                      "
                    >

                      Read More

                      <span
                        className="
                          w-10
                          h-10
                          rounded-full
                          border
                          border-[#3A393F]/15
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-500
                          group-hover:bg-[#3A393F]
                          group-hover:text-[#F4EDDB]
                        "
                      >
                        <ArrowUpRight size={15} />
                      </span>

                    </div>

                  </div>

                </motion.article>

              </Link>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}