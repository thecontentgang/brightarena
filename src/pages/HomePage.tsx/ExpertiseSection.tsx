import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
 const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      id: 1,
      title: "Luxury Apartments",
      description: "Optimizing spatial flow while introducing bespoke materials to create high-end, contemporary urban sanctuaries.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Bespoke Villas",
      description: "Grand architectural interiors that harmonize with their surroundings, offering expansive, personalized living experiences.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Commercial Spaces",
      description: "Elevated environments for retail, hospitality, and corporate sectors designed to inspire and engage.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;

    // Fade up the section heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Triggers when the top of the section hits 80% down the viewport
        },
      }
    );

    // Stagger fade up the service cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--color-background)] py-24 sm:py-32 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 z-10"
    >
      <div className="max-w-[1600px] mx-auto">
        
        {/* SECTION HEADING */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <h2 className="font-heading text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-[0.9] tracking-[-0.04em] text-[var(--color-primary)]">
            Curating
            <br />
            Environments
          </h2>
          <p className="max-w-[400px] text-[var(--color-primary)]/80 text-sm sm:text-base leading-[1.8] font-body font-light pb-2">
            From intimate private residences to expansive commercial destinations, we approach every project with an unwavering commitment to detail and atmosphere.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              // Add each card to the ref array for the GSAP stagger
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group cursor-pointer flex flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent" />
              </div>

              {/* CARD TEXT */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3 text-[var(--color-primary)]">
                  <span className="text-xs uppercase tracking-[0.1em] font-medium opacity-60">
                    0{index + 1}
                  </span>
                  <span className="w-10 h-[1px] bg-[var(--color-primary)]/30 transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--color-primary)]" />
                </div>
                <h3 className="font-heading text-[1.75rem] sm:text-[2rem] leading-tight mb-4 text-[var(--color-primary)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[var(--color-primary)]/75 text-sm leading-[1.7] font-body font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;