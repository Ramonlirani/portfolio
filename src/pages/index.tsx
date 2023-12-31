import React from "react";
// Layout
import MainLayout from "../layouts/MainLayout";
// sections

import { documentTitle } from "../mocks/profile";
import HomeHero from "../sections/HomeHero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

// ------------------------------------------------

export default function Home() {
   const meta = (
      <>
         <title>{documentTitle}</title>
      </>
   );

   return (
      <MainLayout meta={meta}>
         <HomeHero />
         <Skills />
         <Projects />
         <Contact />
      </MainLayout>
   );
}
