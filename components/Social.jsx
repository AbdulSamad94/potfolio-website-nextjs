"use client";

import React from "react";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
import Link from "next/link";

const Social = ({ iconsStyle }) => {
  const sociallinks = [
    {
      path: "/",
      icon: <RiYoutubeFill />,
    },
    {
      path: "https://www.instagram.com/abdul_samad_siddiqui_9/",
      icon: <RiInstagramFill />,
    },
    {
      path: "https://www.facebook.com/abdulsamad.siddiqui.1048",
      icon: <RiFacebookFill />,
    },
    {
      path: "https://www.linkedin.com/in/abdul-samad-siddiqui-0183012b5/",
      icon: <RiLinkedinFill />,
    },
    {
      path: "https://github.com/AbdulSamad94",
      icon: <RiGithubFill />,
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex justify-center md:justify-start gap-x-4">
        {sociallinks.map((link, index) => {
          return (
            <Link
              target="_blank"
              key={index}
              href={link.path}
              className={iconsStyle}
            >
              {link.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
