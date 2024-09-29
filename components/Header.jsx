"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import ThemeTogller from "./ThemeTogller";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYposs = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYposs);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        header
          ? "bg-transparent backdrop-blur-md shadow-lg dark:bg-transparent py-4"
          : "dark:bg-transparent  py-6"
      } ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-10">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden md:flex gap-x-6 items-center"
              linkStyles="relative hover:text-primary transition-all"
              UnderlineStyles="absolute top-full left-0 w-full h-[2px] bg-primary"
            />
            <ThemeTogller />
            <div className="md:hidden">
              <ResponsiveNavbar />
            </div>
          </div>
        </div>
      </div>
      </header>
  );
};

export default Header;
