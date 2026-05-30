import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years in Design" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[var(--color-background)]
        text-[var(--color-primary)]
        py-8
        md:py-14
        overflow-hidden
      "
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ───────────────── LEFT ───────────────── */}
          <div className="contents lg:block lg:col-span-5 lg:sticky lg:top-14">
            
            {/* TOP */}
            <div className="order-1 space-y-3">
              
              {/* EYEBROW */}
              <div
                className={`
                  flex
                  items-center
                  gap-4
                  transition-all
                  duration-1000
                  ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                `}
              >
                <span className="w-8 h-[1px] bg-[var(--color-primary)]/40" />
                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.25em]
                    uppercase
                    text-[var(--color-primary)]/60
                    font-medium
                  "
                >
                  About Bright Arena
                </span>
              </div>

              {/* HEADING */}
              <h2
                className={`
                  font-heading
                  text-[3rem]
                  sm:text-[3.8rem]
                  lg:text-[4.5rem]
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-[var(--color-primary)]
                  transition-all
                  duration-1000
                  delay-100
                  ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                `}
              >
                Designing
                
                Spaces That
                
                Tell Your Story
              </h2>
            </div>

            {/* BODY */}
            <div
              className={`
                order-3
                mt-8
                lg:mt-10
                space-y-2
                text-[var(--color-primary)]/80
                text-[14px]
                md:text-[15px]
                leading-[1.8]
                max-w-[420px]
                font-body
                font-light
                transition-all
                duration-1000
                delay-200
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <p>
                Founded in Hyderabad,{" "}
                <strong className="font-semibold text-[var(--color-primary)]">
                  Bright Arena Interiors
                </strong>{" "}
                is a premier design studio dedicated to transforming residential
                and commercial spaces into refined environments.
              </p>
              <p>
                We blend modern, minimalist aesthetics with luxurious comfort.
                From bespoke modular kitchens to complete home renovations, we
                manage every detail with uncompromising quality to ensure your
                space feels deeply personal and effortlessly sophisticated.
              </p>
            </div>

            {/* CTA */}
            <div
              className={`
                order-last
                pt-4
                transition-all
                duration-1000
                delay-300
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <a
                href="#services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  border
                  bg-[var(--color-primary)]
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.2em]
                  uppercase
                  font-semibold
                  text-[var(--color-background)]
                  hover:bg-[var(--color-primary)]
                  hover:text-[var(--color-background)]
                  transition-all
                  duration-500
                  
                "
              >
                Discover Our Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="
                    transform
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                >
                  <path
                    d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ───────────────── RIGHT ───────────────── */}
          <div className="contents lg:block lg:col-span-7">
            
            {/* IMAGE */}
            <div
              className={`
                order-2
                relative
                w-full
                aspect-[4/3]
                overflow-hidden
                rounded-sm
                transition-all
                duration-1000
                delay-200
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Bright Arena Luxury Interior Design"
                className="
                  w-full
                  h-full
                  object-cover
                  scale-[1.02]
                  hover:scale-[1.05]
                  transition-transform
                  duration-[1.5s]
                  ease-out
                "
              />

              
             
            </div>

            {/* STATS */}
            <div
              className={`
                order-4
                grid
                grid-cols-2
                sm:grid-cols-3
                gap-6
                md:gap-10
                pt-6
                mt-2
                border-t
                border-[var(--color-primary)]/10
                transition-all
                duration-1000
                delay-300
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              {stats.map((s, i) => (
                <div key={i} className="text-left">
                  <div
                    className="
                      font-heading
                      text-3xl
                      lg:text-4xl
                      tracking-[-0.03em]
                      text-[var(--color-primary)]
                      mb-1.5
                    "
                  >
                    {s.value}
                  </div>
                  <div
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-[var(--color-primary)]/50
                      font-medium
                    "
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}