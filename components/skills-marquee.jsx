"use client";
import { useMemo } from "react";
import Image from "next/image";

const defaultSkills = [
  { name: "TypeScript", icon: "/tech-logos/typescript.png" },
  { name: "JavaScript", icon: "/tech-logos/js.png" },
  { name: "React", icon: "/tech-logos/react.png" },
  { name: "Next.js", icon: "/tech-logos/nextjs.png" },
  { name: "TailwindCSS", icon: "/tech-logos/tailwind.png" },
  { name: "Python", icon: "/tech-logos/python.png" },
  { name: "FastAPI", icon: "/tech-logos/fastapi.png" },
  { name: "Node.js", icon: "/tech-logos/nodejs.png" },
  { name: "PostgreSQL", icon: "/tech-logos/postgresql.png" },
  { name: "Supabase", icon: "/tech-logos/supabase.png" },
  { name: "NeonDB", icon: "/tech-logos/neondb.png" },
  { name: "Drizzle ORM", icon: "/tech-logos/drizzle.png" },
  { name: "Next Auth", icon: "/tech-logos/nextauth.png" },
  { name: "Clerk Auth", icon: "/tech-logos/clerk.png" },
  { name: "MongoDB", icon: "/tech-logos/mongodb.png" },
  { name: "ShadCN/UI", icon: "/tech-logos/shadcn.png" },
  { name: "Motion", icon: "/tech-logos/motion.png" },
  { name: "Git", icon: "/tech-logos/git.png" },
  { name: "n8n", icon: "/tech-logos/n8n.png" },
  { name: "GitHub", icon: "/tech-logos/github.png" },
  { name: "Vercel", icon: "/tech-logos/vercel.png" },
];

export default function SkillsMarquee({ duration = 25, mobileDuration = 15 }) {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Duplicate once for seamless loop
  const skills = useMemo(() => [...defaultSkills, ...defaultSkills], []);

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Skills & Technologies
        </h2>

        <div
          className="overflow-hidden w-full"
          style={{
            "--duration": prefersReducedMotion ? "0s" : `${duration}s`,
            "--mobile-duration": prefersReducedMotion
              ? "0s"
              : `${mobileDuration}s`,
          }}
        >
          <div
            className={`flex gap-20 w-max marquee-content mt-16 ${
              prefersReducedMotion ? "animate-none" : ""
            }`}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-8 min-w-[100px]"
              >
                {skill.icon.startsWith("/") ? (
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={90}
                    height={90}
                    className="w-[80px] h-[80px]"
                  />
                ) : (
                  skill.icon
                )}
                <span className="text-large font-bold text-center whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
