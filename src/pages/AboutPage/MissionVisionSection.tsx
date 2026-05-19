export default function MissionVisionSection() {
  const missionPoints = [
    {
      title: "Co-creation",
      desc: "We believe that impactful design creates spaces that are an extension of the individual. We curate and build the perfect environment alongside you—ensuring your vision remains at the heart of every structural decision.",
      icon: "✦" // Replace with your icon component if needed
    },
    {
      title: "Sustainability",
      desc: "Our commitment to the environment is foundational. We integrate eco-conscious practices and responsibly sourced materials, ensuring your living space enriches both your lifestyle and the planet at large.",
      icon: "◈"
    },
    {
      title: "Quality",
      desc: "We partner with the world’s most avant-garde collaborators and manufacturers. From the structural foundation to the final finish, we utilize only the most premium materials. We settle for nothing less.",
      icon: "⬡"
    }
  ];

  return (
    <section className="w-full bg-[#3A393F] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-[#F4EDDB] text-xl md:text-2xl font-light mb-16 tracking-wide">
          What truly matters to us
        </h2>

        {/* Mission/Vision Rows */}
        <div className="flex flex-col">
          {missionPoints.map((point, index) => (
            <div 
              key={index} 
              className="py-12 border-t border-[#E1D4D3]/10 flex flex-col md:flex-row items-start gap-8 md:gap-16 group"
            >
              {/* Icon Container */}
              <div className="text-[#F4EDDB]/60 text-2xl mt-1">
                {point.icon}
              </div>

              {/* Title */}
              <div className="w-full md:w-1/3">
                <h3 
                  className="text-[#F4EDDB] text-3xl md:text-4xl font-heading"
                  
                >
                  {point.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="font-body text-[#E1D4D3]/80 text-sm md:text-base leading-relaxed max-w-lg font-light">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
          
          {/* Final border to close the section */}
          <div className="border-t border-[#E1D4D3]/10" />
        </div>
      </div>
    </section>
  );
}