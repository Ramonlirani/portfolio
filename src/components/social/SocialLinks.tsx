import React from "react";
import Iconify from "../Iconify";
import { SOCIAL_LINKS } from "../../mocks/profile";

export default function SocialLinks() {
   return (
      <div className="flex space-x-5">
         {SOCIAL_LINKS.map(({ icon, link }, index) => (
            <a
               key={`link ${index}`}
               href={link}
               rel="noreferrer"
               target="_blank"
               className="dark:border-primary-500 inline-flex items-center rounded-full border border-primary-500 p-2.5 text-center text-sm font-medium text-primary-500 transition hover:bg-primary-500 hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-primary-500 dark:hover:bg-primary-500 dark:hover:text-neutral-50 dark:focus:ring-primary-500"
            >
               <Iconify classes="text-xl" icon={icon} />
            </a>
         ))}
      </div>
   );
}
