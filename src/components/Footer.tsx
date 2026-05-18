"use client";

import { motion } from "framer-motion";

const NAV_LINKS = ["Home", "About", "Collections", "Contact"];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary)] text-[var(--color-background)] px-8 sm:px-14 lg:px-24 xl:px-32 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        {/* ── TOP SECTION: Multi-column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            {/* The invert class ensures the logo appears light on the dark background. 
                Remove 'invert' if your logo file is already white/light. */}
            <img 
              src="/bright-logo.webp" 
              alt="Bright Arena" 
              className="w-48 sm:w-56 lg:w-64 opacity-90" 
            />
          </motion.div>

          {/* Address Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-background)]/40 font-semibold mb-5">
              Headquarters
            </span>
            <p className="text-[var(--color-background)]/80 text-[14px] leading-[1.85] font-light max-w-[340px]">
              4th Floor, 23 Nordwest, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500081
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-background)]/40 font-semibold mb-5">
              Number
            </span>
            <p className="text-[var(--color-background)]/80 text-[14px] leading-[1.85] font-light max-w-[340px]">
              +91-8978222980
            </p>
            
            
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col lg:pl-10"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-background)]/40 font-semibold mb-5">
              Navigation
            </span>
            <nav className="flex flex-col gap-3.5" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-[13px] uppercase tracking-[0.18em] font-light text-[var(--color-background)]/70 hover:text-[var(--color-background)] hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>

        </div>

        {/* ── BOTTOM SECTION: Legal & Credits ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          {/* Subtle Hairline Divider */}
          <div className="w-full h-px bg-[var(--color-background)]/10" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] sm:text-[11px] font-light text-[var(--color-background)]/40 tracking-[0.15em] uppercase">
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 sm:gap-10">
              <a href="#" className="hover:text-[var(--color-background)]/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--color-background)]/80 transition-colors">
                Terms &amp; Conditions
              </a>
            </div>

            {/* Developer Credit */}
            <div className="tracking-[0.1em]">
              Designed and developed by{" "}
              <a 
                href="#" 
                className="text-[var(--color-background)]/60 hover:text-[var(--color-background)] transition-colors font-medium"
              >
                parentheses.studio
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}