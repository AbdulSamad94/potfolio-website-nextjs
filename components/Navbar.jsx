import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const Navbar = ({ containerStyles, linkStyles, UnderlineStyles, forClosing }) => {
  const pathname = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${linkStyles}`}
          onClick={forClosing}
        >
          {link.path === pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              layoutId="underline"
              transition={{ type: "tween" }}
              className={UnderlineStyles}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
