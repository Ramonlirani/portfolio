import React from "react";
// Layout
import MainLayout from "../layouts/MainLayout";
// sections

import { documentTitle } from "../mocks/profile";
import HomeHero from "../sections/HomeHero";

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
         {/* Skill Section  */}
         {/* <Skills /> */}
         {/* Works Section  */}
         {/* <Works /> */}
         {/* Contact Section  */}
         {/* <Contact /> */}
      </MainLayout>
   );
}
