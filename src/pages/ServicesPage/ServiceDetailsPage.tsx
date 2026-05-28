import { Link, useParams } from "react-router-dom";
import { servicesData } from "./ServicesData";
import { motion } from "framer-motion";


export default function ServiceDetailsPage() {
  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4EDDB] text-[#3A393F]">
        Service not found
      </div>
    );
  }

  return (
    <main className="bg-[#F4EDDB] text-[#3A393F] overflow-hidden">

      {/* HERO */}
      {/* HERO */}
<section className="relative min-h-screen bg-[#F4EDDB] overflow-hidden">

  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

    {/* LEFT CONTENT */}
    <div
      className="
        relative
        flex
        items-center
        px-6
        md:px-10
        lg:px-16
        py-28
        lg:py-20
        z-10
      "
    >

      {/* BG PATTERN */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage:
            "radial-gradient(#3A393F 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >

        {/* LABEL */}
        <span
          className="
            uppercase
            tracking-[0.28em]
            text-[10px]
            md:text-[11px]
            text-[#3A393F]/50
          "
        >
          Bright Arena Interiors
        </span>

        {/* HEADING */}
        <h1
          className="
            mt-8
            font-heading
            text-[3.5rem]
            sm:text-[5rem]
            md:text-[6rem]
            xl:text-[7.5rem]
            leading-[0.85]
            tracking-[-0.08em]
            text-[#3A393F]
          "
        >
          Designing
          <br />
          spaces that
          <br />
          feel timeless
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-10
            max-w-2xl
            text-[15px]
            md:text-[18px]
            leading-[2]
            text-[#3A393F]/70
          "
        >
          We create luxurious interior experiences
          tailored for modern lifestyles — blending
          elegance, comfort, functionality, and
          architectural precision into every detail.
        </p>

        {/* BUTTONS */}
        <div className="mt-14 flex flex-wrap gap-5">

          <Link to="/contact"
            className="
              bg-[#3A393F]
              text-[#F4EDDB]
              px-8
              py-5
              uppercase
              tracking-[0.22em]
              text-[10px]
              hover:scale-[1.03]
              transition-all
              duration-500
            "
          >
            Enquire Now
          </Link>

          <Link to="/projects"
            className="
              border
              border-[#3A393F]/15
              text-[#3A393F]
              px-8
              py-5
              uppercase
              tracking-[0.22em]
              text-[10px]
              hover:bg-[#3A393F]
              hover:text-[#F4EDDB]
              transition-all
              duration-500
            "
          >
            View Portfolio
          </Link>

        </div>

      </motion.div>

    </div>

    {/* RIGHT IMAGE AREA */}
    <div
      className="
        relative
        min-h-[70vh]
        lg:min-h-screen
        bg-[#3A393F]
        overflow-hidden
      "
    >

      {/* MAIN IMAGE */}
      <motion.img
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        src={service.images[0]}
        alt={service.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* FLOATING CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="
          absolute
          bottom-6
          left-6
          md:bottom-10
          md:left-10
          bg-[#F4EDDB]
          text-[#3A393F]
          p-6
          md:p-8
          max-w-[320px]
          backdrop-blur-xl
        "
      >

        <div
          className="
            uppercase
            tracking-[0.25em]
            text-[10px]
            text-[#3A393F]/50
            mb-4
          "
        >
          Premium Interior Service
        </div>

        <h3
          className="
            font-heading
            text-[2rem]
            md:text-[2.5rem]
            leading-[0.95]
            tracking-[-0.05em]
          "
        >
          {service.title}
        </h3>

        <div
          className="
            mt-6
            text-[14px]
            leading-[1.9]
            text-[#3A393F]/70
          "
        >
          Luxury interiors crafted with modern
          aesthetics and timeless functionality.
        </div>

      </motion.div>

    </div>

  </div>

</section>

      {/* CONTENT */}
      <section className="py-24 md:py-32 lg:py-40">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 xl:grid-cols-[0.7fr_1.3fr] gap-20 xl:gap-28">

            {/* LEFT INFO */}
            <div>

              <div className="sticky top-24">

                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    text-[#3A393F]/50
                  "
                >
                  Service Information
                </span>

                <div className="mt-14 space-y-12">

                  <div>

                    <div className="text-[#3A393F]/50 text-sm mb-3">
                      Phone
                    </div>

                    <div
                      className="
                        font-heading
                        text-[2rem]
                        leading-none
                      "
                    >
                      {service.phone}
                    </div>

                  </div>

                  <div>

                    <div className="text-[#3A393F]/50 text-sm mb-3">
                      Working Days
                    </div>

                    <div>{service.workingDays}</div>

                  </div>

                  <div>

                    <div className="text-[#3A393F]/50 text-sm mb-3">
                      Working Hours
                    </div>

                    <div>{service.workingHours}</div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >

                <h2
                  className="
                    font-heading
                    text-[3rem]
                    md:text-[4rem]
                    lg:text-[5rem]
                    leading-[0.92]
                    tracking-[-0.06em]
                    max-w-4xl
                  "
                >
                  Interior experiences
                  <br />
                  designed with elegance
                </h2>

              </motion.div>

              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14">

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="
                    text-[16px]
                    md:text-[17px]
                    leading-[2]
                    text-[#3A393F]/75
                  "
                >
                  {service.description}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                    text-[16px]
                    md:text-[17px]
                    leading-[2]
                    text-[#3A393F]/75
                  "
                >
                  {service.longDescription}
                </motion.p>

              </div>

              {/* BIG IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="
                  mt-20
                  overflow-hidden
                  aspect-[16/9]
                "
              >

                <img
                  src={service.images[1]}
                  alt={service.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-1000
                  "
                />

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-20">

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[10px]
                text-[#3A393F]/50
              "
            >
              Why Choose Us
            </span>

            <h2
              className="
                mt-6
                font-heading
                text-[3rem]
                md:text-[5rem]
                leading-[0.9]
                tracking-[-0.06em]
                max-w-4xl
              "
            >
              Built around luxury,
              <br />
              comfort & precision
            </h2>

          </div>

          {/* BENEFIT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {service.benefits.map((item, index) => (
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
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  bg-[#3A393F]
                  text-[#F4EDDB]
                  p-10
                  min-h-[280px]
                  flex
                  flex-col
                  justify-between
                  relative
                  overflow-hidden
                "
              >

                {/* NUMBER */}
                <div
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[#F4EDDB]/40
                  "
                >
                  0{index + 1}
                </div>

                {/* TEXT */}
                <h3
                  className="
                    font-heading
                    text-[2rem]
                    md:text-[2.5rem]
                    leading-[1]
                    tracking-[-0.05em]
                    max-w-[240px]
                  "
                >
                  {item}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* IMAGE STRIP */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="overflow-hidden">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-3 md:px-5">

            {service.images.map((img, index) => (
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
                className={`
                  overflow-hidden
                  group
                  ${
                    index % 2 === 0
                      ? "aspect-[3/4]"
                      : "aspect-square"
                  }
                `}
              >

                <img
                  src={img}
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

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}