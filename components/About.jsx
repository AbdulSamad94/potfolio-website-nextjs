import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";

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
    text: "abdulsamadwork109@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "D.O.B 11 Feb, 2008",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "HSC In CS",
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
        role: "Agentic AI developer",
        qualification: "Student Leader",
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
        name: "Next JS",
        icon: <RiNextjsFill size={20} />,
      },
      {
        name: "React JS",
        icon: <FaReact size={20} />,
      },
      {
        name: "Node.js",
        icon: <DiNodejs size={50} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={20} />,
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion size={20} />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill size={20} />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        ImgPath: "/about/vscode.svg",
        name: "VS Code Editor",
      },
      {
        ImgPath: "/about/figma.svg",
        name: "Figma",
      },
      {
        ImgPath: "/about/wordpress.svg",
        name: "Wordpress",
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
            <Tabs
              defaultValue="Personal-Info"
              className="w-[800px] flex justify-center items-center flex-col"
            >
              <TabsList className=" grid justify-between place-items-center xl:grid-cols-3 xl:border dark:md:border-none lg:gap-x-14 gap-y-3">
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
                {/* Personal Info */}
                <TabsContent value="Personal-Info">
                  <div className="flex justify-center items-center flex-col text-center xl:text-left">
                    <h3 className="h3 mb-4 text-center">Personal Info</h3>
                    <p className="subtitle w-auto mx-auto xl:mx-0 text-center">
                      I am 17 years old and live in Karachi, Pakistan. As a
                      computer science student at Jinnah College, I'm in my
                      first year (HHC Part 1), and I'm also learning about
                      Agentic AI at Governor House IT initiative.
                    </p>
                    {/* Icons */}
                    <div className="grid xl:place-items-start grid-cols-2 text-wrap text-center gap-x-10 gap-y-4 mb-12 mt-10">
                      {info.map((items, index) => (
                        <div className="flex gap-x-2 text-center" key={index}>
                          <div className=" text-primary">{items.icon}</div>
                          <div className="break-words break-all text-xs lg:text-sm text-center">
                            {items.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <p className="text-primary h4">Language Skills</p>
                      <div className="border-b border-border dark:border-white"></div>
                      <p className="text-base">English, Urdu, Hindi</p>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifivation */}
                <TabsContent value="Qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center">My Journey</h3>
                    {/* education & experience */}
                    <div className="flex flex-col justify-between lg:flex-row gap-x-28">
                      {/*1st experiences */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-primary text-[22px]">
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
                                    <span className="text-base text-muted dark:text-white">
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
                        <div className="flex gap-x-4 items-center text-primary text-[22px]">
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
                                    <div className="h-[65px] w-[2px] bg-slate-300 absolute top-[15px] -left-[31px]"></div>
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
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="Skills">
                  <div className="text-center">
                    <h3 className="h3 mb-8">Tools that i use everyday</h3>
                    <div className="mb-16">
                      <h4 className="h4 text-foreground mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills List */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 place-items-start lg:place-items-center gap-4 mx-auto lg:mx-0">
                        {getData(skillsData, "Skills").data.map(
                          (item, index) => {
                            return (
                              <div
                                className="flex items-center lg:mx-0 "
                                key={index}
                              >
                                <div className="text-primary mr-5">
                                  {item.icon}
                                </div>
                                <p className="font-medium">{item.name}</p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="mt-20">
                      <h4 className="h4 text-foreground mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="grid grid-cols-3 place-items-center mt-10 gap-4 mx-auto lg:mx-0">
                        {getData(skillsData, "Tools").data.map(
                          (item, index) => {
                            return (
                              <div
                                className="text-center flex flex-col items-center lg:flex-row"
                                key={index}
                              >
                                <Image
                                  src={item.ImgPath}
                                  width={50}
                                  height={50}
                                  priority
                                  alt="icons"
                                />
                                <p className="font-medium mt-2 lg:ml-2">
                                  {item.name}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
