import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs(): React.JSX.Element | null {
  const location = useLocation();
  const { pathname } = location;

  // Hide breadcrumbs entirely on the homepage
  if (pathname === "/") return null;

  // Split path into segments and clean up empty elements
  const pathSegments: string[] = pathname.split("/").filter((segment) => segment);

  // Responsive Styles for the text blocks
  // Mobile/Tablet: Vertical right-to-left layout | Desktop: Standard horizontal flow
  const verticalTextStyles: React.CSSProperties = {
    writingMode: window.innerWidth < 1024 ? "vertical-rl" : "horizontal-tb",
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="fixed top-[90px] sm:top-[100px] right-0 w-auto h-auto z-50 bg-transparent pr-6 md:pr-4 pointer-events-none lg:absolute lg:top-0 lg:left-0 lg:right-auto lg:w-full lg:h-auto lg:mt-0 lg:px-12  lg:pt-8 lg:pr-0"
    >
      <ol className="flex flex-col items-center space-y-4 text-[10px] md:text-xs tracking-[0.2em] uppercase pointer-events-auto lg:flex-row lg:items-center lg:space-y-0 lg:space-x-2 lg:text-sm lg:max-w-7xl lg:mx-auto lg:tracking-widest">
        
        {/* Absolute Home Node */}
        <li className="flex items-center">
          <Link 
            to="/" 
            className="text-[white]/60 hover:text-[white] font-light transition-colors select-none"
            style={verticalTextStyles}
          >
            Home
          </Link>
        </li>

        {/* Dynamically parsed loop mapping through router array */}
        {pathSegments.map((segment: string, index: number) => {
          const to: string = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast: boolean = index === pathSegments.length - 1;
          const label: string = decodeURIComponent(segment).replace(/-/g, " ");

          return (
            <React.Fragment key={to}>
              
              <span className="text-[white]/30 text-[9px] select-none py-1 lg:py-0" aria-hidden="true">
                <span className="lg:hidden">•</span>
                <span className="hidden lg:inline">/</span>
              </span>
              
              <li className="flex items-center">
                {isLast ? (
                  <span 
                    aria-current="page" 
                    className="text-[white] font-medium capitalize"
                    style={verticalTextStyles}
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-[white]/60 hover:text-[white] font-light transition-colors capitalize"
                    style={verticalTextStyles}
                  >
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}