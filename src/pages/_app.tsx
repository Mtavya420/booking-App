import "../styles/global.css";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Elkpro Cut - Foreign Barber Shop in Korea"
        description="Experience the best foreign barber services in Korea at Elkpro Cut. Our skilled barbers provide quality haircuts, shaves, and styling services to men of all ages and backgrounds. Visit us today and discover why we're the go-to destination for men's grooming in Seoul, South Korea."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://elkpro.vercel.app/",
          siteName: "Elkpro Cut",
          images: [
            {
              url: "/img/ElkproLogo.png",
              width: 800,
              height: 600,
              alt: "Best Barber Shop in Seoul",
            },
            {
              url: "/img/ElkproLogo1.png",
              width: 1200,
              height: 630,
              alt: "Hair Cut salon in Seoul",
            },
          ],

          
        }}
        
      />
      <Component {...pageProps} />
    </>
  );
}
