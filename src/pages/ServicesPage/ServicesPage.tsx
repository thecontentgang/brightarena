"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Home Interior Design",
    description:
      "We craft luxurious and functional residential interiors tailored to your lifestyle, combining comfort, elegance, and modern aesthetics seamlessly.",
  },
  {
    title: "Commercial Interior Design",
    description:
      "Premium commercial interiors designed to elevate brand presence, improve customer experience, and create visually impactful environments.",
  },
  {
    title: "Office Interior Design",
    description:
      "Intelligent workspace designs that enhance productivity, collaboration, and brand identity through refined spatial planning.",
  },
  {
    title: "2D & 3D Virtual Design",
    description:
      "Visualize your dream interiors with immersive 2D planning and realistic 3D rendering before execution begins.",
  },
];

const process = [
  {
    title: "Project Analysis",
    description:
      "Understanding your space, lifestyle, and vision to develop a strategic interior roadmap.",
  },
  {
    title: "Project Design",
    description:
      "Creating modern and visually striking concepts that blend luxury with functionality.",
  },
  {
    title: "Production & Building",
    description:
      "Executing interiors with precision craftsmanship and attention to every detail.",
  },
  {
    title: "Furniture Design",
    description:
      "Designing bespoke furniture pieces that perfectly complement your interiors.",
  },
  {
    title: "Office Design",
    description:
      "Building inspiring office environments focused on productivity and creativity.",
  },
  {
    title: "Design Consultancy",
    description:
      "Providing expert guidance on materials, layouts, lighting, styling, and execution.",
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F4EDDB] text-[#3A393F] overflow-hidden">

      
{/* SERVICES */}
<section className="w-full py-28 md:py-36 bg-[#F4EDDB]">

  <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">

    {/* SECTION TOP */}
    <div className="mb-24">

      <span
        className="
          uppercase
          tracking-[0.25em]
          text-[11px]
          text-[#3A393F]/50
        "
      >
        Our Services
      </span>

      <h2
        className="
          mt-8
          font-heading
          text-[3.5rem]
          md:text-[5rem]
          lg:text-[6rem]
          leading-[0.92]
          tracking-[-0.06em]
          text-[#3A393F]
          max-w-4xl
        "
      >
        Crafted interiors
        <br />
        tailored for modern living
      </h2>

    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
          }}
          viewport={{ once: true }}
          className="
            group
            bg-[#3A393F]
            overflow-hidden
            relative
            min-h-[620px]
            flex
            flex-col
          "
        >

          {/* IMAGE */}
          <div className="relative h-[340px] overflow-hidden">

            <img
              src={
                index === 0
                  ? "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
                  : index === 1
                  ? "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                  : index === 2
                  ? "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
              }
              alt={service.title}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/20" />

          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              flex-col
              justify-between
              flex-1
              p-8
              md:p-10
            "
          >

            <div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#F4EDDB]/40
                  mb-5
                "
              >
                0{index + 1}
              </div>

              <h3
                className="
                  font-heading
                  text-[2.2rem]
                  md:text-[3rem]
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#F4EDDB]
                  mb-6
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  text-[15px]
                  md:text-[16px]
                  leading-[1.9]
                  text-[#F4EDDB]/70
                  max-w-xl
                "
              >
                {service.description}
              </p>

            </div>

            {/* BUTTON */}
            <div className="mt-10">

              <button
                className="
                  group/btn
                  inline-flex
                  items-center
                  gap-3
                  text-[#F4EDDB]
                  uppercase
                  tracking-[0.18em]
                  text-[10px]
                "
              >

                Learn More

                <span
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#F4EDDB]/20
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover/btn:bg-[#F4EDDB]
                    group-hover/btn:text-[#3A393F]
                  "
                >
                  <ArrowUpRight size={16} />
                </span>

              </button>

            </div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>

      {/* PROCESS */}
      <section className="w-full bg-[#3A393F] text-[#F4EDDB] py-28 md:py-36">

        <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-24">

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[11px]
                text-[#F4EDDB]/50
              "
            >
              Process & Expertise
            </span>

            <h2
              className="
                font-heading
                text-[3.5rem]
                md:text-[5rem]
                lg:text-[6rem]
                leading-[0.92]
                tracking-[-0.06em]
                mt-8
                max-w-4xl
              "
            >
              Every detail
              <br />
              crafted with precision
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#F4EDDB]/10">

            {process.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="
                  bg-[#3A393F]
                  p-10
                  md:p-12
                  min-h-[280px]
                  flex
                  flex-col
                  justify-between
                "
              >

                <div
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-[#F4EDDB]/40
                  "
                >
                  0{index + 1}
                </div>

                <div>

                  <h3
                    className="
                      font-heading
                      text-[2rem]
                      md:text-[2.5rem]
                      leading-[1]
                      tracking-[-0.04em]
                      mb-5
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[14px]
                      md:text-[15px]
                      leading-[1.9]
                      text-[#F4EDDB]/70
                    "
                  >
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="w-full py-28 md:py-36">

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              font-heading
              text-[3.5rem]
              md:text-[5rem]
              lg:text-[6rem]
              leading-[0.95]
              tracking-[-0.06em]
            "
          >
            Let’s create
            <br />
            your dream space
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
            }}
            viewport={{ once: true }}
            className="
              mt-10
              max-w-2xl
              mx-auto
              text-[15px]
              md:text-[17px]
              leading-[2]
              text-[#3A393F]/70
            "
          >
            From luxurious homes to modern commercial spaces,
            Bright Arena Interiors transforms ideas into timeless
            environments designed around your lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-14"
          >

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                px-10
                py-5
                bg-[#3A393F]
                text-[#F4EDDB]
                uppercase
                tracking-[0.2em]
                text-[11px]
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            >
              Start Your Project
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}