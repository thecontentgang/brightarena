export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* =========================================
          SECTION 1: Typography & Narrative Hero
      ========================================= */}
      <section className="w-full min-h-[75vh] flex items-center bg-[#3A393F] px-6 md:px-12 lg:px-24 py-10 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto">
          
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 
              className="font-heading text-[#F4EDDB] text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-10"
            >
              Crafted Spaces <br />
              For Elevated <br />
              Living
            </h1>

            {/* Body Copy */}
            <p className="font-body text-white/90 text-sm md:text-base leading-[1.8] max-w-xl">
              At Bright Arena, we create timeless interior experiences that blend 
              sophistication, comfort, and functionality. From luxurious residences 
              to modern commercial spaces, every design is thoughtfully curated to 
              reflect refined aesthetics, premium craftsmanship, and contemporary living.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: Full-Screen Animated Image
      ========================================= */}
      <section className="w-full h-[50vh] md:h-screen relative overflow-hidden bg-[#35423E]">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80" 
          alt="Luxurious modern living space" 
          className="w-full h-full object-cover"
          style={{
            animation: 'slowPan 40s ease-in-out infinite alternate',
            transform: 'scale(1.05)'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#35423E] to-transparent opacity-80" />
      </section>

      {/* Animation */}
      <style>{`
        @keyframes slowPan {
          0% {
            transform: scale(1.05) translate(0%, 0%);
          }
          100% {
            transform: scale(1.15) translate(-2%, -2%);
          }
        }
      `}</style>

    </div>
  );
}