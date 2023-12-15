import React from "react";
// components
import TechSkillIcon from "../components/skills/TechIcon";
import ListItem from "../components/skills/ListItem";
import HeadingAnimate from "../components/animate/HeadingAnimate";
import LoadAnimate from "../components/animate/LoadAnimate";
import Lottie from "@/components/Lottie";

// mock
import {
   BACKEND_SKILLS,
   FRONTEND_SKILLS,
   OTHERS_SKILLS,
   BACKEND_DESCRIPTIONS,
   FRONTEND_DESCRIPTIONS,
   OTHERS_DESCRIPTIONS,
} from "../mocks/tech-skills";
import codingAnimation from "../mocks/lottie/coding.json";
import backendAnimation from "../mocks/lottie/backend.json";

export default function Skills() {
   return (
      <>
         <section className="container mx-auto text-center pb-14">
            <HeadingAnimate>
               <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
                  What I do
               </h2>
            </HeadingAnimate>

            {/* Frontend Development */}
            <LoadAnimate amount={0}>
               <div className="container mx-auto my-5 flex flex-col items-center p-5 md:flex-row">
                  <div className="mb-10 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                     <Lottie animationDataFile={codingAnimation} />
                  </div>
                  <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                     <HeadingAnimate>
                        <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                           Frontend Development
                        </h1>
                     </HeadingAnimate>
                     {/* Tech Stack  */}
                     <div className="my-3 flex flex-wrap justify-items-center gap-x-4 gap-y-7 text-center sm:gap-x-7">
                        {FRONTEND_SKILLS.map(
                           ({ label, icon, proficiency, iconClasses }, i) => (
                              <TechSkillIcon
                                 key={`frontend-skill-${i}`}
                                 icon={icon}
                                 iconClasses={iconClasses}
                                 label={label}
                                 proficiency={proficiency}
                              />
                           )
                        )}
                     </div>
                     <div className="mt-7 w-full space-y-5">
                        {FRONTEND_DESCRIPTIONS.map((paragraph, i) => (
                           <ListItem
                              key={`frontend-des-${i}`}
                              paragraph={paragraph}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </LoadAnimate>
            {/* Backend Development */}
            <LoadAnimate amount={0}>
               <div className="container mx-auto my-5 flex flex-col items-center p-5 md:flex-row">
                  <div className="mb-10 w-full md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                     <Lottie animationDataFile={backendAnimation} />
                  </div>
                  <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                     <HeadingAnimate>
                        <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                           Backend Development
                        </h1>
                     </HeadingAnimate>
                     {/* Tech Stack  */}
                     <div className="my-3 flex flex-wrap justify-items-center gap-x-4 gap-y-7 text-center sm:gap-x-7">
                        {BACKEND_SKILLS.map(
                           ({ icon, iconClasses, label, proficiency }, i) => (
                              <TechSkillIcon
                                 key={`backend-skill-${i}`}
                                 icon={icon}
                                 iconClasses={iconClasses}
                                 label={label}
                                 proficiency={proficiency}
                              />
                           )
                        )}
                     </div>
                     <div className="mt-5 w-full space-y-5 sm:mt-7">
                        {BACKEND_DESCRIPTIONS.map((paragraph, i) => (
                           <ListItem
                              key={`backend-des-${i}`}
                              paragraph={paragraph}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </LoadAnimate>
            {/* OTHERS*/}
            <LoadAnimate amount={0}>
               <div className="container my-5 flex flex-col  items-center p-5 md:flex-row">
                  <div className="flex flex-col items-center text-center md:w-1/2 md:items-center md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                     <HeadingAnimate>
                        <h1 className="mb-4 text-xl font-semibold tracking-wide  text-primary-700 dark:text-primary-300 sm:text-2xl">
                           Others skills
                        </h1>
                     </HeadingAnimate>
                     {/* Tech Stack  */}
                     <div className="my-3 flex flex-wrap justify-items-center gap-x-4 gap-y-7 text-center sm:gap-x-7">
                        {OTHERS_SKILLS.map(
                           ({ label, icon, proficiency, iconClasses }, i) => (
                              <TechSkillIcon
                                 key={`frontend-skill-${i}`}
                                 icon={icon}
                                 iconClasses={iconClasses}
                                 label={label}
                                 proficiency={proficiency}
                              />
                           )
                        )}
                     </div>
                     <div className="mt-7 w-full space-y-5">
                        {OTHERS_DESCRIPTIONS.map((paragraph, i) => (
                           <ListItem
                              key={`frontend-des-${i}`}
                              paragraph={paragraph}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </LoadAnimate>
         </section>
         <div id="projects" />
      </>
   );
}
