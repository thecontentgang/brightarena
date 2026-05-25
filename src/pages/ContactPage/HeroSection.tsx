import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';

export default function ContactHeroSection() {
  const formRef = useRef<HTMLFormElement>(null);

  // ─── FRAMER MOTION VARIANTS (Left Side) ───
  // ─── FRAMER MOTION VARIANTS (Left Side) ───
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
    },
  };

  // ─── GSAP ANIMATION (Right Side) ───
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger the form inputs and button
      gsap.fromTo(
        '.form-element',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6, // Waits for the text to start appearing first
        }
      );
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center bg-[var(--color-primary)] text-[var(--color-background)] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* ─── LEFT COLUMN: Typography & Copy (Framer Motion) ─── */}
        <motion.div 
          className="flex flex-col justify-start self-start text-left"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-wide uppercase mb-10 font-heading"
            variants={textItemVariants}
          >
            Let's craft<br />
            a beautiful space<br />
            together
          </motion.h1>
          <motion.p 
            className="font-sans text-sm md:text-base leading-[1.6] max-w-[320px] font-light opacity-90"
            variants={textItemVariants}
          >
            There are endless ways we can create exceptional experiences for your spaces. Tell us your vision, and we can make it happen together.
          </motion.p>
        </motion.div>

        {/* ─── RIGHT COLUMN: Minimalist Form (GSAP) ─── */}
        <div className="flex flex-col justify-center lg:pl-12 xl:pl-24">
          <form ref={formRef} className="flex flex-col gap-12 w-full max-w-xl">
            
            {/* Full Name */}
            <div className="w-full form-element opacity-0">
              <input 
                type="text" 
                placeholder="Full Name"
                aria-label="Full Name"
                className="w-full bg-transparent border-b border-[var(--color-background)]/40 pb-3 text-[var(--color-background)] placeholder:text-[var(--color-background)]/70 text-sm md:text-base font-sans font-light focus:outline-none focus:border-[var(--color-background)] transition-colors rounded-none"
              />
            </div>

            {/* Email */}
            <div className="w-full form-element opacity-0">
              <input 
                type="email" 
                placeholder="Email"
                aria-label="Email"
                className="w-full bg-transparent border-b border-[var(--color-background)]/40 pb-3 text-[var(--color-background)] placeholder:text-[var(--color-background)]/70 text-sm md:text-base font-sans font-light focus:outline-none focus:border-[var(--color-background)] transition-colors rounded-none"
              />
            </div>

            {/* Phone Number */}
            <div className="w-full form-element opacity-0">
              <input 
                type="tel" 
                placeholder="Phone Number"
                aria-label="Phone Number"
                className="w-full bg-transparent border-b border-[var(--color-background)]/40 pb-3 text-[var(--color-background)] placeholder:text-[var(--color-background)]/70 text-sm md:text-base font-sans font-light focus:outline-none focus:border-[var(--color-background)] transition-colors rounded-none"
              />
            </div>

            {/* Message */}
            <div className="w-full form-element opacity-0">
              <textarea 
                rows={4}
                placeholder="Message"
                aria-label="Message"
                className="w-full bg-transparent border-b border-[var(--color-background)]/40 pb-3 text-[var(--color-background)] placeholder:text-[var(--color-background)]/70 text-sm md:text-base font-sans font-light focus:outline-none focus:border-[var(--color-background)] transition-colors rounded-none resize-y"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="form-element opacity-0 mt-2 self-start border-b border-[var(--color-background)] pb-1 uppercase tracking-[0.2em] text-xs font-semibold hover:opacity-60 transition-opacity"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}