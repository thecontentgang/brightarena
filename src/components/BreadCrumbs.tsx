import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs(): React.JSX.Element | null {
  const location = useLocation();
  const { pathname } = location;

  // Hide breadcrumbs entirely on the homepage
  if (pathname === "/") return null;

  // Split path into segments and clean up empty elements
  const pathSegments: string[] = pathname.split("/").filter((segment) => segment);

  return (
    
    <nav 
      aria-label="Breadcrumb" 
      className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 md:px-12 lg:px-24 pt-6 md:pt-8 pointer-events-none"
    >
      {/* Added `pointer-events-auto` here so links remain clickable, while the empty space around them doesn't block underlying elements */}
      <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-xs md:text-sm tracking-wide pointer-events-auto">
        {/* Absolute Home Node */}
        <li>
          <Link 
            to="/" 
            className="text-[white]/60 hover:text-[white] font-light transition-colors"
          >
            Home
          </Link>
        </li>

        {/* Dynamically parsed loop mapping through router array */}
        {pathSegments.map((segment: string, index: number) => {
          // Construct targeted URL route step-by-step
          const to: string = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast: boolean = index === pathSegments.length - 1;
          
          // Replaces hyphens with spaces for a natural readable look
          const label: string = decodeURIComponent(segment).replace(/-/g, " ");

          return (
            <li key={to} className="flex items-center space-x-2">
              <span className="text-[white]/30 text-[10px] select-none" aria-hidden="true">
                /
              </span>
              {isLast ? (
                // Active/Current terminal node
                <span 
                  aria-current="page" 
                  className="text-[white] font-medium capitalize"
                >
                  {label}
                </span>
              ) : (
                // Walkable parent link route
                <Link
                  to={to}
                  className="text-[white]/60 hover:text-[white] font-light transition-colors capitalize"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}