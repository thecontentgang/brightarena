export default function BrandPhilosophySection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-[#F4EDDB] px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      
      {/* Background Geometric Lines (SVG)
        Recreates the thin, elegant intersecting lines seen in the reference image.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1440 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Radiating architectural lines */}
          <path d="M600 -100 L200 1000" stroke="#F2C8C6" strokeWidth="0.5" />
          <path d="M1000 150 L2000 500" stroke="#F2C8C6" strokeWidth="0.5" />
          <path d="M1000 150 L1400 -100" stroke="#F2C8C6" strokeWidth="0.5" />
          <path d="M1000 150 L1400 800" stroke="#F2C8C6" strokeWidth="0.5" />
          <path d="M800 -50 L1440 300" stroke="#F2C8C6" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col h-full min-h-[60vh]">
        
        {/* Top-Left: Main Italicized Heading
          Using max-width to force the exact line breaks shown in the reference.
        */}
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 
            className="font-heading text-[#3A393F] text-3xl sm:text-5xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight italic">
        
            Bright Arena features ultra-luxury minimalist interiors, delivering an unmatched living experience.
          </h2>
        </div>

        {/* Bottom-Right: Small Paragraph
          Uses auto-margins to push it to the bottom right of the flex container.
        */}
        <div className="w-full md:w-1/3 max-w-sm mt-24 md:mt-auto ml-auto">
          <p className="font-body text-[#3A393F] text-sm md:text-base leading-[1.6] tracking-wide font-light">
            Precision craftsmanship, serene elegance, and understated luxury define our approach. 
            That’s the philosophy of Bright Arena. We blend structural clarity with warm, 
            natural materials to bring deep fulfillment and tranquility to your daily life.
          </p>
        </div>

      </div>
    </section>
  );
}