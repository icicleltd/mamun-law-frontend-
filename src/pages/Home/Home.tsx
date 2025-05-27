import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import SideNavigation from "./SideNavigation/SideNavigation";
import GallerySection from "./GallerySection/GallerySection";
import NewsSection from "./NewsSection/NewsSection";
import StickySocialIcons from "./StickySocialIcons/StickySocialIcons"; // Import the new component

const Home: React.FC = () => {
  return (
    <div className="relative">
      <SideNavigation />
      
      {/* Sticky Social Media Icons */}
      <StickySocialIcons />
      
      <section id="hero">
        <div data-aos="fade-up" data-aos-duration="1000">
          <HeroSection />
        </div>
      </section>

      <section id="about">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <AboutSection />
        </div>
      </section>

      <section id="people">
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
          <GallerySection />
        </div>
      </section>

      <section id="news">
        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <NewsSection />
        </div>
      </section>
    </div>
  );
};

export default Home;