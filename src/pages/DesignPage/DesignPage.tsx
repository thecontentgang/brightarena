// src/pages/DesignsPage/DesignsPage.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { designsData } from "./designData";
import { ArrowUpRight } from "lucide-react";

export default function DesignsPage() {
  return (
    <main className="bg-[#F4EDDB] text-[#3A393F] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center">

        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16 py-28 w-full">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl"
          >

            <span
              className="
                uppercase
                tracking-[0.28em]
                text-[10px]
                text-[#3A393F]/50
              "
            >
              Bright Arena Designs
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
              "
            >
              Interior
              <br />
              design
              <br />
              inspirations
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
              Explore curated luxury interior concepts,
              premium modern aesthetics, and timeless
              design inspirations crafted for elegant
              living spaces.
            </p>

          </motion.div>

        </div>

      </section>

      {/* DESIGNS GRID */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {designsData.map((design, index) => (
              <Link
                key={design.id}
                to={`/designs/${design.slug}`}
              >

                <motion.article
                  initial={{
                    opacity: 0,
                    y: 60,
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
                  className="group cursor-pointer"
                >

                  {/* IMAGE */}
                  <div className="overflow-hidden bg-[#3A393F]">

                    <img
                      src={design.coverImage}
                      alt={design.title}
                      className="
                        w-full
                        aspect-[4/5]
                        object-cover
                        transition-transform
                        duration-[1400ms]
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
                      {design.category}
                    </div>

                    <h2
                      className="
                        font-heading
                        text-[2.4rem]
                        md:text-[3.6rem]
                        leading-[0.92]
                        tracking-[-0.05em]
                      "
                    >
                      {design.title}
                    </h2>

                    <p
                      className="
                        mt-6
                        text-[15px]
                        md:text-[17px]
                        leading-[2]
                        text-[#3A393F]/70
                        max-w-2xl
                      "
                    >
                      {design.description}
                    </p>

                    <div
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-4
                        uppercase
                        tracking-[0.22em]
                        text-[10px]
                      "
                    >

                      Explore Design

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