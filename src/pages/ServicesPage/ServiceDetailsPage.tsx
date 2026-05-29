import { Link, useParams } from "react-router-dom";
import { servicesData } from "./ServicesData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealHeadingProps {
  children: string;
  className?: string;
  delay?: number;
  animate?: boolean;
}

function RevealHeading({ children, className, delay = 0, animate = false }: RevealHeadingProps) {
  const lines = children.split("\n");
  let wordIndex = 0;
  return (
    <h2 className={className}>
      {lines.map((line: string, li: number) => (
        <span key={li} className="block">
          {line.split(" ").map((word: string) => {
            const wi = wordIndex++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-2 mr-[0.22em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%", opacity: 0 }}
                  {...(animate
                    ? { animate: { y: "0%", opacity: 1 } }
                    : { whileInView: { y: "0%", opacity: 1 } }
                  )}
                  transition={{ duration: 0.9, delay: delay + wi * 0.08, ease: EASE }}
                  viewport={animate ? undefined : { once: true, margin: "-60px" }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  const heroImgRef = useRef<HTMLDivElement>(null);
  const bigImgRef  = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroImgRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: bigScroll } = useScroll({
    target: bigImgRef,
    offset: ["start end", "end start"],
  });

  const heroImgY  = useTransform(heroScroll, [0, 1], ["0%", "12%"]);
  const bigImgY   = useTransform(bigScroll,  [0, 1], ["0%", "10%"]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4EDDB] text-[#3A393F]">
        Service not found
      </div>
    );
  }

  return (
    <main className="bg-[#F4EDDB] text-[#3A393F] overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#F4EDDB] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* LEFT */}
          <div className="relative flex items-center px-6 md:px-10 lg:px-16 py-28 lg:py-20 z-10">

            {/* dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(#3A393F 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 max-w-3xl">

              {/* label */}
              <motion.span
                className="uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[#3A393F]/50"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                Bright Arena Interiors
              </motion.span>

              <RevealHeading
  animate
  delay={0.1}
  className="mt-8 font-heading text-[3.5rem] sm:text-[5rem] md:text-[6rem] xl:text-[6.5rem] leading-[0.92] tracking-[-0.08em] text-[#3A393F]"
>
  {"Designing\nspaces that\nfeel timeless"}
</RevealHeading>
              {/* description */}
              <motion.p
                className="mt-10 max-w-2xl text-[15px] md:text-[18px] leading-[2] text-[#3A393F]/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              >
                We create luxurious interior experiences tailored for modern lifestyles —
                blending elegance, comfort, functionality, and architectural precision
                into every detail.
              </motion.p>

              {/* divider */}
              <motion.div
                className="mt-10 h-px bg-[#3A393F]/15"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.7, ease: EASE }}
              />

              {/* buttons */}
              <motion.div
                className="mt-12 flex flex-wrap gap-5"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
              >
                <Link
                  to="/contact"
                  className="bg-[#3A393F] text-[#F4EDDB] px-8 py-5 uppercase tracking-[0.22em] text-[10px] hover:scale-[1.03] transition-all duration-500"
                >
                  Enquire Now
                </Link>
                <Link
                  to="/projects"
                  className="border border-[#3A393F]/15 text-[#3A393F] px-8 py-5 uppercase tracking-[0.22em] text-[10px] hover:bg-[#3A393F] hover:text-[#F4EDDB] transition-all duration-500"
                >
                  View Portfolio
                </Link>
              </motion.div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div ref={heroImgRef} className="relative min-h-[70vh] lg:min-h-screen bg-[#3A393F] overflow-hidden">

            {/* image + parallax */}
            <motion.img
              src={service.images[0]}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ y: heroImgY, scale: 1.08 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            />

            <div className="absolute inset-0 bg-black/10" />

            {/* cover overlay wipes down */}
            <motion.div
              className="absolute inset-0 bg-[#3A393F]"
              style={{ transformOrigin: "top" }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.3, delay: 0.15, ease: EASE }}
            />

            

          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 xl:grid-cols-[0.7fr_1.3fr] gap-20 xl:gap-28">

            {/* LEFT sticky info */}
            <div>
              <div className="sticky top-24">

                <motion.span
                  className="uppercase tracking-[0.25em] text-[10px] text-[#3A393F]/50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  viewport={{ once: true }}
                >
                  Service Information
                </motion.span>

                <div className="mt-14 space-y-12">
                  {[
                    { label: "Phone",         value: service.phone,        big: true },
                    { label: "Working Days",  value: service.workingDays,  big: false },
                    { label: "Working Hours", value: service.workingHours, big: false },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                      viewport={{ once: true }}
                    >
                      <div className="text-[#3A393F]/50 text-sm mb-3">{item.label}</div>
                      <div className={item.big ? "font-heading text-[2rem] leading-none" : ""}>
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT content */}
            <div>

              <RevealHeading
                delay={0.05}
                className="font-heading text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[0.92] tracking-[-0.06em] max-w-4xl"
              >
                {"Interior experiences\ndesigned with elegance"}
              </RevealHeading>

              {/* divider */}
              <motion.div
                className="mt-10 mb-16 h-px bg-[#3A393F]/15"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: EASE }}
                viewport={{ once: true }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                {[service.description, service.longDescription].map((text, i) => (
                  <motion.p
                    key={i}
                    className="text-[16px] md:text-[17px] leading-[2] text-[#3A393F]/75"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                    viewport={{ once: true }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* big image */}
              <div ref={bigImgRef} className="mt-20 overflow-hidden relative aspect-[16/9]">
                <motion.img
                  src={service.images[1]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  style={{ y: bigImgY, scale: 1.08 }}
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1.08 }}
                  transition={{ duration: 1.4, ease: EASE }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.11, transition: { duration: 0.7 } }}
                />
                {/* cover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#F4EDDB]"
                  style={{ transformOrigin: "top" }}
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  transition={{ duration: 1.2, ease: EASE }}
                  viewport={{ once: true, margin: "-60px" }}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

          <div className="mb-20">
            <motion.span
              className="uppercase tracking-[0.25em] text-[10px] text-[#3A393F]/50"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.span>

            <RevealHeading
              delay={0.08}
              className="mt-6 font-heading text-[3rem] md:text-[5rem] leading-[0.9] tracking-[-0.06em] max-w-4xl"
            >
              {"Built around luxury,\ncomfort & precision"}
            </RevealHeading>

            <motion.div
              className="mt-10 h-px bg-[#3A393F]/15"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: EASE }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {service.benefits.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#3A393F] text-[#F4EDDB] p-10 min-h-[280px] flex flex-col justify-between relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.09, ease: EASE }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <motion.div
                  className="text-[10px] uppercase tracking-[0.2em] text-[#F4EDDB]/40"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.09 + 0.2, ease: EASE }}
                  viewport={{ once: true }}
                >
                  0{i + 1}
                </motion.div>

                <motion.h3
                  className="font-heading text-[2rem] md:text-[2.5rem] leading-[1] tracking-[-0.05em] max-w-[240px]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.09 + 0.28, ease: EASE }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── IMAGE STRIP ── */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-3 md:px-5">
            {service.images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
              >
                <motion.img
                  src={img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.3, delay: i * 0.08, ease: EASE }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
                />
                {/* cover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#F4EDDB]"
                  style={{ transformOrigin: "top" }}
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                  viewport={{ once: true, margin: "-40px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}