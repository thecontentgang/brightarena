import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "340", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
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
        min-h-screen
        bg-background
        text-primary
        py-24
        md:py-32
        overflow-hidden
      "
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* ───────────────── LEFT ───────────────── */}
          <div className="contents lg:block lg:col-span-5 lg:sticky lg:top-28">

            {/* TOP */}
            <div className="order-1 space-y-8">

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
                      : "opacity-0 translate-y-8"
                  }
                `}
              >
                <span className="w-12 h-[1px] bg-primary/40" />

                <span
                  className="
                    text-[10px]
                    tracking-[0.3em]
                    uppercase
                    text-primary/60
                    font-medium
                  "
                >
                  Bright Arena Interiors
                </span>
              </div>

              {/* HEADING */}
              <h2
                className={`
                  font-heading
                  text-[3.8rem]
                  sm:text-[5rem]
                  lg:text-[7rem]
                  leading-[0.88]
                  tracking-[-0.06em]
                  text-primary
                  transition-all
                  duration-1000
                  delay-100
                  ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
              >
                Designing
                <br />
                Spaces That
                <br />
                Feel Alive
              </h2>

            </div>

            {/* BODY */}
            <div
              className={`
                order-3
                mt-12
                lg:mt-20
                space-y-7
                text-subtext
                text-[15px]
                md:text-[17px]
                leading-[2]
                max-w-lg
                transition-all
                duration-1000
                delay-200
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
            >

              <p>
                At{" "}
                <strong className="font-semibold text-primary">
                  Bright Arena Interiors
                </strong>
                , we craft luxurious living experiences through
                thoughtful spatial design, refined material
                palettes, and timeless architectural aesthetics.
              </p>

              <p>
                Every project is approached with precision and
                emotion — balancing functionality, elegance, and
                warmth to create interiors that feel deeply
                personal and effortlessly sophisticated.
              </p>

            </div>

            {/* CTA */}
            <div
              className={`
                order-last
                pt-12
                transition-all
                duration-1000
                delay-300
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
            >

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  px-8
                  py-4
                  border
                  border-primary/20
                  text-[10px]
                  tracking-[0.25em]
                  uppercase
                  font-semibold
                  text-primary
                  hover:bg-primary
                  hover:text-background
                  transition-all
                  duration-500
                "
              >
                Work With Us

                <svg
                  width="14"
                  height="14"
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
                    strokeWidth="1.5"
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
                aspect-[5/4]
                overflow-hidden
                transition-all
                duration-1000
                delay-200
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
            >

              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
                alt="Bright Arena Luxury Interior"
                className="
                  w-full
                  h-full
                  object-cover
                  scale-[1.02]
                  hover:scale-[1.05]
                  transition-all
                  duration-1000
                  ease-out
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  bg-gradient-to-t
                  from-black/75
                  via-black/20
                  to-transparent
                  p-8
                  md:p-12
                  flex
                  items-end
                "
              >

                <div>

                  <div
                    className="
                      text-[10px]
                      tracking-[0.25em]
                      uppercase
                      text-white/60
                      mb-3
                    "
                  >
                    Bright Arena Interiors
                  </div>

                  <div
                    className="
                      font-heading
                      text-2xl
                      md:text-4xl
                      text-white
                      leading-tight
                    "
                  >
                    Crafted with
                    <br />
                    precision & emotion
                  </div>

                </div>

              </div>

            </div>

            {/* STATS */}
            <div
              className={`
                order-4
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-10
                py-16
                mt-10
                border-t
                border-primary/10
                transition-all
                duration-1000
                delay-300
                ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
            >

              {stats.map((s, i) => (
                <div
                  key={i}
                  className="
                    text-center
                    sm:text-left
                  "
                >

                  <div
                    className="
                      font-heading
                      text-5xl
                      lg:text-7xl
                      tracking-[-0.05em]
                      text-primary
                      mb-3
                    "
                  >
                    {s.value}
                  </div>

                  <div
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-primary/50
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