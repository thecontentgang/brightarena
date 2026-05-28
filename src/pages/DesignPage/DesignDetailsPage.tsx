// src/pages/DesignDetailsPage/DesignDetailsPage.tsx

import { useParams } from "react-router-dom";
import { designsData } from "./designData";
import { motion } from "framer-motion";

export default function DesignDetailsPage() {
  const { slug } = useParams();

  const design = designsData.find(
    (item) => item.slug === slug
  );

  if (!design) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#3A393F] text-[#F4EDDB]">
        Design not found
      </div>
    );
  }

  return (
    <main className="bg-[#3A393F] text-[#F4EDDB] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        <img
          src={design.coverImage}
          alt={design.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="
            relative
            z-10
            min-h-screen
            flex
            items-end
          "
        >

          <div
            className="
              max-w-[1700px]
              mx-auto
              px-6
              md:px-10
              lg:px-16
              pb-20
              md:pb-28
              w-full
            "
          >

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
                  text-[#F4EDDB]/60
                "
              >
                {design.category}
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
                {design.title}
              </h1>

            </motion.div>

          </div>

        </div>

      </section>

      {/* DESCRIPTION */}
      <section className="py-24 md:py-32">

        <div className="max-w-[1100px] mx-auto px-6 md:px-10">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              text-[1.4rem]
              md:text-[2rem]
              leading-[1.8]
              text-[#F4EDDB]/75
              font-light
            "
          >
            {design.longDescription}
          </motion.p>

        </div>

      </section>

      {/* FEATURES */}
      <section className="pb-24 md:pb-32">

        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {design.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="
                  border
                  border-[#F4EDDB]/10
                  p-8
                  md:p-10
                "
              >

                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    text-[#F4EDDB]/35
                  "
                >
                  Feature
                </span>

                <h3
                  className="
                    mt-6
                    font-heading
                    text-[2rem]
                    md:text-[2.8rem]
                    leading-[0.95]
                    tracking-[-0.05em]
                  "
                >
                  {feature}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {design.images.map((img, index) => (
              <motion.div
                key={index}
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
                  overflow-hidden
                  group
                  aspect-[4/5]
                "
              >

                <img
                  src={img}
                  alt={design.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    group-hover:scale-105
                  "
                />

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}