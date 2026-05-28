import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import BrightLogo from "/bright-logo.webp";

interface AnimatedLinkProps {
  text: string;
  href: string;
  onClick: () => void;
  innerRef: (el: HTMLAnchorElement | null) => void;
}

const AnimatedLink = ({
  text,
  href,
  onClick,
  innerRef,
}: AnimatedLinkProps) => {
  return (
    <a
      ref={innerRef}
      href={href}
      onClick={onClick}
      className="
        group
        flex
        font-heading
        text-[1.8rem]
        sm:text-[2.2rem]
        md:text-[2.7rem]
        lg:text-[3.2rem]
        xl:text-[3.8rem]
        leading-none
        tracking-[-0.05em]
        uppercase
        whitespace-nowrap
        cursor-pointer
        text-[var(--color-background)]
      "
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="
            relative
            inline-flex
            overflow-hidden
            py-1
            px-[0.03em]
          "
        >
          {/* TOP LETTER */}
          <span
            className="
              inline-block
              transition-transform
              duration-500
              ease-[cubic-bezier(0.76,0,0.24,1)]
              group-hover:-translate-y-[115%]
            "
            style={{
              transitionDelay: `${i * 0.02}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>

          {/* BOTTOM LETTER */}
          <span
            className="
              absolute
              left-[0.03em]
              inline-block
              translate-y-[115%]
              transition-transform
              duration-500
              ease-[cubic-bezier(0.76,0,0.24,1)]
              group-hover:translate-y-0
            "
            style={{
              transitionDelay: `${i * 0.02}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </a>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const linksRef = useRef<(HTMLAnchorElement | null)[]>(
    []
  );

  const iconsRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Services",
    "Blogs",
    "Designs",
    "Contact",
  ];

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
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "power4.out",
          },
          "-=0.3"
        );

        tl.fromTo(
          iconsRef.current,
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5"
        );
      } else {
        const tl = gsap.timeline();

        tl.to(linksRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "power3.in",
        });

        tl.to(
          iconsRef.current,
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
      {/* LOGO */}
      <div
        className="
          fixed
          top-6
          left-6
          lg:top-14
          lg:left-auto
          lg:-right-2
          xl:-right-10
          z-40
          pointer-events-none
        "
      >
        <img
          src={BrightLogo}
          alt="Logo"
          className="
            h-[72px]
sm:h-[95px]
md:h-[110px]
lg:h-[140px]
xl:h-[180px]
            w-auto
            object-contain
            lg:rotate-90
            origin-center
          "
        />
      </div>

      {/* MENU BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed
          top-6
          right-6
          lg:top-auto
          lg:bottom-8
          lg:right-8
          z-40
          group
          flex
          items-center
          gap-4
          mix-blend-difference
          text-white
          cursor-pointer
        "
      >
        <span
          className="
            uppercase
            tracking-[0.35em]
            text-[10px]
            sm:text-xs
            font-medium
            transition-all
            duration-500
            group-hover:tracking-[0.45em]
          "
        >
          Menu
        </span>

        <div className="flex flex-col gap-[6px] items-end">
          <span
            className="
              w-8
              h-[1px]
              bg-white
              transition-all
              duration-700
              group-hover:w-10
            "
          />

          <span
            className="
              w-5
              h-[1px]
              bg-white
              transition-all
              duration-700
              group-hover:w-10
            "
          />
        </div>
      </button>

      {/* OVERLAY */}
      <div
        ref={menuRef}
        className="
          fixed
          inset-0
          z-50
          flex
          flex-col
          bg-[var(--color-primary)]
          text-[var(--color-background)]
          overflow-hidden
        "
        style={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
      >

        {/* CLOSE */}
        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute
            top-6
            right-6
            lg:top-auto
            lg:bottom-8
            lg:right-8
            z-50
            flex
            items-center
            gap-4
            text-[var(--color-background)]
            opacity-80
            hover:opacity-100
            cursor-pointer
          "
        >
          <span
            className="
              uppercase
              tracking-[0.35em]
              text-[10px]
              sm:text-xs
              font-medium
            "
          >
            Close
          </span>

          <div
            className="
              relative
              w-8
              h-4
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                absolute
                w-6
                h-[1px]
                bg-[var(--color-background)]
                rotate-45
              "
            />

            <span
              className="
                absolute
                w-6
                h-[1px]
                bg-[var(--color-background)]
                -rotate-45
              "
            />
          </div>
        </button>

        {/* CONTENT */}
        <div
          className="
            flex-1
            flex
            items-center
            justify-center
            relative
            w-full
            px-5
            md:px-10
            lg:px-16
          "
        >

          {/* NAVIGATION */}
          <nav className="w-full max-w-[900px]">

            <ul
             className="
  grid
  grid-cols-1
  sm:grid-cols-2
  gap-x-6
  md:gap-x-10
  lg:gap-x-14
  gap-y-5
  md:gap-y-6
  items-center
  justify-items-center
"
            >

              {menuItems.map((item, index) => (
                <li
                  key={item}
                  className="overflow-hidden"
                >

                  <AnimatedLink
                    text={item}
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

                </li>
              ))}

            </ul>

          </nav>

          {/* SOCIALS */}
          <div
            ref={iconsRef}
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              flex
              justify-center
              items-center
              gap-8
              opacity-70
              text-[10px]
              uppercase
              tracking-[0.25em]
            "
          >

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:opacity-100
                transition-all
                duration-300
              "
            >
              Instagram
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:opacity-100
                transition-all
                duration-300
              "
            >
              Youtube
            </a>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:opacity-100
                transition-all
                duration-300
              "
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>
    </>
  );
};

export default Navigation;