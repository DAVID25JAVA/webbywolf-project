"use client";
import Hero from "../components/HeroSection";
import { assets } from "../../public/assets";
import SecondHeroSection from "../components/SecondHeroSection";
import ThirdSection from "../components/ThirdSection";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import CardSection from "../components/CardSection";
import SecondBanner from "@/components/SecondBanner";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";
import BikePoster from "@/components/BikePoster";
import Meetup from "@/components/Meetup";
import Friend from "@/components/Friend";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Review from "@/components/Review";
import Customer from "@/components/Customer";
import Poster from "@/components/Poster";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <div className="md:min-h-screen relative">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute md:block hidden top-0 right-0 overflow-hidden w-[50%] h-full"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundImage: `url(${assets?.HeroImage?.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        <Hero />
      </div>

      <SecondHeroSection />
      <ThirdSection />
      <Banner />
      <Brand />
      <CardSection />
      <SecondBanner />
      <Contact />
      <SocialMedia />
      <BikePoster />
      <Meetup />
      <Review />
      <Friend />
      <Customer />
      <Poster />
      <FAQ />
      <Testimonial />
    </>
  );
}
