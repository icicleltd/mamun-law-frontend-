// HeroSection.tsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImg from "../../../assets/images/heroimg/hero_03.png";
import ReadMoreModal from "./ReadMoreModal"; // Import the modal component

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    // Refresh AOS on window resize
    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  const handleReadMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex flex-col lg:flex-row min-h-screen w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Animated background overlay */}
        <div
          className="absolute inset-0 bg-blue-900/10"
          data-aos="fade"
          data-aos-duration="1500"
        ></div>

        {/* Left content section with white background at 50% opacity */}
        <div
          className="w-full lg:w-1/2 pt-40 sm:pt-20 md:pt-24 lg:pt-32 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col justify-start relative min-h-screen lg:min-h-auto"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          data-aos="slide-right"
          data-aos-duration="1200"
        >
          <div
            className="mb-3 sm:mb-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <span className="text-blue-600 font-medium text-sm sm:text-base">
              Expertise
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-blue-800 mb-4 sm:mb-5 md:mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Facilitating commercial legal solutions
          </h1>

          <div
            className="grid grid-cols-2 gap-4"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <button
              className="px-4 col-span-2 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <span className="relative z-10">Writ & Fundamental Rights</span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Criminal Matter</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Civil Matter</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Family Matter</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Vat & Tax</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Company Matter</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Custom</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Arbitration</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              className="px-4 sm:px-6 py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center justify-center group relative overflow-hidden text-sm sm:text-base hover:text-white transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay="1400"
            >
              <span className="relative z-10">Laber Law</span>
              <span className="relative z-10 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-[18px] sm:h-[16px]"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
        </div>

        {/* Right section with subtle reveal animation - hidden on mobile and tablet */}
        <div
          className="hidden lg:block w-1/2 relative"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          {/* Decorative elements can be added here if needed */}
        </div>
      </div>

      {/* Read More Modal */}
      <ReadMoreModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default HeroSection;
