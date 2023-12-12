import Link from "../Link";
import MobileNav from "./MobileNav";
import foto from "../../assets/image/teste1.png";

import headerNavLinks from "../../data/headerNavLinks";

import CustomLink from "../Link";
import Image from "next/image";

const Header = () => {
   return (
      <header className="relative group">
         <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 transition duration-1000  animate-tilt"></div>
         <div className="bg-blackCustom flex items-center justify-between w-full py-5 px-16 relative group">
            <CustomLink href="/" className="flex items-center">
               <img
                  className="relative z-10 inline-block h-14 w-14 rounded-full ring-2 ring-white"
                  src="https://media.licdn.com/dms/image/D4D03AQHAnwoUnM_0xA/profile-displayphoto-shrink_800_800/0/1702350427487?e=1707955200&v=beta&t=cVWsIr5jlVwlEpIN9HLGFb-bRJIyCnnXioEuPDluaD0"
                  width={50}
                  height={50}
                  alt="foto"
               />
               <h1 className="pl-4">Ramon Lirani</h1>
            </CustomLink>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
               {headerNavLinks
                  .filter((link) => link.href)
                  .map((link) => (
                     <Link
                        key={link.title}
                        href={link.href}
                        className="
               hidden    
               text-textColor                                                                     
               sm:block 
               relative
               cursor-pointer
               transition-all
               duration-500
               before:content-['']
               before:absolute
               before:-bottom-2
               before:left-1/2
               before:-translate-x-1/2
               before:w-0
               before:h-2
               before:rounded-sm
               before:opacity-0
               before:transition-all
               before:duration-500
               before:bg-gradient-to-r from-pink-600 to-purple-600
               hover:before:w-full
               hover:before:opacity-100
            "
                     >
                        {link.title}
                     </Link>
                  ))}
               <MobileNav />
            </div>
         </div>
      </header>
   );
};

export default Header;
