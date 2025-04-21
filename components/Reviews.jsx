"use client";

import React from "react";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "John Doe",
    job: "Chef",
    review:
      "Abdul Samad delivered our web faster than expected, and it looked better than expected. Communication was good, and he really knows his stack. Highly recommended!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evey Anderson",
    job: "Funiture Designer",
    review:
      "I'm not a tech person, but Abdul made the entire process easy. He explained everything clearly and delivered a clean, fast website for our business. 10/10 experience!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Thomas Richardson",
    job: "Engineer",
    review:
      "Abdul's AI knowledge is way ahead of his age. He helped us prototype an internal automation tool using the OpenAI Agent SDK — super impressive work!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Amelia Johnson",
    job: "Digital Marketer",
    review:
      "Very professional. Abdul understood our requirements quickly and built exactly what we needed using the MERN stack. Looking forward to more collaborations.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <h2 className="section-words mb-12 lg:mb-24 text-center mx-auto">
          My reviews
        </h2>
        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-[350px]"
        >
          {reviewsData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-orange-50 dark:bg-secondary/40 p-8 min-h-[250px] mx-3 border-primary rounded-lg shadow-orange-500 shadow">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-5">
                      {/* Images */}
                      <Image
                        src={item.avatar}
                        width={70}
                        height={70}
                        alt="reviewers"
                        priority
                        className="ring-2 ring-primary rounded-full"
                      />
                      <div className="flex flex-col gap-y-2">
                        <CardTitle>{item.name}</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {item.job}
                        </p>
                        <div className="flex gap-1 items-center">
                          <Image
                            width={15}
                            height={15}
                            src={"/reviews/star_icon.png"}
                            alt=""
                          />
                          <Image
                            width={15}
                            height={15}
                            src={"/reviews/star_icon.png"}
                            alt=""
                          />
                          <Image
                            width={15}
                            height={15}
                            src={"/reviews/star_icon.png"}
                            alt=""
                          />
                          <Image
                            width={15}
                            height={15}
                            src={"/reviews/star_icon.png"}
                            alt=""
                          />
                          <Image
                            width={15}
                            height={15}
                            src={"/reviews/star_icon.png"}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-base text-muted-foreground ">
                    {item.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
