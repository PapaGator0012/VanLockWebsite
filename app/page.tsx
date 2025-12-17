import Image from "next/image";
import About from "@/componenets/About";
import Hero from "@/componenets/Hero";
import ChooseYourVan from "@/componenets/VanChoose";
import WhyChooseUs from "@/componenets/WhyChooseUs";
import Testimonials from "@/componenets/Testimonial";
import Working from "@/componenets/Working";
import Difference from "@/componenets/Differnce";
import Contact from "@/componenets/Contact";
import SnipSection from "@/componenets/SnipSection";
import VanLockServices from "@/componenets/VanlockServices";
export default function Home() {
  return (
    <>
    <Hero></Hero>
    <VanLockServices></VanLockServices>
   <About></About>
   <SnipSection></SnipSection>
   <ChooseYourVan></ChooseYourVan>
   <WhyChooseUs></WhyChooseUs>
   <Testimonials></Testimonials> 
  <Working></Working>
  <Difference></Difference>
  <Contact></Contact> 


   </>
  );
}
