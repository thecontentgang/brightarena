import { useState, useEffect, useRef } from 'react';

// 1. Interfaces
interface ProjectImage {
  title: string;
  img: string;
  col: number;
}

interface PortfolioSection {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  images: ProjectImage[];
}

// 2. Data
const portfolioSections: PortfolioSection[] = [
  {
    id: 'section-1',
    heading: '50+',
    subheading: 'Curated residential & commercial spaces',
    description: 'Our portfolio spans over fifty meticulously crafted environments. From intimate urban apartments to sprawling luxury estates, every project reflects our commitment to uncompromising spatial harmony and structural elegance.',
    images: [
      { title: "Urban Loft", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", col: 1 },
      { title: "Coastal Villa", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", col: 2 },
      { title: "The Penthouse", img: "https://images.unsplash.com/photo-1598928506311-c55dd1b31120?auto=format&fit=crop&w=800&q=80", col: 1 },
      { title: "Modern Estate", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", col: 2 }
    ]
  },
  {
    id: 'section-2',
    heading: 'Minimal',
    subheading: 'The art of essential living',
    description: 'We strip away the superfluous to reveal the pure architecture of a room. By focusing on natural light, expansive volume, and material honesty, we create silent, powerful spaces that allow you to breathe.',
    images: [
      { title: "Glass House", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", col: 1 },
      { title: "Kyoto Pavilion", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", col: 2 },
      { title: "Alpine Retreat", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", col: 1 },
      { title: "Gallery Space", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", col: 2 }
    ]
  },
  {
    id: 'section-3',
    heading: 'Bespoke',
    subheading: 'Tailored to your exact cadence',
    description: 'Every interior is a custom narrative. From integrated architectural millwork to hand-selected textiles, our bespoke design process ensures your home is a perfect, tactile reflection of your unique lifestyle.',
    images: [
      { title: "Artisan Joinery", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80", col: 1 },
      { title: "Custom Kitchen", img: "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=800&q=80", col: 2 },
      { title: "Stone Details", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=80", col: 1 },
      { title: "Lighting Design", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80", col: 2 }
    ]
  }
];

export default function ProjectSection() {
  const [activeSectionId, setActiveSectionId] = useState<string>(portfolioSections[0].id);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const currentRefs = observerRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% -30% -30% -30%', 
        threshold: 0,
      }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const activeContent = portfolioSections.find(s => s.id === activeSectionId) || portfolioSections[0];

  return (
    <section className="relative w-full bg-[#3A393F]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start relative lg:px-24">
        
        {/* =========================================
            TEXT BLOCK: Sticky Top (Mobile) / Sticky Left (Desktop)
        ========================================= */}
        <div className="w-full lg:w-5/12 sticky top-0 h-auto lg:h-screen flex flex-col justify-center items-center lg:items-start pt-16 pb-8 lg:py-0 px-6 lg:px-0 text-center lg:text-left z-20 bg-[#3A393F]">
          <div className="max-w-sm transition-opacity duration-500">
            <h2 
              key={activeContent.heading} 
              className="text-[#F4EDDB] font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-none mb-4 lg:mb-6 tracking-tighter animate-fade-in-up">
              {activeContent.heading === '50+' ? (
                <>50<span className="text-4xl md:text-5xl lg:text-[5rem] font-light align-top">+</span></>
              ) : (
                activeContent.heading
              )}
            </h2>
            <p 
              key={activeContent.subheading}
              className="font-body text-[#F4EDDB] text-base lg:text-xl tracking-wide font-light animate-fade-in-up delay-75"
            >
              {activeContent.subheading}
            </p>
            <p 
              key={`desc-${activeContent.id}`}
              className="font-body text-[#F4EDDB]/70 text-sm md:text-base leading-relaxed mt-4 lg:mt-6 font-light animate-fade-in-up delay-150"
            >
              {activeContent.description}
            </p>
          </div>
        </div>

        {/* =========================================
            IMAGES BLOCK: Horizontal Scroll (Mobile) / Vertical Masonry (Desktop)
        ========================================= */}
        {/* Added overflow-x-auto w-full to ensure it fills screen horizontally */}
        <div className="w-full lg:w-7/12 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none hide-scrollbar pb-16 lg:py-32 px-6 lg:px-0 gap-4 lg:gap-32">
          
          {portfolioSections.map((section, index) => (
            <div 
              key={section.id} 
              id={section.id}
              ref={el => { observerRefs.current[index] = el; }}
              // FIX: shrink-0 prevents the sections from compressing
              className="shrink-0 flex flex-row gap-4 lg:gap-10 w-max lg:w-full snap-center lg:snap-align-none"
            >
              
              {/* MOBILE LAYOUT: Flat Horizontal List */}
              <div className="flex lg:hidden flex-row gap-4">
                {section.images.map((project, idx) => (
                  // FIX: shrink-0 prevents the images from getting squished by flexbox
                  <div key={`mob-${idx}`} className="shrink-0 w-[80vw] sm:w-[50vw]">
                    <ImageCard project={project} />
                  </div>
                ))}
              </div>

              {/* DESKTOP LAYOUT: Vertical Masonry Columns */}
              <div className="hidden lg:flex flex-row gap-10 w-full">
                
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-10">
                  
                  {section.images.filter(img => img.col === 1).map((project, idx) => (
                    <ImageCard key={`col1-${idx}`} project={project} />
                  ))}
                </div>

                {/* Column 2 (Pushed down slightly) */}
                <div className="flex-1 flex flex-col gap-10 mt-24">
                  {section.images.filter(img => img.col === 2).map((project, idx) => (
                    <ImageCard key={`col2-${idx}`} project={project} />
                  ))}
                </div>

              </div>

            </div>
          ))}
          
        </div>
      </div>
      
      {/* Global CSS for Animations and Hiding Scrollbars */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </section>
  );
}

// 3. Reusable Image Component
function ImageCard({ project }: { project: ProjectImage }) {
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden group rounded-sm shadow-xl">
      <img 
        src={project.img} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/50" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-2xl md:text-3xl font-heading tracking-widest uppercase z-10 text-center px-4"
       >
          {project.title}
        </h3>
      </div>
    </div>
  );
}