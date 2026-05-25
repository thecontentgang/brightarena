import React from 'react';

export default function ShowroomSection() {
  return (
    <section className="w-full bg-[var(--color-background)] text-[var(--color-primary)] py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 xl:px-24 font-sans selection:bg-[var(--color-primary)] selection:text-[var(--color-background)]">
      <div className="max-w-[1600px] mx-auto">

        {/* ─── TOP HEADER ROW (Side-by-side on Tab & Desktop) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24 lg:mb-32">

          {/* Left Title */}
          <div className="md:col-span-4">
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] font-medium opacity-60 md:mt-3">
              Our Showroom
            </h2>
          </div>

          {/* Right Address Block */}
          <div className="md:col-span-8 flex flex-col md:flex-row gap-10 lg:gap-20 xl:gap-32">
            
            {/* City */}
            <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-light tracking-wide shrink-0 leading-none font-heading">
              Hyderabad
            </h3>

            {/* Address Details */}
            <div className="flex flex-col gap-6 max-w-lg lg:pt-3">
              
              <h4 className="text-xl md:text-2xl tracking-wide font-normal text-[var(--color-primary)] mb-2 font-heading">
                Bright Arena Interiors
              </h4>

              <div className="text-base md:text-lg leading-[1.9] font-light opacity-75">
                <p>4th Floor, 23 Nordwest</p>
                <p>P Janardhan Reddy Nagar, Gachibowli</p>
                <p>Hyderabad, Telangana 500081</p>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <a
                  href="tel:+918978222980"
                  className="text-xl md:text-2xl font-light tracking-wider hover:opacity-75 transition-opacity duration-300 w-fit"
                >
                  +91 8978 222 980
                </a>
                <a
                  href="mailto:info@brightarenainteriors.com"
                  className="text-sm md:text-base font-light opacity-60 hover:opacity-100 transition-opacity duration-300 w-fit"
                >
                  info@brightarenainteriors.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM MEDIA ROW (Full width underneath both on Tab/Desktop) ─── */}
        <div className="w-full flex flex-col gap-6">
          
          {/* Map Block - Spans 100% of the container */}
          <div className="w-full aspect-[4/3] md:aspect-[21/9] lg:aspect-[3/1] bg-[#e5e3df] overflow-hidden relative shadow-2xl rounded-sm group">
            
            {/* Interactive Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps?q=Bright+Arena+Interiors,+23+Nordwest,+Gachibowli,+Hyderabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bright Arena Interiors Map"
              className="w-full h-full opacity-80 hover:grayscale-0 hover:mix-blend-normal hover:opacity-100 transition-all duration-700 ease-out"
            ></iframe>
            
          </div>

          {/* Interactive "Get Directions" Link mapping directly to navigation */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Bright+Arena+Interiors,+Gachibowli,+Hyderabad&destination_place_id=ChIJ15I0xE-TyzsRaPgpuE7Sr7Q" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-4 text-sm md:text-base font-light opacity-70 hover:opacity-100 transition-opacity w-fit group py-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] group-hover:scale-150 transition-transform duration-300"></span>
            Get directions
          </a>
          
        </div>

      </div>
    </section>
  );
}