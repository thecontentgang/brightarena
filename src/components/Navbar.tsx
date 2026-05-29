import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import BrightLogo from "/bright-logo.webp";

interface AnimatedLinkProps {
  text: string;
  index: number;
  href: string;
  onClick: () => void;
  innerRef: (el: HTMLAnchorElement | null) => void;
}

// Redesigned Link: Compact typography + Your original rolling letter animation
const AnimatedLink = ({
  text,
  index,
  href,
  onClick,
  innerRef,
}: AnimatedLinkProps) => {
  return (
    <a
      ref={innerRef}
      href={href}
      onClick={onClick}
      className="group flex items-start gap-4 md:gap-6 w-fit cursor-pointer text-[var(--color-background)]"
    >
      <span className="text-[9px] md:text-[10px] lg:text-xs opacity-50 font-body mt-2 md:mt-3 lg:mt-4">
        0{index + 1}
      </span>
      <div className="flex font-heading text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem] leading-[0.9] tracking-[-0.02em] capitalize">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="relative inline-flex overflow-hidden py-1 px-[0.01em]"
          >
            {/* TOP LETTER */}
            <span
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[115%]"
              style={{ transitionDelay: `${i * 0.02}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>

            {/* BOTTOM LETTER (Rolls up on hover) */}
            <span
              className="absolute left-[0.01em] inline-block translate-y-[115%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
              style={{ transitionDelay: `${i * 0.02}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </div>
    </a>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const infoRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Services",
    "designs",
    "Blogs",
    "Contact",
  ];

  // --- GSAP Overlay Animations ---
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
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "power4.out",
          },
          "-=0.4"
        );

        tl.fromTo(
          infoRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
      } else {
        const tl = gsap.timeline();

        tl.to(linksRef.current, {
          y: 15,
          opacity: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power3.in",
        });

        tl.to(
          infoRef.current,
          {
            y: 10,
            opacity: 0,
            duration: 0.3,
            ease: "power3.in",
          },
          "<"
        );

        tl.to(
          menuRef.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.6,
            ease: "power4.inOut",
          },
          "-=0.2"
        );
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      {/* =========================================
          MOBILE & TABLET NAVBAR (< 1024px)
      ========================================= */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-[70px] sm:h-[80px] bg-[var(--color-primary)] flex items-center justify-between px-6 sm:px-8 z-40 shadow-sm transition-all duration-300">
        <div className="pointer-events-none">
          <img
            src={BrightLogo}
            alt="Logo"
            className="h-20 w-auto object-cover top-4"
          />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 text-[var(--color-background)] cursor-pointer"
        >
          <span className="uppercase tracking-[0.2em] text-[9px] sm:text-[10px] font-medium transition-all duration-500 group-hover:tracking-[0.3em]">
            Menu
          </span>
          <div className="flex flex-col gap-[5px] items-end">
            <span className="w-6 sm:w-8 h-[1px] bg-[var(--color-background)] transition-all duration-500 group-hover:w-8 sm:group-hover:w-10" />
            <span className="w-3 sm:w-5 h-[1px] bg-[var(--color-background)] transition-all duration-500 group-hover:w-8 sm:group-hover:w-10" />
          </div>
        </button>
      </div>

      {/* =========================================
          DESKTOP FLOATING ELEMENTS (>= 1024px)
      ========================================= */}
      <div className="hidden lg:block">
        <div className="fixed top-12 -right-2 xl:-right-10 z-40 pointer-events-none">
          <img
            src={BrightLogo}
            alt="Logo"
            className="h-[120px] xl:h-[150px] w-auto object-contain rotate-90 origin-center"
          />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-40 group flex items-center gap-4 mix-blend-difference text-white cursor-pointer"
        >
          <span className="uppercase tracking-[0.35em] text-[10px] xl:text-xs font-medium transition-all duration-500 group-hover:tracking-[0.45em]">
            Menu
          </span>
          <div className="flex flex-col gap-[6px] items-end">
            <span className="w-8 h-[1px] bg-white transition-all duration-700 group-hover:w-10" />
            <span className="w-5 h-[1px] bg-white transition-all duration-700 group-hover:w-10" />
          </div>
        </button>
      </div>

      {/* =========================================
          FULL SCREEN OVERLAY MENU
      ========================================= */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-50 flex flex-col bg-[var(--color-primary)] text-[var(--color-background)] overflow-hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-auto lg:bottom-8 lg:right-8 z-50 flex items-center gap-3 text-[var(--color-background)] opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-300"
        >
          <span className="uppercase tracking-[0.3em] text-[9px] sm:text-[10px] font-medium">
            Close
          </span>
          <div className="relative w-6 h-3 flex items-center justify-center">
            <span className="absolute w-5 h-[1px] bg-[var(--color-background)] rotate-45" />
            <span className="absolute w-5 h-[1px] bg-[var(--color-background)] -rotate-45" />
          </div>
        </button>

        {/* CONTENT WRAPPER */}
        {/* Adjusted max-width and paddings to make it distinctly more compact */}
        <div className="flex-1 w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between items-start max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 pt-24 lg:pt-0 lg:py-16 overflow-y-auto overflow-x-auto lg:overflow-hidden">
          
          {/* LEFT: NAVIGATION LINKS */}
          <nav className="flex flex-col justify-center gap-2 sm:gap-3 lg:gap-3 lg:h-full mt-2 lg:mt-5">
            {menuItems.map((item, index) => (
              <div key={item} className="overflow-hidden">
                <AnimatedLink
                  text={item}
                  index={index}
                  href={
                    item.toLowerCase() === "home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  onClick={() => setIsOpen(false)}
                  innerRef={(el) => {
                    linksRef.current[index] = el;
                  }}
                />
              </div>
            ))}
          </nav>

          {/* RIGHT: CONTACT & SOCIALS */}
          <div
            ref={infoRef}
            className="mt-12 lg:mt-0 lg:h-full flex flex-col justify-end lg:justify-center items-start lg:items-end gap-8 pb-12 lg:pb-0"
          >
            {/* Contact Info Block */}
            <div className="flex flex-col gap-5 lg:text-right">
              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] opacity-40 mb-1.5">
                  Say Hello
                </p>
                <a
                  href="mailto:hello@brightarena.com"
                  className="text-sm md:text-base font-body font-light hover:opacity-70 transition-opacity"
                >
                  hello@brightarena.com
                </a>
              </div>
              
              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] opacity-40 mb-1.5">
                  Call Us
                </p>
                <a
                  href="tel:+911234567890"
                  className="text-sm md:text-base font-body font-light hover:opacity-70 transition-opacity"
                >
                  +91 123 456 7890
                </a>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] opacity-40 mb-1.5">
                  Studio Location
                </p>
                <p className="text-[13px] md:text-sm font-body font-light max-w-[180px] lg:ml-auto leading-relaxed">
                  123 Design Avenue, Jubilee Hills, Hyderabad
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 lg:text-right w-full pt-6 border-t border-[var(--color-background)]/10">
              <p className="text-[9px] uppercase tracking-[0.15em] opacity-40 mb-1">
                Socials
              </p>
              <div className="flex flex-wrap lg:justify-end gap-5 md:gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-all duration-300 relative group"
                >
                  Instagram
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-background)] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-all duration-300 relative group"
                >
                  Youtube
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-background)] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-all duration-300 relative group"
                >
                  WhatsApp
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-background)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;