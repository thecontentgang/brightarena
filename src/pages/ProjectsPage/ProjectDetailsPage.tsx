import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "./ProjectsData";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const project = projectsData.find((item) => item.slug === slug);
  const currentIndex = projectsData.findIndex((item) => item.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  const heroImgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroImgRef,
    offset: ["start end", "end start"],
  });
  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "14%"]);
  const heroImgScale = useTransform(heroScroll, [0, 1], [1.08, 1.0]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4EDDB]">
        <h1 className="text-2xl font-heading text-[#3A393F]">Project Not Found</h1>
      </div>
    );
  }

  return (
    <main style={{ backgroundColor: project.bg }} className="w-full overflow-hidden">

      {/* ── HERO TEXT ── */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">

          {/* eyebrow */}
          <motion.p
            style={{ color: project.textColor }}
            className="text-[10px] uppercase tracking-[0.28em] font-heading opacity-50 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {project.houseType} · {project.location} · {project.year}
          </motion.p>

          {/* title — word by word */}
          <h1
            style={{ color: project.textColor }}
            className="
              text-[32px] sm:text-[42px] md:text-[58px]
              lg:text-[72px] xl:text-[82px]
              leading-[0.95] tracking-tight font-heading font-light
              max-w-5xl flex flex-wrap gap-x-[0.22em]
            "
          >
            {project.title.split(" ").map((word, i) => (
              <span key={i} className="overflow-hidden block">
                <motion.span
                  className="block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* short description */}
          <motion.p
            style={{ color: project.textColor }}
            className="mt-6 max-w-2xl text-sm md:text-lg leading-relaxed font-light opacity-75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.75, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          >
            {project.shortDescription}
          </motion.p>

          {/* divider */}
          <motion.div
            className="mt-10 h-px"
            style={{ backgroundColor: project.textColor, opacity: 0.15 }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.65, ease: EASE }}
          />

        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section ref={heroImgRef} className="pb-8 md:pb-12 relative overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden">

            {/* image with parallax */}
            <motion.div
              className="w-full"
              style={{ y: heroImgY, scale: heroImgScale }}
            >
              <img
                src={project.heroImage || `https://picsum.photos/seed/${project.id}/1400/800`}
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://picsum.photos/seed/${project.id}/1400/800`;
                }}
                className="
                  w-full h-[260px] sm:h-[340px] md:h-[480px]
                  lg:h-[620px] xl:h-[720px]
                  object-cover object-center block
                "
              />
            </motion.div>

            {/* cover overlay wipes down */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: project.bg, transformOrigin: "top" }}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.3, delay: 0.3, ease: EASE }}
            />

          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ── */}
      <section className="py-8 md:py-14">
        <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* left label */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <h2
                style={{ color: project.textColor }}
                className="text-[22px] md:text-[28px] font-heading font-light tracking-tight"
              >
                Project Details
              </h2>
            </motion.div>

            {/* right content */}
            <div className="lg:col-span-8">

              <motion.p
                style={{ color: project.textColor }}
                className="text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-3xl opacity-90"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                viewport={{ once: true, margin: "-60px" }}
              >
                {project.projectDetails}
              </motion.p>

              {/* info grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {[
                  { label: "Client",     value: project.client },
                  { label: "Location",   value: project.location },
                  { label: "House Type", value: project.houseType },
                  { label: "Year",       value: project.year },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <p
                      style={{ color: project.textColor }}
                      className="text-[10px] uppercase tracking-[0.18em] font-heading opacity-60 mb-2"
                    >
                      {item.label}
                    </p>
                    <h4
                      style={{ color: project.textColor }}
                      className="text-sm md:text-base font-light"
                    >
                      {item.value}
                    </h4>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-8 md:py-14">
        <div className="max-w-[1450px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.gallery.map((image, i) => (
              <div key={i} className="relative overflow-hidden">

                {/* image */}
                <motion.img
                  src={image || `https://picsum.photos/seed/${project.id}-${i}/800/600`}
                  alt={`${project.title} ${i + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://picsum.photos/seed/${project.id}-${i}/800/600`;
                  }}
                  className="
                    w-full h-[280px] md:h-[480px] lg:h-[560px]
                    object-cover block
                  "
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: EASE }}
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.6 } }}
                />

                {/* cover overlay */}
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: project.bg, transformOrigin: "top" }}
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  transition={{ duration: 1.1, delay: i % 2 === 0 ? 0 : 0.12, ease: EASE }}
                  viewport={{ once: true, margin: "-60px" }}
                />

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">

          <motion.div
            className="h-px mb-10"
            style={{ backgroundColor: project.textColor, opacity: 0.12 }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true }}
          >
            <div>
              <p
                style={{ color: project.textColor }}
                className="text-[10px] md:text-xs uppercase tracking-[0.22em] font-heading mb-3 opacity-50"
              >
                Next Project
              </p>

              <h3
                style={{ color: project.textColor }}
                className="text-[28px] md:text-[48px] font-heading font-light tracking-tight"
              >
                {nextProject.title}
              </h3>
            </div>

            <motion.button
              style={{ backgroundColor: project.textColor, color: project.bg }}
              className="
                px-6 py-3 text-[10px] md:text-xs uppercase
                tracking-[0.18em] font-heading w-fit
              "
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
            >
              View Next Project
            </motion.button>

          </motion.div>
        </div>
      </section>

    </main>
  );
}