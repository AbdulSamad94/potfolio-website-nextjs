import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Social from "./Social";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col items-center gap-y-32">
            <Logo forClosing={() => setIsOpen(false)} />
            <Navbar
              containerStyles={"flex flex-col gap-y-10 items-center"}
              linkStyles={
                "text-2xl tracking-widest font-bold hover:text-primary transition-all"
              }
              forClosing={() => setIsOpen(false)}
            />
            <Social
              containerStyles={"flex gap-x-4"}
              iconsStyle={"text-2xl hover:text-primary transition-all"}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveNavbar;
