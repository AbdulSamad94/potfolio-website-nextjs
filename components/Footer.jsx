import React from "react";
import Social from "./Social";
const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center">
          <div className="flex gap-x-6 mx-auto lg:mx-3 mb-4">
            <Social iconsStyle="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all" />
          </div>
          <p className="text-muted-foreground text-center">
            Copyright &copy; Abdul Samad. 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
