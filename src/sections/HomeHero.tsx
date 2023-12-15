"use client";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";

//components
import SocialLinks from "@/components/social/SocialLinks";
import { ScrollContext } from "../context/ScrollContext";
import ScrollToTop from "../components/ScrollToTop";

//mocks
import { HERO_TITLES } from "../mocks/profile";
import Image from "next/image";
import photo from "@/assets/image/photoperfil.jpeg";

export default function HomeHero() {
   const { isScroll, jumpToDown }: any = useContext(ScrollContext);

   return (
      <>
         <section className="container mx-auto mt-3 flex max-h-screen min-h-screen flex-col items-center justify-around px-5 md:px-1">
            <div className="z-50 flex flex-col items-center lg:space-y-10 space-y-5">
               <Image
                  src={photo}
                  className="w-52 object-contain lg:w-64 rounded-full"
                  alt="Logo"
               />
               <div>
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
               </div>
               <p className="text-center text-sm sm:text-base md:w-3/5">
                  Brazilian guy Full Stack Developer, I&apos;m highly motivated
                  and passionate about creating. I have extensive experience in
                  designing, developing and maintaining web applications using
                  the latest technologies on the market.
               </p>
            </div>
            <SocialLinks />

            <div
               id="mouse-scroll"
               className={`ml-4 hidden cursor-pointer transition-all duration-200 ${
                  isScroll ? "opacity-0" : ""
               }`}
               onClick={jumpToDown}
            >
               <div className="mouse d border-2 border-solid border-primary-500 dark:border-primary-500">
                  <div className="mouse-in bg-primary-500 dark:bg-primary-500" />
               </div>
               <div className="mt-3">
                  <span className="down-arrow-1 border-r-2 border-b-2 border-solid border-primary-500 dark:border-primary-500" />
                  <span className="down-arrow-2 border-r-2 border-b-2 border-solid border-primary-500 dark:border-primary-500" />
                  <span className="down-arrow-3 border-r-2 border-b-2 border-solid border-primary-500 dark:border-primary-500" />
               </div>
            </div>
            <ScrollToTop />
         </section>
      </>
   );
}
