import React from "react";

import { GanttChartSquare, Blocks, Gem } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: "I provide high-quality web designing services.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I provide Fast, Responsive, And Stunning Websites With Modern UI.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Custom GPT",
    description:
      "I am learning Custom GPT and will provide custom GPT services soon .",
  },
];

const Services = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-3 lg:mx-auto">
        <h2 className="section-words mb-12 lg:mb-24 text-center mx-auto">
          My services
        </h2>
        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8 xl:gap-x-8">
          {servicesData.map((items, index) => {
            return (
              <Card
                className="relative bg-white dark:bg-background border-2 border-primary w-[300px] lg:w-full h-[300px] flex flex-col pt-16 pb-10 justify-center items-center place-self-center"
                key={index}
              >
                <CardHeader className="absolute text-primary -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {items.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 text-xl">{items.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {items.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
