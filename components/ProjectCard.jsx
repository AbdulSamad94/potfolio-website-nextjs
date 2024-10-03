import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

import { Github, Link2Icon } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden relative group h-[460px] hover:scale-90 duration-200 rounded-lg">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[300px] flex justify-center items-center dark:bg-secondary/40 lg:bg-work-project-light lg:dark:bg-work-project-dark lg:bg-center lg:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-xl shadow-black rounded-tr-3xl rounded-tl-3xl"
            src={project.image}
            width={250}
            height={250}
            alt="project-image"
            priority
          />
          <div className="flex justify-center items-center cursor-pointer">
            <Link
              href={project.link}
              className="bg-secondary w-[40px] h-[40px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              target="_blank"
            >
              <Link2Icon className=" text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="text-sm uppercase font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
