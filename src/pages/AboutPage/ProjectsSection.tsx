

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
      { title: "Urban Loft", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", col: 1 },
      { title: "Coastal Villa", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", col: 2 },
      { title: "The Penthouse", img: "https://images.unsplash.com/photo-1598928506311-c55dd1b31120?auto=format&fit=crop&w=1200&q=80", col: 1 },
      { title: "Modern Estate", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80", col: 2 }
    ]
  },
  {
    id: 'section-2',
    heading: 'Minimal',
    subheading: 'The art of essential living',
    description: 'We strip away the superfluous to reveal the pure architecture of a room. By focusing on natural light, expansive volume, and material honesty, we create silent, powerful spaces that allow you to breathe.',
    images: [
      { title: "Glass House", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", col: 1 },
      { title: "Kyoto Pavilion", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", col: 2 },
      { title: "Alpine Retreat", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", col: 1 },
      { title: "Gallery Space", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", col: 2 }
    ]
  },
  {
    id: 'section-3',
    heading: 'Bespoke',
    subheading: 'Tailored to your exact cadence',
    description: 'Every interior is a custom narrative. From integrated architectural millwork to hand-selected textiles, our bespoke design process ensures your home is a perfect, tactile reflection of your unique lifestyle.',
    images: [
      { title: "Artisan Joinery", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80", col: 1 },
      { title: "Custom Kitchen", img: "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1200&q=80", col: 2 },
      { title: "Stone Details", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80", col: 1 },
      { title: "Lighting Design", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80", col: 2 }
    ]
  }
];

export default function ProjectSection() {
  return (
    <section className="w-full bg-[#1A1A1A] text-[#F4EDDB] selection:bg-[#F4EDDB] selection:text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col gap-32 md:gap-48">
        
        {portfolioSections.map((section) => (
          <div 
            key={section.id} 
            className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative"
          >
            {/* TEXT BLOCK: 
              Using native CSS 'sticky' instead of JS IntersectionObserver.
              It sticks to the top while scrolling past the images, 
              then naturally un-sticks when the next section begins.
            */}
            <div className="w-full lg:w-5/12 h-fit lg:sticky lg:top-32 flex flex-col items-start z-10">
              <h2 className="font-heading text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-6">
                {section.heading === '50+' ? (
                  <>50<span className="text-5xl lg:text-[5rem] font-light align-top">+</span></>
                ) : (
                  section.heading
                )}
              </h2>
              <p className="text-xl md:text-2xl tracking-wide font-light mb-6 opacity-90">
                {section.subheading}
              </p>
              <p className="text-sm md:text-base leading-relaxed font-light opacity-60 max-w-md">
                {section.description}
              </p>
            </div>

            {/* IMAGES BLOCK: 
              Vertical zig-zag layout. Generous padding avoids the "stuffed" feeling.
            */}
            <div className="w-full lg:w-7/12 flex flex-col gap-12 md:gap-24">
              {section.images.map((project, idx) => (
                <div 
                  key={`${section.id}-img-${idx}`}
                  // Alternates images left and right to create an editorial masonry look
                  className={`w-full sm:w-[85%] ${idx % 2 === 0 ? 'self-start' : 'self-end'}`}
                >
                  <ImageCard project={project} />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

// 3. Reusable Image Component
function ImageCard({ project }: { project: ProjectImage }) {
  return (
    <div className="group relative w-full aspect-[4/5] overflow-hidden rounded-md bg-[#2A2A2A]">
      <img 
        src={project.img} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      {/* Subtle darkening overlay on hover */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-700 ease-out group-hover:bg-black/40" />
      
      {/* Title fades in and slides up slightly */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
        <h3 className="text-white text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-center px-6">
          {project.title}
        </h3>
      </div>
    </div>
  );
}