export default function TeamSection() {
  return (
    <section className="w-full bg-[#F4EDDB] px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            TOP HEADER & DIVIDER LINE
        ========================================= */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-[#3A393F] text-2xl md:text-3xl font-light mb-6 tracking-wide">
            The team behind Bright Arena
          </h2>
          {/* Thin separator line with low opacity */}
          <div className="w-full h-[1px] bg-[#3A393F]/20" />
        </div>

        {/* =========================================
            MAIN CONTENT GRID (Image + Bio)
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Team Image */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
             <img 
  // High-end professional portrait placeholder for architects/designers
  src="https://images.unsplash.com/photo-1560250097-0b93528c31e6?auto=format&fit=crop&w=1000&q=80" 
  alt="Founders of Bright Arena" 
  className="w-full h-full object-cover grayscale-[20%] bg-[#E1D4D3]/10"
/>
            </div>
          </div>

          {/* Right Column: Names, Titles, and Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Founder 1 */}
            <div className="mb-8">
              <h3 
                className="text-[#3A393F] font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight mb-2"
               
              >
                Niveditha Reddy
              </h3>
              <p className="font-body text-[#3A393F] text-sm md:text-base tracking-wider font-light uppercase">
                Co-Founder & Chief Executive Officer
              </p>
            </div>

            {/* Founder 2 */}
            <div className="mb-10">
              <h3 
                className="text-[#3A393F] font-heading text-2xl md:text-3xl lg:text-4xl tracking-tight mb-2"
                
              >
                Anand Gunjur
              </h3>
              <p className="font-body text-[#3A393F] text-sm md:text-base tracking-wider font-light uppercase">
                Co-Founder & Director of Operations
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="font-body text-[#3A393F]/80 text-sm md:text-base leading-[1.8] font-light max-w-2xl">
              With a shared passion for redefining interiors into an art form, Niveditha Reddy and Anand Gunjur 
              lead Bright Arena with visionary expertise. Niveditha, an accomplished architect and interior designer 
              with a dual degree from the United States, brings a refined aesthetic honed by her immersive experiences. 
              Her meticulous attention to detail and collaborative ethos have positioned Bright Arena as a premier 
              destination for exquisite home, office, and outdoor interiors. Complementing her creative prowess, 
              Anand’s eight years of expertise in operations and finance in the U.S. have been instrumental in 
              scaling Bright Arena, making some of the world’s most luxurious interior brands accessible globally. 
              Together, they’re shaping Bright Arena into a name that stands for unmatched design and quality.
            </p>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}