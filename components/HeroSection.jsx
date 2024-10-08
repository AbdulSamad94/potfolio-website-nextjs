"use client";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import Link from "next/link";

import { RiBriefcase4Fill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

import DevImg from "./DevImg";
import Social from "./Social";
import Badge from "./Badge";

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section className="py-12 mb-20 lg:mb-8 h-[120vh] lg:h-[] xl-pt-28 bg-hero-pattern bg-no-repeat bg-bottom  bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center items xl:text-left">
            <h1 className="text-sm uppercase font-semibold mb-4 text-primary tracking-widest">
              Front-End Web Developer
            </h1>
            <h1 className="h1 mb-4">Hello, my name is Abdul Samad</h1>
            <p className="subtitle max-w-[500px] mx-auto xl:mx-0">
              I'm a Front-End Developer specialized in building fast, responsive
              and modern websites with Next.js, React, and Framer Motion. I
              focus on delivering clean code and smooth animations using
              TypeScript, JavaScript, and TailwindCSS. Let’s create seamless,
              interactive experiences together.
            </p>
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
              <Link href="/contact">
                <Button>
                  Contact Me <Send size={16} className="ml-2" />
                </Button>
              </Link>
              <Link onClick={handleDownload}>
                <Button variant="secondary">
                  Download CV <Download size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            <Social iconsStyle="text-foreground text-[22px] hover:text-primary transition-all" />
          </div>
          <div className="hidden xl:flex relative ">
            <Badge
              containerStyles="absolute top-[10%] right-0"
              icons={<RiBriefcase4Fill />}
              textOfBadge="Years of experience"
              endCountNumber={1}
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[50px]"
              icons={<RiTodoFill />}
              textOfBadge="Projects Completed"
              endCountNumber={40}
              sign="+"
            />
            <div className="bg-hero-shape-light dark:bg-hero-shape-dark w-[510px] h-[510px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              imgSrc="/hero/myPic.png"
              containerStyles="bg-hero-shape w-[509px] h-[462px] bg-no-repeat relative bg-bottom"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
