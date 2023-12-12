import { ScrollProvider } from "../context/ScrollContext";
import { AppProps } from "next/app";
import "../styles/globals.css";

interface MyAppProps extends AppProps {}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
   return (
      <ScrollProvider>
         <Component {...pageProps} />
      </ScrollProvider>
   );
};

export default MyApp;
