import React from "react";
import Swiperslider from "@/components/Swiperslider";
import "swiper/css";
import Hero from "./components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Newsletter />
      <About />
      <Pricing />
      <Faqs />
      <Swiperslider />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
