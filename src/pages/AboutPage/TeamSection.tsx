export default function TeamSection() {
  const founders = [
    {
      name: "Niveditha Reddy",
      role: "Co-Founder & Chief Executive Officer",
      description:
        "Niveditha Reddy is the creative force behind Bright Arena, bringing a refined vision for luxury interiors and modern living spaces. With a strong background in architecture and interior design, she focuses on creating timeless spaces that combine elegance, comfort, and functionality.",
    },
    {
      name: "Anand Gunjur",
      role: "Co-Founder & Director of Operations",
      description:
        "Anand Gunjur leads the operational and strategic growth of Bright Arena with extensive experience in business management and global operations. His expertise in execution, client relationships, and project coordination ensures every project is delivered with excellence and precision.",
    },
  ];

  return (
    <section className="w-full bg-[#F4EDDB] px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-[#3A393F] text-3xl md:text-4xl font-light tracking-wide mb-6">
            Meet The Founders
          </h2>

          <div className="w-full h-[1px] bg-[#3A393F]/20" />
        </div>

        {/* Founders */}
        <div className="space-y-28">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Placeholder Image */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden  shadow-xl aspect-[4/5] bg-[#E7DED2] flex items-center justify-center border border-[#3A393F]/10">
                  
                  <div className="text-center px-6">
                    {/* Avatar Placeholder */}
                    <div className="w-20 h-20 rounded-full bg-[#3A393F]/10 mx-auto mb-6 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-[#3A393F]/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 1115 0"
                        />
                      </svg>
                    </div>

                    <p className="text-[#3A393F]/60 text-sm uppercase tracking-[0.3em]">
                      Founder Image
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7">
                <p className="text-[#275A53] uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
                  Founder
                </p>

                <h3 className="text-[#3A393F] text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                  {founder.name}
                </h3>

                <p className="text-[#3A393F]/60 uppercase tracking-[0.2em] text-sm mb-8">
                  {founder.role}
                </p>

                <p className="text-[#3A393F]/80 text-sm md:text-base leading-[2] font-light max-w-2xl">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}