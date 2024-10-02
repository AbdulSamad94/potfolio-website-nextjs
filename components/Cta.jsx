import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-12 lg:py-24 bg-orange-50 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Want to turn your ideas into reality? I'm here to help.
          </h2>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
