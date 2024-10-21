"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/work4.jpg",
    category: "Next.js",
    name: "Ecommerce Website Figma",
    description:
      "Ecommerce website built with Next.js & TailwindCSS from Figma design.",
    link: "https://ecommerce-website-nextjs-omega.vercel.app/",
  },
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
    image: "/work/university.png",
    category: "HTML, CSS",
    name: "University Website",
    description: "University website built with HTML, CSS, and JavaScript.",
    link: "https://university-website1.vercel.app/",
  },
  {
    image: "/work/netflix.png",
    category: "HTML, CSS",
    name: "NetFlix Clone Website",
    description: "NetFlix Clone website built with HTML, CSS, and JavaScript.",
    link: "https://netflix-clone-as.vercel.app/",
  },
  {
    image: "/work/facebook.png",
    category: "HTML, CSS",
    name: "Facebook Login Clone",
    description:
      "Facebook Login Clone website built with HTML, CSS, and JavaScript.",
    link: "/",
  },
  {
    image: "/work/instagram.png",
    category: "HTML, CSS",
    name: "Instagram Login Clone",
    description:
      "Instagram Login Clone website built with HTML, CSS, and JavaScript.",
    link: "https://instagram-login-clone-delta.vercel.app/",
  },
  {
    image: "/work/twitter.png",
    category: "HTML, CSS",
    name: "Twitter Login Clone",
    description:
      "Twitter Login Clone website built with HTML, CSS, and JavaScript.",
    link: "/",
  },
  {
    image: "/work/agecalculator.png",
    category: "HTML, CSS & JS",
    name: "Age Calculator",
    description: "Age Calculator website built with HTML, CSS, and JavaScript.",
    link: "https://age-calculator-by-samad.vercel.app/",
  },
  {
    image: "/work/calculator.png",
    category: "HTML, CSS & JS",
    name: "Web-Calculator",
    description: "Web-Calculator built with HTML, CSS, and JavaScript.",
    link: "https://abdulsamad94.github.io/Web-Calculator/",
  },
  {
    image: "/work/colorChanger.png",
    category: "React.js",
    name: "Color-Changer",
    description: "Color-Changer built with React.js, Tailwind CSS.",
    link: "https://background-color-changer-theta.vercel.app/",
  },
  {
    image: "/work/currencyConverter.png",
    category: "React.js",
    name: "Currency Converter",
    description: "Currency Converter built with React.js, Tailwind CSS.",
    link: "https://abdulsamad94.github.io/Currency-Converter-Web-React/",
  },
  {
    image: "/work/password.png",
    category: "React.js",
    name: "Password Generator",
    description: "Password Generator built with React.js, Tailwind CSS.",
    link: "https://abdulsamad94.github.io/password-generator-react/",
  },
  {
    image: "/work/stopwatch.png",
    category: "HTML, CSS & JS",
    name: "Web-Stopwatch",
    description: "Web-Stopwatch built with HTML, CSS, and JavaScript.",
    link: "https://abdulsamad94.github.io/Web-Stop-Watch/",
  },
  {
    image: "/work/tictactoe.png",
    category: "HTML, CSS & JS",
    name: "Web-TicTacToe",
    description: "Web-TicTacToe built with HTML, CSS, and JavaScript.",
    link: "https://abdulsamad94.github.io/Tic-Tac-Toe-Game/",
  },
  {
    image: "/work/todoList.png",
    category: "React.js",
    name: "Todo List",
    description: "Todo List built with React.js, Tailwind CSS.",
    link: "https://abdulsamad94.github.io/Todo-List-React/",
  },
];

const categoriesData = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoriesData);
  const [categories, setCategories] = useState("all projects");

  const filterProjects = projectData.filter((project) => {
    if (categories === "all projects") {
      return project;
    } else {
      return project.category === categories;
    }
  });
  console.log(filterProjects);
  return (
    <section className="min-h-screen py-12 mx-20">
      <div>
        <h2 className="section-words mb-8 lg:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={categories} className="mb-24 lg:mb-40">
          <TabsList className="w-full h-full grid md:grid-cols-5 lg:max-w-[900px] mb-12 mx-auto gap-x-5 gap-y-2 md:border dark:border-none">
            {selectedCategory.map((category, index) => (
              <TabsTrigger
                onClick={() => setCategories(category)}
                key={index}
                value={category}
                className="capitalize w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filterProjects.map((items, index) => (
              <TabsContent
                className="shadow-md overflow-hidden shadow-black rounded-lg"
                key={index}
                value={categories}
              >
                <ProjectCard project={items} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
