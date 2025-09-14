"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, EffectCards, Autoplay } from "swiper/modules";
import { projectData2 as projectData } from "@/lib/utils/variables";
import { ArrowRight, Sparkles } from "lucide-react";

const Work = () => {
  return (
    <section className="relative my-20 lg:my-40 mx-4">
      {/* Background gradient */}
      <div className="absolute inset-0 blur-3xl -z-10"></div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Enhanced Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-amber-800 dark:from-gray-100 dark:via-orange-200 dark:to-amber-200 bg-clip-text text-transparent leading-tight">
                Latest Projects
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Discover my most recent work showcasing innovative solutions and
                creative designs that push boundaries.
              </p>
            </div>

            <Link href="/projects" className="inline-block">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Enhanced Slider Section */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative">
              <Swiper
                className="h-[520px] lg:h-[480px] !pb-12"
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 1.5,
                  },
                  1024: {
                    slidesPerView: 1.8,
                  },
                }}
                spaceBetween={24}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  bulletClass:
                    "swiper-pagination-bullet !bg-orange-500 !opacity-50",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active !bg-orange-600 !opacity-100 !scale-125",
                }}
              >
                {projectData.slice(0, 5).map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="!flex !items-center">
                      <ProjectCard project={project} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
