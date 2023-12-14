import React from "react";
import Iconify from "../Iconify";

interface TechSkillIconProps {
   label: string;
   proficiency: string;
   icon: string;
   iconClasses: string;
}

export default function TechSkillIcon({
   label,
   proficiency,
   icon,
   iconClasses,
}: TechSkillIconProps) {
   return (
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full p-2 shadow-md shadow-neutral-300 dark:shadow-zinc-900">
         <span className="group relative cursor-pointer">
            <span className="pointer-events-none absolute -top-[4.7rem] left-1/2 z-[1000] w-32 min-w-fit -translate-x-1/2 whitespace-nowrap rounded-xl bg-zinc-900 px-3 py-1 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-zinc-900 before:content-[''] group-hover:opacity-100 dark:bg-zinc-900 dark:before:border-t-zinc-900">
               <div className="flex items-center justify-between mb-2 mt-1">
                  <div className="text-left text-xs  text-neutral-50">
                     {" "}
                     {label}
                  </div>
                  <span className="ml-2 text-xs text-neutral-50">
                     {proficiency}
                  </span>
               </div>
               <div className="mb-4 h-2.5 w-full rounded-full bg-neutral-50">
                  <div
                     className="h-2.5 rounded-full bg-primary-500"
                     style={{ width: proficiency }}
                  />
               </div>
            </span>
            <Iconify icon={icon} classes={iconClasses} />
         </span>
      </div>
   );
}
