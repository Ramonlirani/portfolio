import React from "react";
import Iconify from "../Iconify";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
   imgSrc: StaticImageData;
   title: string;
   description?: string;
   repoLink?: string;
   sourceLink?: string;
   techIcons: string[];
}

export default function ProjectCard({
   imgSrc,
   title,
   description,
   repoLink,
   sourceLink,
   techIcons,
}: ProjectCardProps) {
   return (
      <div className="flex flex-col rounded-lg border border-gray-200 shadow-md shadow-primary-800 dark:border-gray-700 dark:bg-bgDarkMode">
         <Image
            className="w-full rounded-t-lg object-cover"
            src={imgSrc}
            alt={title}
            width={300}
            height={300}
         />

         <div className="p-5">
            <h1 className="mb-2 text-lg font-semibold  text-primary-700 dark:text-primary-300">
               {title}
            </h1>
            <div>
               <div className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  {description}
               </div>
               <div className="mt-5 mb-7 flex flex-wrap gap-5">
                  {techIcons.map((item: any, i) => {
                     const { icon } = item || {};
                     return (
                        <Iconify
                           key={`icon-${i}`}
                           classes="text-2xl opacity-80"
                           icon={icon}
                        />
                     );
                  })}
               </div>
            </div>
            <div className="pt-3 pr-3">
               {(sourceLink !== "" || repoLink !== "") && (
                  <div className="justify-end flex items-center space-x-10">
                     {repoLink !== "" && (
                        <a
                           href={repoLink}
                           target="_blank"
                           rel="noreferrer"
                           className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
                        >
                           <Iconify
                              classes="text-2xl"
                              icon="akar-icons:github-fill"
                           />
                        </a>
                     )}
                     {sourceLink !== "" && (
                        <a
                           href={sourceLink}
                           target="_blank"
                           rel="noreferrer"
                           className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
                        >
                           <Iconify
                              classes="text-2xl"
                              icon="iconoir:open-new-window"
                           />
                        </a>
                     )}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
