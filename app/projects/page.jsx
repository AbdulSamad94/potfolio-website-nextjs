"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/lib/utils/variables";

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
    <section className="min-h-screen py-12 md:mx-20 mx-3">
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
                className="shadow-md overflow-hidden shadow-black rounded-lg w-full"
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
