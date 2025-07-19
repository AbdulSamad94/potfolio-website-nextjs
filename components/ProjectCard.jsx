import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

import { Github, Link2Icon, ExternalLink, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden h-[440px] bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl transform hover:-translate-y-2">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-amber-50/50 dark:from-orange-950/30 dark:via-transparent dark:to-amber-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Category badge */}
      <Badge className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground border-0 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {project.category}
      </Badge>

      <CardHeader className="p-0 relative">
        {/* Image container with improved styling */}
        <div className="relative w-full h-[240px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/40 via-amber-100/40 to-red-100/40 dark:from-orange-900/40 dark:via-amber-900/40 dark:to-red-900/40"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 dark:bg-gray-700/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-200/30 dark:bg-orange-700/30 rounded-full blur-sm"></div>
          </div>

          {/* Project image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative group-hover:scale-105 transition-transform duration-500">
              <Image
                src={project.image}
                width={1000}
                height={750}
                alt="project-image"
                className="rounded-xl shadow-2xl w-[200px] h-[200px] object-cover border-2 border-white/50 dark:border-gray-700/50"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link
              href={project.link}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-12 h-12 rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-200 shadow-lg"
              target="_blank"
            >
              <ExternalLink className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </Link>

            {project.github && (
              <Link
                href={project.github}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-12 h-12 rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-200 shadow-lg"
                target="_blank"
              >
                <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>

      {/* Content section */}
      <div className="relative p-6 h-[200px] flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 line-clamp-1">
              {project.name}
            </h4>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary dark:group-hover:text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </Card>
  );
};

export default ProjectCard;
