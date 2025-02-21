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
    title: "Full Stack Web Development",
    description:
      "Building scalable, high-performance web applications, ensuring efficient and user-friendly experiences.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "E-Commerce Development",
    description:
      "Developing custom e-commerce solutions with secure authentication, payment integrations, and optimized performance.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Frontend UI/UX Design",
    description:
      "Creating responsive, visually appealing, and fast-loading interfaces, ensuring seamless user experiences across all devices.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 lg:mb-24 mx-3">
      <div className="container lg:mx-auto">
        <h2 className="section-words mb-12 lg:mb-24 text-center mx-auto">
          My services
        </h2>
        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
          {servicesData.map((items, index) => {
            return (
              <Card
                className="relative bg-white dark:bg-background border-2 border-primary w-[280px] lg:w-full h-[300px] flex flex-col pt-16 pb-10 justify-center items-center place-self-center"
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
