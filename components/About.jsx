import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const info = [
  {
    icon: <User2 size={20} />,
    text: "Abdul Samad Siddiqui",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 3132959809",
  },
  {
    icon: <MailIcon size={20} />,
    text: "abdulsamadsiddiqui2000@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "B.O.D 11 Feb, 2008",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "SSC In Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Karachi, Pakistan",
  },
];

const qualifications = [
  {
    title: "Education",
    data: [
      {
        school: "Jinnah Govt. Boys College",
        qualification: "HSC",
        year: "2024 to Present",
      },
      {
        school: "Bilal Public School",
        qualification: "SSC",
        year: "2022 to 2024",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "CodeAlpha",
        role: "Frontend Developer",
        qualification: "Internship",
        year: "4 months (2024)",
      },
      {
        Company: "Governor House Sindh",
        role: "Full Stack Developer",
        qualification: "Student",
        year: "2024-Present",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Skills",
    data: [
      {
        name: "Next JS, React JS, Framer-Motion",
      },
      {
        name: "Frontend Development",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        ImgPath: "/about/vscode.svg",
      },
      {
        ImgPath: "/about/figma.svg",
      },
      {
        ImgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="lg:h-[860px] pb-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="section-words mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div className="w-full flex justify-center items-center">
            <Tabs defaultValue="Personal-Info" className="w-[800px] ">
              <TabsList className=" grid justify-center xl:grid-cols-3 xl:border dark:md:border-none gap-x-14">
                <TabsTrigger className="w-[162px]" value="Personal-Info">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="Qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="Skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Content */}
              <div className="text-lg mt-12 lg:mt-18 mx-4">
                <TabsContent value="Personal-Info">
                  <div className="flex justify-center flex-col text-center xl:text-left">
                    <h3 className="h3 mb-4">Personal Info</h3>
                    <p className="subtitle w-auto mx-auto xl:mx-0">
                      I offer front-end development services, specializing in
                      building fast, responsive websites using Next.js, React,
                      and TailwindCSS. From clean code to smooth animations with
                      Framer Motion, I create seamless, interactive experiences.
                      Whether you need custom web applications, performance
                      optimization, or stunning UI/UX, I’m here to bring your
                      vision to life.
                    </p>
                    {/* Icons */}
                    <div className="grid xl:place-items-start grid-cols-2  gap-x-14 gap-y-4 mb-12 mt-10">
                      {info.map((items, index) => (
                        <div className="flex gap-x-4" key={index}>
                          <div className=" text-primary">{items.icon}</div>
                          <div className=" text-xs lg:text-sm">
                            {items.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <p className="text-primary h4">Language Skills</p>
                      <div className="border-b border-border"></div>
                      <p className="text-base">English, Urdu, Hindi</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center lg:text-left">
                      My Journey
                    </h3>
                    {/* education & experience */}
                    <div className="flex flex-col justify-between lg:flex-row gap-x-28">
                      {/*1st experiences */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex mt-9 gap-x-4 items-center text-primary text-[22px]">
                          <Briefcase />
                          <h4 className="h4 text-medium capitalize">
                            {getData(qualifications, "Experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="mt-8 ">
                          {getData(qualifications, "Experience").data.map(
                            (item, index) => {
                              const { Company, year, role, qualification } =
                                item;
                              return (
                                <div className="group" key={index}>
                                  <div className="font-semibold text-xl relative leading-none mb-2">
                                    <div className="bg-orange-600  w-[10px] h-[10px] rounded-full absolute left-[-35px] z-10 transition-all duration-500 top-1/2 -translate-y-1/2 group-hover:top-[85px]"></div>
                                    <div className="h-[75px] w-[2px] bg-slate-300 absolute top-[15px] -left-[31px]"></div>
                                    {Company}
                                  </div>
                                  <div className="text-lg font-medium leading-none mb-4">
                                    {role}
                                    {" - "}
                                    <span className="text-base text-muted font-medium">
                                      {qualification}
                                    </span>
                                  </div>
                                  <div className="text-base text-muted-foreground mb-10">
                                    {year}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/*2nd education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex mt-10 gap-x-4 items-center text-primary text-[22px]">
                          <GraduationCap />
                          <h4 className="h4 text-medium capitalize">
                            {getData(qualifications, "Education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="mt-8">
                          {getData(qualifications, "Education").data.map(
                            (item, index) => {
                              const { school, year, qualification } = item;
                              return (
                                <div className="group" key={index}>
                                  <div className="font-semibold text-xl relative leading-none mb-2">
                                    <div className="bg-orange-600  w-[10px] h-[10px] rounded-full absolute left-[-35px] z-10 transition-all duration-500 top-1/2 -translate-y-1/2 group-hover:top-[85px]"></div>
                                    <div className="h-[75px] w-[2px] bg-slate-300 absolute top-[15px] -left-[31px]"></div>
                                    {school}
                                  </div>
                                  <div className="text-lg font-medium leading-none mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base text-muted-foreground mb-10">
                                    {year}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    <div>education</div>
                  </div>
                </TabsContent>
                <TabsContent value="Skills">Skills Information</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
