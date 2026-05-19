import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "340", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

const pillars = [
  { icon: "✦", title: "Material Honesty", desc: "Raw concrete, aged brass, natural linen — every surface earns its place." },
  { icon: "◈", title: "Spatial Silence", desc: "We design pauses as deliberately as we design walls." },
  { icon: "⬡", title: "Enduring Form", desc: "Interiors built for decades, not trends. Timeless over trendy." },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-background text-primary py-20 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* 
          Main Grid Parent 
          Mobile: gap-12 controls the spacing between reordered elements.
          Desktop: lg:gap-24 separates the two split columns.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* ── LEFT COLUMN ── */}
          {/* Using `contents` un-wraps this div on mobile so flex ordering works, but turns back into a sticky block column on desktop */}
          <div className="contents lg:block lg:col-span-5 lg:sticky lg:top-32 lg:pr-8 lg:space-y-8">
            
            {/* 1. Header Block (Top on both) */}
            <div className="order-1 space-y-6">
              {/* Eyebrow */}
              <div className={`flex items-center gap-4 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="w-10 h-[1px] bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-accent font-body font-medium">
                  The Team Behind the Spaces
                </span>
              </div>

              {/* Headline */}
              <h2 className={`font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-primary transition-all duration-1000 delay-100 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                About Us
              </h2>
            </div>

            {/* 3. Body Copy (Under Image on Mobile, sticky middle on Desktop) */}
            <div className={`order-3 space-y-6 text-subtext font-body text-sm md:text-base leading-relaxed max-w-md transition-all duration-1000 delay-200 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p>
                At <strong className="font-semibold text-primary">Bright Arena Interiors</strong>, we are a collective of passionate designers and architects dedicated to transforming raw structural shells into deeply expressive, high-end environments.
              </p>
              <p>
                Great architecture shouldn't shout. Our signature look balances structural precision with raw, organic materials — ensuring every space feels calm, cohesive, and perfectly tailored.
              </p>
            </div>

            {/* 6. CTA Button (Pushed below everything on Mobile via order-last, sticky bottom on Desktop) */}
            <div className={`order-last lg:order-none pt-4 lg:pt-0 transition-all duration-1000 delay-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 px-8 py-4 border border-border text-xs tracking-widest uppercase font-semibold text-primary hover:bg-primary hover:text-background transition-all duration-500 ease-out font-body"
              >
                Work With Us
                <svg width="14" height="14" viewBox="0 0 10 10" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          {/* Becomes standard grid items on mobile, scrolling column block on desktop */}
          <div className="contents lg:block lg:col-span-7 lg:space-y-24">
            
            {/* 2. Main Image Block (Placed directly under Header on Mobile) */}
            <div className={`order-2 relative w-full aspect-[4/3] overflow-hidden bg-card border border-border p-2 transition-all duration-1000 delay-200 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Bright Arena Luxury Minimalist Interior"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-sm p-5 border border-border shadow-soft hidden md:block">
                <div className="text-[10px] tracking-widest text-accent uppercase font-medium mb-1">✦ Pure Form</div>
                <div className="font-heading text-lg text-primary italic">Clarity & Tranquility</div>
              </div>
            </div>

            {/* 4. Stats Grid */}
            <div className={`order-4 grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-y border-border transition-all duration-1000 delay-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {stats.map((s, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-heading text-4xl lg:text-5xl text-accent mb-2">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted font-medium font-body">{s.label}</div>
                </div>
              ))}
            </div>

            {/* 5. Interactive Design Pillars */}
            <div className={`order-5 space-y-4 transition-all duration-1000 delay-400 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h3 className="font-heading text-2xl text-primary mb-6">Our Philosophy</h3>
              {pillars.map((p, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="group bg-card border border-border p-6 cursor-pointer hover:bg-white transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-accent text-sm mt-0.5">{p.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-primary font-body">
                          {p.title}
                        </h4>
                        <span className={`text-accent transition-transform duration-300 ${activeIndex === i ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </div>
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out font-body text-sm text-subtext leading-relaxed ${activeIndex === i ? "max-h-40 pt-4 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        {p.desc}
                      </div>
                    </div>
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