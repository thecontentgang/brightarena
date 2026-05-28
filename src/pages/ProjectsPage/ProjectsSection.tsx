import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "./ProjectsData";

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

            {/* PLACEHOLDER IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                overflow-hidden
                relative
                bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  w-full
                  h-[220px]
                  sm:h-[280px]
                  md:h-[360px]
                  lg:h-[420px]
                  xl:h-[460px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-6
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 opacity-60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    style={{ color: project.textColor }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 21V7.5a2.25 2.25 0 012.25-2.25h10.5A2.25 2.25 0 0119.5 7.5V21M9 9h.008v.008H9V9zm0 3h.008v.008H9V12zm0 3h.008v.008H9V15zm3-6h.008v.008H12V9zm0 3h.008v.008H12V12zm0 3h.008v.008H12V15zm3-6h.008v.008H15V9zm0 3h.008v.008H15V12zm0 3h.008v.008H15V15z"
                    />
                  </svg>
                </div>

                {/* Placeholder Text */}
                <p
                  style={{ color: project.textColor }}
                  className="
                    text-xs
                    md:text-sm
                    uppercase
                    tracking-[0.3em]
                    opacity-60
                  "
                >
                  Project Preview Image
                </p>
              </div>
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