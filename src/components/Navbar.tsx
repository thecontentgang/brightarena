import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import BrightLogo from "/bright-logo.webp";

// --- HELPER COMPONENT FOR WORD ANIMATION ---
interface AnimatedLinkProps {
  text: string;
  href: string;
  onClick: () => void;
  innerRef: (el: HTMLAnchorElement | null) => void;
}

const AnimatedLink = ({ text, href, onClick, innerRef }: AnimatedLinkProps) => {
  return (
    <a
      ref={innerRef}
      href={href}
      onClick={onClick}
      className="group flex font-heading text-[11vw] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[6rem] leading-none tracking-[-0.02em] uppercase cursor-pointer text-[var(--color-background)]"
    >
      {text.split("").map((char, i) => (
        <span key={i} className="relative inline-flex overflow-hidden py-2 px-[0.04em]">
          {/* Top Letter */}
          <span
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[115%]"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
          {/* Bottom Letter */}
          <span
            className="absolute left-[0.04em] inline-block translate-y-[115%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 opacity-100"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </a>
  );
};

// --- MAIN NAVIGATION FRAME COMPONENT ---
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const iconsRef = useRef<HTMLDivElement>(null);

  const menuItems = ["Home", "About", "Projects", "Contact"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        const tl = gsap.timeline();

        tl.to(menuRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.8,
          ease: "power4.inOut",
        });

        tl.fromTo(
          linksRef.current,
          { y: 60, opacity: 0, rotateX: 10 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.06,
            ease: "power4.out",
          },
          "-=0.3"
        );

        tl.fromTo(
          iconsRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      } else {
        const tl = gsap.timeline();

        tl.to(linksRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "power3.in",
        });

        tl.to(iconsRef.current, {
          y: 10,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        }, "<");

        tl.to(menuRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.6,
          ease: "power4.inOut",
        }, "-=0.2");
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      {/* GLOBAL FIXED LOGO (Top-Left on Mobile, Sidebar on Desktop) */}
      <div className="fixed top-6 left-6 lg:top-14 lg:left-auto lg:-right-2 xl:-right-10 z-40  pointer-events-none">
        <img
          src={BrightLogo}
          alt="Logo"
          className="h-[50px] sm:h-[45px] lg:h-[140px] xl:h-[180px] w-auto object-contain lg:rotate-90 origin-center "
        />
      </div>

      {/* MENU TRIGGER BUTTON (Top-Right on Mobile, Bottom-Right on Desktop) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 lg:top-auto lg:bottom-8 lg:right-8 z-40 group flex items-center gap-4 mix-blend-difference text-white cursor-pointer"
      >
        <span className="uppercase tracking-[0.35em] text-[10px] sm:text-xs font-medium transition-all duration-500 group-hover:tracking-[0.45em]">
          Menu
        </span>
        <div className="flex flex-col gap-[6px] items-end">
          <span className="w-8 h-[1px] bg-white transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-10" />
          <span className="w-5 h-[1px] bg-white transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-10" />
        </div>
      </button>

      {/* FULL SCREEN OVERLAY */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 flex flex-col bg-[var(--color-primary)] text-[var(--color-background)] overflow-hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {/* CLOSE BUTTON - Mirrors Menu Trigger Positioning exactly */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 lg:top-auto lg:bottom-8 lg:right-8 z-50 flex items-center gap-4 text-[var(--color-background)] opacity-80 hover:opacity-100 cursor-pointer"
        >
          <span className="uppercase tracking-[0.35em] text-[10px] sm:text-xs font-medium">
            Close
          </span>
          <div className="relative w-8 h-4 flex items-center justify-center">
            <span className="absolute w-6 h-[1px] bg-[var(--color-background)] rotate-45" />
            <span className="absolute w-6 h-[1px] bg-[var(--color-background)] -rotate-45" />
          </div>
        </button>

        {/* CONTENT WRAPPER */}
        <div className="flex-1 flex flex-col items-center justify-center relative w-full px-4">
          {/* MAIN LINKS */}
          <nav>
            <ul className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
              {menuItems.map((item, index) => (
                <li key={item} className="overflow-visible">
                  <AnimatedLink
                    text={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    innerRef={(el) => {
                      linksRef.current[index] = el;
                    }}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* ICONS CONTAINER */}
         {/* SOCIAL / CONTACT ICONS */}
          <div
            ref={iconsRef}
            className="flex justify-center items-center gap-8 sm:gap-10 mt-12 sm:mt-16 opacity-80"
          >
            {/* INSTAGRAM ICON */}
            <a 
              href="https://instagram.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="hover:opacity-100 hover:scale-110 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            
            {/* YOUTUBE ICON */}
            <a 
              href="https://youtube.com/yourchannel" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube" 
              className="hover:opacity-100 hover:scale-110 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 7.1c.1-1.3 1.2-2.4 2.5-2.5C7.9 4.3 12 4.3 12 4.3s4.1 0 7 .3c1.3.1 2.4 1.2 2.5 2.5.3 1.5.3 4.6.3 4.6s0 3.1-.3 4.6c-.1 1.3-1.2 2.4-2.5 2.5-2.9.3-7 .3-7 .3s-4.1 0-7-.3c-1.3-.1-2.4-1.2-2.5-2.5C2.2 14.8 2.2 11.7 2.2 11.7s0-3.1.3-4.6z"/>
                <polygon points="10 8 16 11.7 10 15.4 10 8"/>
              </svg>
            </a>
            
            {/* WHATSAPP ICON */}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp" 
              className="hover:opacity-100 hover:scale-110 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;