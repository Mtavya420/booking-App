import React from "react";
import WelcomeCarousel from "../Components/Carousel";
import Services from "../Components/Services/ServiceMenu";
import Products from "../Components/Products";
import Contact from "../Components/Contact/Contact";
import ContactForm from "../Components/Contact/ContactForm";
import Layout from "../Components/Layout/Layout";
import ScrollButton from "../Components/ScrollButton";
import smoothscroll from "smoothscroll-polyfill";
import { useRouter } from "next/router";
import useDocumentScrollThrottled from "@/Components/Hooks/useDocumentScrollThrottled";

export default function Home() {
  const router = useRouter();
  // refs
  const servicesRef = React.useRef(null),
    teamRef = React.useRef(null),
    productsRef = React.useRef(null),
    contactRef = React.useRef(null);
  const { id } = router.query;
  React.useEffect(() => {
    if (id === "services") {
      scroll(servicesRef);
      router.replace("/", undefined, { shallow: true });
    }
    if (id === "products") {
      scroll(productsRef);
      router.replace("/", undefined, { shallow: true });
    }
    if (id === "team") {
      scroll(teamRef);
      router.replace("/", undefined, { shallow: true });
    }
    if (id === "contact") {
      scroll(contactRef);
      router.replace("/", undefined, { shallow: true });
    }
  }, [id]);
  const scroll = (tag) => {
    smoothscroll.polyfill();
    tag.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
  });
  return (
    <Layout>
      {/* <WelcomeCarousel /> */}
      <div className="content relative">
        <div className="relative mt-40">
          <div
            ref={servicesRef}
            className="absolute"
            style={{ top: "-170px" }}
            id="services"
          />
          <Services />
        </div>
        <div className="relative">
          <div ref={teamRef} className="absolute" style={{ top: "-170px" }} />
        </div>
        <div className="relative">
          <div
            ref={productsRef}
            className="absolute"
            style={{ top: "-170px" }}
          />
          <Products />
        </div>
        <div className="relative">
          <div
            ref={contactRef}
            className="absolute"
            style={{ top: "-170px" }}
          />
          <Contact />
        </div>
        {/* <ContactForm /> */}
      </div>
      <ScrollButton />
    </Layout>
  );
}
