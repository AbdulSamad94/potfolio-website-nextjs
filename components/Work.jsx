"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

const projectData = [
  {
    image: "/work/work1.png",
    category: "React.js",
    name: "E-commerce Website",
    description:
      "E-commerce website built with React.js, Tailwind CSS, and Framer-Motion..",
    link: "https://e-commerce-website1-lac.vercel.app/",
  },
  {
    image: "/work/work2.png",
    category: "React.js",
    name: "BrainWave Animated Website",
    description:
      "BrainWave is an animated website built with React.js, Tailwind CSS, and Framer-Motion..",
    link: "https://brainwave-clone-six.vercel.app/",
  },
  {
    image: "/work/work3.png",
    category: "React.js",
    name: "Virtual Animated Website",
    description:
      "Virtual is an animated website built with React.js, Tailwind CSS, and CSS Animation.",
    link: "https://virtual-site-react-animation.vercel.app/",
  },
  {
    image: "/work/work4.png",
    category: "HTML, CSS",
    name: "University Website",
    description: "University website built with HTML, CSS, and JavaScript.",
    link: "https://university-website1.vercel.app/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-14 lg:mb-32">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        {/* Text */}
        <div className="w-full mx-2 text-center mb-12 lg:h-[400px] flex flex-col justify-center items-center lg:items-start lg:text-left">
          <h2 className="section-words mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Here are my all latest projects that i have made.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="lg:w-[800px] mx-5 lg:mx-auto">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;