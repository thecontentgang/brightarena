import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../ProjectDetailsPage/ProjectsData";

export default function ProjectsSection() {
  return (
    <section className="w-full overflow-hidden">
      {projectsData.map((project) => (
        <section
          key={project.id}
          style={{ backgroundColor: project.bg }}
          className="py-8 md:py-14 lg:py-16 overflow-hidden"
        >
          <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">

            {/* PROJECT TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{ color: project.textColor }}
              className="
                text-[28px]
                sm:text-[34px]
                md:text-[48px]
                lg:text-[58px]
                xl:text-[64px]
                leading-[0.95]
                tracking-tight
                font-heading
                font-light
                mb-2
              "
            >
              {project.title}
            </motion.h2>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="
                  w-full
                  h-[220px]
                  sm:h-[280px]
                  md:h-[360px]
                  lg:h-[420px]
                  xl:h-[460px]
                  object-cover
                  object-center
                  hover:scale-[1.02]
                  transition-transform
                  duration-700
                "
              />
            </motion.div>

            {/* DESCRIPTION + BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                mt-4
                md:mt-6
                flex
                flex-col
                md:flex-row
                md:items-end
                md:justify-between
                gap-4
              "
            >

              {/* DESCRIPTION */}
              <p
                style={{ color: project.textColor }}
                className="
                  max-w-lg
                  text-xs
                  sm:text-sm
                  md:text-base
                  leading-relaxed
                  font-light
                "
              >
                {project.description}
              </p>

              {/* BUTTON */}
              <Link
                to={`/projects/${project.slug}`}
                style={{
                  backgroundColor: project.textColor,
                  color: project.bg,
                }}
                className="
                  w-fit
                  px-5
                  md:px-6
                  py-2.5
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.18em]
                  font-heading
                  transition-all
                  duration-500
                  hover:scale-105
                "
              >
                View Project
              </Link>

            </motion.div>

          </div>
        </section>
      ))}
    </section>
  );
}