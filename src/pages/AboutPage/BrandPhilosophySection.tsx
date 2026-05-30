export default function BrandPhilosophySection() {
  return (
    <section className="relative w-full bg-[#F4EDDB] px-4 sm:px-8 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28 overflow-hidden flex items-center justify-center">
      
      {/* Outer Editorial Container Frame */}
      <div className="relative w-full max-w-7xl mx-auto border border-[#E6DCC3] p-4 sm:p-6 md:p-8 lg:p-12">
        
        {/* Inner Accent Line Frame - creates the architectural depth seen in reference image */}
        <div className="absolute inset-2 sm:inset-3 md:inset-4 pointer-events-none border border-[#3A393F]/10 z-0" />

        {/* Content Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Eyebrow Label */}
          <div className="w-full lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
            {/* Small Elegant Eyebrow */}
            <span className="text-xs uppercase tracking-[0.25em] text-[#3A393F]/60 font-medium">
              Philosophy
            </span>
            
            {/* Main Statement */}
            <h2 className="font-heading text-[#3A393F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.2] lg:leading-[1.15] tracking-tight max-w-2xl">
              Bright Arena features ultra-luxury minimalist interiors, delivering an unmatched living experience.
            </h2>
          </div>

          {/* Right Column: Narrative Body Paragraph */}
          {/* Automatically self-aligns down on large screens, remaining clean and close on mobile/tablet */}
          <div className="w-full lg:col-span-5 lg:mt-auto flex justify-end">
            <div className="w-full max-w-md border-t lg:border-t-0 lg:border-l border-[#3A393F]/20 pt-6 lg:pt-0 lg:pl-8">
              <p className="font-body text-[#3A393F]/90 text-sm md:text-base leading-[1.65] tracking-wide font-light">
                Precision craftsmanship, serene elegance, and understated luxury define our approach. 
                That’s the philosophy of Bright Arena. We blend structural clarity with warm, 
                natural materials to bring deep fulfillment and tranquility to your daily life.
              </p>
            </div>
          </div>

        </div>

        {/* Optional decorative minimal crosshairs in the corners to match technical drawings */}
        <div className="absolute top-0 left-4 h-2 w-[1px] bg-[#3A393F]/30" />
        <div className="absolute top-4 left-0 h-[1px] w-2 bg-[#3A393F]/30" />
        <div className="absolute bottom-0 right-4 h-2 w-[1px] bg-[#3A393F]/30" />
        <div className="absolute bottom-4 right-0 h-[1px] w-2 bg-[#3A393F]/30" />

      </div>
    </section>
  );
}