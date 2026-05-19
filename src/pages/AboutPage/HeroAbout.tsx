

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* =========================================
          SECTION 1: Typography & Narrative Hero
      ========================================= */}
      <section className="w-full min-h-[75vh] flex items-center bg-[#3A393F] px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto">
          
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 
              className="font-heading text-[#F4EDDB] text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] leading-[1.05] tracking-tight uppercase mb-10"
             
            >
              Exploring The <br />
              Art Of Modern <br />
              Living
            </h1>

            {/* Body Copy */}
            <p className="font-body text-white/90 text-sm md:text-base leading-[1.8] max-w-xl">
              At Merise, we see every home as a canvas for thoughtful, contemporary design. 
              Our mission is to blend the finest international luxury brands with your 
              personal style, creating spaces that are artfully functional. We bring your 
              vision to life with modern luxury and impeccable craftsmanship.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: Full-Screen Animated Image
      ========================================= */}
      <section className="w-full h-screen/2 md:h-screen relative overflow-hidden bg-[#35423E]">
        <img 
          // Placeholder high-end interior image - replace with your own
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80" 
          alt="Luxurious modern living space" 
          className="w-full h-full object-cover"
          style={{
            // Applies the animation defined in the style block below
            animation: 'slowPan 40s ease-in-out infinite alternate',
            // Start slightly scaled up so the edges don't show when panning
            transform: 'scale(1.05)'
          }}
        />

        {/* Optional: A subtle gradient overlay to blend the two sections together nicely */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#35423E] to-transparent opacity-80" />
      </section>

      {/* Injecting the custom keyframes directly into the component. 
        This slowly scales and pans the image for a cinematic, high-end feel. 
      */}
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