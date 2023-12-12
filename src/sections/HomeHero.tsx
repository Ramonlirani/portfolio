"use client";
import { Typewriter } from "react-simple-typewriter";
import { HERO_TITLES } from "../mocks/profile";
import SocialLinks from "@/components/social/SocialLinks";
import { ScrollContext } from "../context/ScrollContext";
import ScrollToTop from "../components/ScrollToTop";
import { useContext } from "react";

export default function HomeHero() {
   const { isScroll, jumpToDown } = useContext(ScrollContext);

   return (
      <section className="container mx-auto mt-3 flex max-h-screen min-h-screen flex-col items-center justify-around px-5 md:px-1">
         <div className="z-50 flex flex-col items-center space-y-5 sm:space-y-10">
            <img
               src="https://media.licdn.com/dms/image/D4D03AQHAnwoUnM_0xA/profile-displayphoto-shrink_800_800/0/1702350427487?e=1707955200&v=beta&t=cVWsIr5jlVwlEpIN9HLGFb-bRJIyCnnXioEuPDluaD0"
               className="w-52 object-contain lg:w-64 rounded-full"
               alt="Logo"
            />

            <h1 className="z-50 font-lato text-2xl font-bold sm:text-4xl md:font-semibold">
               HI, Im {""}
               <span className="text-primary-500">
                  <Typewriter
                     words={HERO_TITLES}
                     loop={false}
                     cursor
                     cursorStyle=" "
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}
                  />
               </span>
            </h1>
            <p className="text-center text-sm sm:text-base md:w-3/5">
               Highly motivated Full Stack Developer with a passion for
               creating, with experience in designing, developing and
               maintaining web applications using technologies such as
               JavaScript, React and Node.js.
            </p>
            <SocialLinks />
         </div>
         <div
            id="mouse-scroll"
            className={`ml-4 hidden cursor-pointer transition-all duration-200 ${
               isScroll ? "opacity-0" : ""
            }`}
            onClick={jumpToDown}
         >
            <div className="mouse d border-2 border-solid border-primary-700 dark:border-primary-500">
               <div className="mouse-in bg-primary-700 dark:bg-primary-500" />
            </div>
            <div className="mt-3">
               <span className="down-arrow-1 border-r-2 border-b-2 border-solid border-primary-700 dark:border-primary-500" />
               <span className="down-arrow-2 border-r-2 border-b-2 border-solid border-primary-700 dark:border-primary-500" />
               <span className="down-arrow-3 border-r-2 border-b-2 border-solid border-primary-700 dark:border-primary-500" />
            </div>
         </div>
         <ScrollToTop />
      </section>
   );
}
