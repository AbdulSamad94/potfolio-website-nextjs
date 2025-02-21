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
    image: "/work/work10.png",
    category: "Next.js",
    name: "Full Stack Blog Application",
    description:
      "Full Stack Blog Application built with Next.js, React.js, MongoDB & TailwindCSS.",
    link: "https://blog-fully-functional.vercel.app/",
  },
  {
    image: "/work/work4.png",
    category: "Next.js",
    name: "E-commerce Website",
    description:
      "Fully functional E-commerce website built with Next.js & TailwindCSS.",
    link: "https://e-commerce-marketplace-ten.vercel.app/",
  },
  {
    image: "/work/work1.png",
    category: "React.js",
    name: "E-commerce Website",
    description:
      "E-commerce website built with React.js, Tailwind CSS & Framer-Motion.",
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
    image: "/work/simple_blog.png",
    category: "Next.js",
    name: "Animated Blog Site",
    description:
      "Animated Blog Site built with Next.js & TailwindCSS from Figma design.",
    link: "https://simple-blog-eight-ashy.vercel.app/",
  },
];

const Work = () => {
  return (
    <section className="relative my-14 lg:my-32 mx-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        {/* Text */}
        <div className="w-auto mx-2 text-center mb-12 lg:h-[400px] flex flex-col justify-center items-center lg:items-start lg:text-left">
          <h2 className="section-words mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Here are my all latest projects that i have made.
          </p>
          <Link href="/projects">
            <Button>See All Projects</Button>
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
            {projectData.slice(0, 5).map((project, index) => {
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
