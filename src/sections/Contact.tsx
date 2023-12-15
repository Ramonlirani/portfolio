import HeadingAnimate from "@/components/animate/HeadingAnimate";
import LoadAnimate from "@/components/animate/LoadAnimate";
import SocialLinks from "@/components/social/SocialLinks";

export default function Contact() {
   return (
      <>
         <footer>
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 border-t border-primary-500 mt-20">
               <HeadingAnimate amount={1}>
                  <h2 className="text-center font-lato text-3xl mb-10 font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
                     Contact
                  </h2>
               </HeadingAnimate>
               <LoadAnimate amount={0}>
                  <div className="pb-6 text-center">
                     <p className="text-base leading-6 text-white">
                        You can find me on these social networks
                     </p>
                  </div>
                  <div className="mt-10 flex justify-center space-x-10">
                     <SocialLinks />
                  </div>
                  <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                     &copy; 2023 Ramon Lirani, Inc. All rights reserved.
                  </p>
               </LoadAnimate>
            </div>
         </footer>
      </>
   );
}
