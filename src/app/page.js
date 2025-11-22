// Page.jsx (or wherever you use both components)
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

export default function Page() {
  return (
    <>
      <div className="md:min-h-screen">
        {/* Hero Image Background - Positioned absolutely */}
        <div
          className="absolute md:block hidden top-0 right-0 overflow-hidden w-[50%] h-full "
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundImage: `url(${assets?.HeroImage?.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "full",
            zIndex: 0,
          }}
        />

        {/* Components */}
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
    </>
  );
}
