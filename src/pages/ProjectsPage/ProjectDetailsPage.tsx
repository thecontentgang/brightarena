import { motion } from "framer-motion";
import {useEffect} from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "./ProjectsData"

export default function ProjectDetailsPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4EDDB]">
        <h1 className="text-2xl font-heading text-[#3A393F]">
          Project Not Found
        </h1>
      </div>
    );
  }

  const currentIndex = projectsData.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    projectsData[
      (currentIndex + 1) % projectsData.length
    ];

  return (
    <main
      style={{ backgroundColor: project.bg }}
      className="w-full overflow-hidden"
    >

      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ color: project.textColor }}
            className="
              text-[32px]
              sm:text-[42px]
              md:text-[58px]
              lg:text-[72px]
              xl:text-[82px]
              leading-[0.95]
              tracking-tight
              font-heading
              font-light
              max-w-5xl
            "
          >
            {project.title}
          </motion.h1>

          {/* SHORT DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{ color: project.textColor }}
            className="
              mt-5
              max-w-3xl
              text-sm
              md:text-lg
              leading-relaxed
              font-light
              opacity-80
            "
          >
            {project.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[1450px] mx-auto px-4 md:px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="
                w-full
                h-[260px]
                sm:h-[340px]
                md:h-[480px]
                lg:h-[620px]
                xl:h-[720px]
                object-cover
                object-center
              "
            />
          </motion.div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="py-8 md:py-14">
        <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-10">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h2
                style={{ color: project.textColor }}
                className="
                  text-[22px]
                  md:text-[28px]
                  font-heading
                  font-light
                  tracking-tight
                "
              >
                Project Details
              </h2>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >

              <p
                style={{ color: project.textColor }}
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  font-light
                  max-w-3xl
                  opacity-90
                "
              >
                {project.projectDetails}
              </p>

              {/* INFO GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

                <div>
                  <p
                    style={{ color: project.textColor }}
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-heading
                      opacity-60
                      mb-2
                    "
                  >
                    Client
                  </p>

                  <h4
                    style={{ color: project.textColor }}
                    className="text-sm md:text-base font-light"
                  >
                    {project.client}
                  </h4>
                </div>

                <div>
                  <p
                    style={{ color: project.textColor }}
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-heading
                      opacity-60
                      mb-2
                    "
                  >
                    Location
                  </p>

                  <h4
                    style={{ color: project.textColor }}
                    className="text-sm md:text-base font-light"
                  >
                    {project.location}
                  </h4>
                </div>

                <div>
                  <p
                    style={{ color: project.textColor }}
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-heading
                      opacity-60
                      mb-2
                    "
                  >
                    House Type
                  </p>

                  <h4
                    style={{ color: project.textColor }}
                    className="text-sm md:text-base font-light"
                  >
                    {project.houseType}
                  </h4>
                </div>

                <div>
                  <p
                    style={{ color: project.textColor }}
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-heading
                      opacity-60
                      mb-2
                    "
                  >
                    Year
                  </p>

                  <h4
                    style={{ color: project.textColor }}
                    className="text-sm md:text-base font-light"
                  >
                    {project.year}
                  </h4>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-8 md:py-14">
        <div className="max-w-[1450px] mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="
                    w-full
                    h-[280px]
                    md:h-[480px]
                    lg:h-[620px]
                    object-cover
                    hover:scale-[1.02]
                    transition-transform
                    duration-700
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 border-t border-current/10 pt-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-6
            "
          >

            <div>
              <p
                style={{ color: project.textColor }}
                className="
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.18em]
                  font-heading
                  mb-3
                  opacity-60
                "
              >
                Next Project
              </p>

              <h3
                style={{ color: project.textColor }}
                className="
                  text-[28px]
                  md:text-[48px]
                  font-heading
                  font-light
                  tracking-tight
                "
              >
                {nextProject.title}
              </h3>
            </div>

            <button
              style={{
                backgroundColor: project.textColor,
                color: project.bg,
              }}
              className="
                px-6
                py-3
                text-[10px]
                md:text-xs
                uppercase
                tracking-[0.18em]
                font-heading
                transition-all
                duration-500
                hover:scale-105
                w-fit
              "
            >
              View Next Project
            </button>

          </motion.div>
        </div>
      </section>

    </main>
  );
}