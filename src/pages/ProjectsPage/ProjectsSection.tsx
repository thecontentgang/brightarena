import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "./ProjectsData";

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // image subtle parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      key={project.id}
      style={{ backgroundColor: project.bg }}
      className="py-8 md:py-14 lg:py-16 overflow-hidden"
    >
      <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">

        {/* PROJECT NUMBER + TITLE ROW */}
        <div className="flex items-baseline gap-4 mb-2 overflow-hidden">

          {/* index number */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={{ once: true }}
            style={{ color: project.textColor }}
            className="font-heading font-light text-sm tracking-[0.2em] shrink-0"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          {/* title — each word animates up */}
          <h2
            style={{ color: project.textColor }}
            className="
              text-[28px] sm:text-[34px] md:text-[48px]
              lg:text-[58px] xl:text-[64px]
              leading-[0.95] tracking-tight font-heading font-light
              flex flex-wrap gap-x-[0.25em] overflow-hidden
            "
          >
            {project.title.split(" ").map((word, wi) => (
              <span key={wi} className="overflow-hidden block">
                <motion.span
                  className="block"
                  initial={{ y: "110%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: wi * 0.08,
                    ease: EASE,
                  }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

        </div>

       {/* IMAGE — overlay reveal + parallax */}
<div className="relative overflow-hidden">
  <motion.div style={{ y: imgY }}>
    <img
      src={project.heroImage || `https://picsum.photos/seed/${project.id}/1320/600`}
      alt={project.title}
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          `https://picsum.photos/seed/${project.id}/1320/600`;
      }}
      className="
        w-full
        h-[220px] sm:h-[280px] md:h-[360px]
        lg:h-[420px] xl:h-[460px]
        object-cover block
      "
    />
  </motion.div>

  {/* cover overlay wipes away on scroll into view */}
  <motion.div
    className="absolute inset-0 origin-top"
    style={{ backgroundColor: project.bg }}
    initial={{ scaleY: 1 }}
    whileInView={{ scaleY: 0 }}
    transition={{ duration: 1.1, ease: EASE }}
    viewport={{ once: true, margin: "-40px" }}
  />
</div>
        {/* DESCRIPTION + BUTTON */}
        <div className="mt-4 md:mt-6 flex flex-row md:flex-row md:items-end md:justify-between gap-4">

          {/* description — fade + slide */}
          <motion.p
            style={{ color: project.textColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            viewport={{ once: true }}
            className="max-w-lg text-xs sm:text-sm md:text-base leading-relaxed font-light"
          >
            {project.description}
          </motion.p>

          {/* button — fade + slide, slight delay */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
            viewport={{ once: true }}
          >
            <Link
              to={`/projects/${project.slug}`}
              style={{
                backgroundColor: project.textColor,
                color: project.bg,
              }}
              className="
                group relative overflow-hidden
                w-fit block
                px-5 md:px-6 py-2.5
                text-[10px] md:text-xs uppercase tracking-[0.18em]
                font-heading transition-all duration-500 hover:scale-105
              "
            >
              {/* hover fill sweep */}
              <span
                className="
                  absolute inset-0 translate-x-[-101%] group-hover:translate-x-0
                  transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
                "
                style={{ backgroundColor: project.bg, opacity: 0.12 }}
              />
              <span className="relative">View Project</span>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default function ProjectsSection() {
  return (
    <section className="w-full overflow-hidden">
      {projectsData.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}