import { useParams } from "react-router-dom";
import { blogsData } from "./blogData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const blog = blogsData.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#3A393F] text-[#F4EDDB]">
        Blog not found
      </div>
    );
  }

  return (
    <main className="bg-[#3A393F] text-[#F4EDDB] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* BG IMAGE */}
        <div className="absolute inset-0">

          <img
            src={blog.coverImage}
            alt={blog.title}
            className="
              w-full
              h-full
              object-cover
              scale-105
            "
          />

          <div className="absolute inset-0 bg-black/60" />

        </div>

        {/* CONTENT */}
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
              pb-16
              md:pb-24
              lg:pb-32
              w-full
            "
          >

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-6xl"
            >

              {/* CATEGORY */}
              <span
                className="
                  uppercase
                  tracking-[0.3em]
                  text-[10px]
                  md:text-[11px]
                  text-[#F4EDDB]/60
                "
              >
                {blog.category}
              </span>

              {/* TITLE */}
              <h1
                className="
                  mt-8
                  font-heading
                  text-[3.6rem]
                  sm:text-[5rem]
                  md:text-[7rem]
                  lg:text-[8rem]
                  xl:text-[9rem]
                  leading-[0.85]
                  tracking-[-0.08em]
                  max-w-6xl
                "
              >
                {blog.title}
              </h1>

              {/* META */}
              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  md:gap-8
                "
              >

                <div
                  className="
                    uppercase
                    tracking-[0.2em]
                    text-[10px]
                    text-[#F4EDDB]/50
                  "
                >
                  {blog.author}
                </div>

                <div className="w-1 h-1 rounded-full bg-[#F4EDDB]/30" />

                <div
                  className="
                    uppercase
                    tracking-[0.2em]
                    text-[10px]
                    text-[#F4EDDB]/50
                  "
                >
                  {blog.date}
                </div>

                <div className="w-1 h-1 rounded-full bg-[#F4EDDB]/30" />

                <div
                  className="
                    uppercase
                    tracking-[0.2em]
                    text-[10px]
                    text-[#F4EDDB]/50
                  "
                >
                  {blog.readTime}
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="relative py-24 md:py-32 lg:py-40">

        <div className="max-w-[1200px] mx-auto px-6 md:px-10">

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              font-heading
              text-[2rem]
              md:text-[3rem]
              lg:text-[4rem]
              leading-[1.15]
              tracking-[-0.05em]
              text-[#F4EDDB]
            "
          >
            {blog.intro}
          </motion.p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="space-y-32">

            {blog.content.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-[0.4fr_1fr]
                  gap-12
                  lg:gap-20
                "
              >

                {/* LEFT */}
                <div>

                  <div
                    className="
                      sticky
                      top-24
                    "
                  >

                    <div
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-[#F4EDDB]/35
                        mb-6
                      "
                    >
                      0{index + 1}
                    </div>

                    <h2
                      className="
                        font-heading
                        text-[2.5rem]
                        md:text-[4rem]
                        leading-[0.92]
                        tracking-[-0.05em]
                      "
                    >
                      {item.heading}
                    </h2>

                  </div>

                </div>

                {/* RIGHT */}
                <div>

                  <p
                    className="
                      text-[16px]
                      md:text-[19px]
                      leading-[2.1]
                      text-[#F4EDDB]/70
                      max-w-4xl
                    "
                  >
                    {item.paragraph}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* FEATURE IMAGE */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="max-w-[1700px] mx-auto px-4 md:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              aspect-[16/8]
            "
          >

            <img
              src={blog.gallery[0]}
              alt={blog.title}
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition-transform
                duration-[1600ms]
              "
            />

          </motion.div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="pb-24 md:pb-32 lg:pb-40">

        <div className="max-w-[1700px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="flex items-end justify-between mb-16">

            <div>

              <span
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[10px]
                  text-[#F4EDDB]/40
                "
              >
                Visual Gallery
              </span>

              <h2
                className="
                  mt-6
                  font-heading
                  text-[3rem]
                  md:text-[5rem]
                  leading-[0.9]
                  tracking-[-0.06em]
                "
              >
                Interior moments
              </h2>

            </div>

            <button
              className="
                hidden
                md:flex
                items-center
                gap-4
                uppercase
                tracking-[0.2em]
                text-[10px]
                text-[#F4EDDB]/70
              "
            >

              Explore More

              <span
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#F4EDDB]/15
                  flex
                  items-center
                  justify-center
                "
              >
                <ArrowUpRight size={15} />
              </span>

            </button>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {blog.gallery.map((img, index) => (
              <motion.div
                key={index}
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
                className={`
                  overflow-hidden
                  group
                  ${
                    index === 0
                      ? "xl:col-span-2 aspect-[16/10]"
                      : "aspect-[4/5]"
                  }
                `}
              >

                <img
                  src={img}
                  alt={blog.title}
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