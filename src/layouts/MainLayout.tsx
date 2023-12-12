import React from "react";
import Head from "next/head";

// Components
import Header from "./Header";
// hooks
import useDarkMode from "../hooks/useDarkMode";

// -----------------------------------------------------------

interface MainLayoutProps {
   children: React.ReactNode;
   meta: React.ReactNode;
}

export default function MainLayout({ children, meta }: MainLayoutProps) {
   const { darkModeEnabled, toggleMode } = useDarkMode();

   return (
      <>
         <Head>{meta}</Head>

         <Header darkModeEnabled={darkModeEnabled} toggleMode={toggleMode} />

         <main className="overflow-x-hidden">{children}</main>
      </>
   );
}

// ---------------------------------------------------------------
