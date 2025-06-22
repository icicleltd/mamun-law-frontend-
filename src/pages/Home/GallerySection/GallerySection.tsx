import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import BannnerImg from "../../../assets/images/event_05.jpeg";

const GallerySection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size for mobile detection
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Initialize AOS with responsive settings
    AOS.init({
      duration: isMobile ? 600 : 1000,
      once: false,
      mirror: !isMobile, // Disable mirror on mobile for better performance
      easing: "ease-out-cubic",
      offset: isMobile ? 30 : 50,
      disable: function () {
        // Disable on very small screens for performance
        return window.innerWidth < 480;
      },
    });

    // Refresh AOS on window resize with debounce
    let resizeTimeout: number | undefined;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(resizeTimeout);
    };
  }, [isMobile]);

  return (
    <div className="flex flex-col lg:flex-row w-full relative  overflow-hidden">
      {/* Background image using Next.js Image component properly */}
      <div className="absolute inset-0 z-0">
        <img
          src={BannnerImg}
          alt="Gallery Background"
          //   fill
          className="object-cover w-full h-full"
          //   priority
          // sizes="100vw"
        />
      </div>

      {/* Animated background overlay  */}
      <div
        className="absolute inset-0 bg-blue-900/10 z-10"
        data-aos="fade"
        data-aos-duration="1500"
      ></div>

      <div
        className="w-full lg:w-1/2 pt-16 pb-5 sm:pt-20 md:pt-32  lg:pt-56 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-start relative z-20  "
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        data-aos="slide-right"
        data-aos-duration="1200"
      >
        <div className="mb-3 ml-0 md:ml-20 sm:mb-4" data-aos="fade-down" data-aos-delay="400">
          <span className="text-blue-600 font-medium text-sm sm:text-base lg:text-lg">
            Gallery
          </span>
        </div>

        <h1
          className="text-2xl ml-0 md:ml-20 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-blue-800 mb-4 sm:mb-5 md:mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          Inspired Leadership, Exceptional Teams
        </h1>

        <p
          className="text-gray-700 ml-0 md:ml-20 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Every member of our firm is known for their transparency, competence,
          and dedication, which has earned us a strong reputation. Many of the
          cases handled by our firm have been published in legal reports such as
          DLR (Dhaka Law Reports) and BLT (Bangladesh Legal Times).
        </p>

        <div
          className="flex gap-4 ml-0 md:ml-20 sm:gap-6 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <Link to="/gallery">
            <button
              className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-800 text-blue-800 font-medium flex items-center group relative overflow-hidden text-sm sm:text-base transition-all duration-300 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                People Memories
              </span>
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
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Optional: Add mobile-specific call-to-action */}
        {/* <div className="mt-8 sm:mt-12 lg:hidden">
          <div className="text-center" data-aos="fade-up" data-aos-delay="1400">
            <p className="text-sm text-gray-600 mb-4">
              Swipe up to explore more sections
            </p>
            <div className="flex justify-center">
              <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-blue-600 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Right section - Hidden on mobile, visible on desktop */}
      <div
        className="hidden lg:block w-1/2 relative z-20"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        {/* Optional decorative elements for desktop */}
        <div
          className="absolute top-1/3 right-12 w-24 h-24 border-2 border-white/30 rounded-full opacity-30"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="1500"
        ></div>

        <div
          className="absolute bottom-1/4 right-24 w-12 h-12 border-2 border-white/30 rounded-full opacity-20"
          data-aos="zoom-in"
          data-aos-delay="1200"
          data-aos-duration="1800"
        ></div>

        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white/30 rounded-full opacity-25"
          data-aos="zoom-in"
          data-aos-delay="1400"
          data-aos-duration="2000"
        ></div>
      </div>

      {/* Custom responsive styles */}
      <style>{`
        /* Mobile landscape orientation optimization */
        @media screen and (orientation: landscape) and (max-height: 500px) {
          .gallery-section {
            min-height: 70vh;
          }

          .gallery-content {
            padding-top: 2rem;
          }
        }

        /* Tablet specific adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .gallery-section {
            min-height: 80vh;
          }
        }

        /* Enhanced mobile animations */
        @media (max-width: 767px) {
          [data-aos] {
            transition-duration: 0.4s !important;
          }

          .group:hover {
            transform: scale(1.02);
          }
        }

        /* Smooth scroll indicator animation */
        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -8px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        /* Ensure proper text wrapping on mobile */
        @media (max-width: 640px) {
          .gallery-content h1 {
            word-break: break-word;
            hyphens: auto;
          }

          .gallery-content p {
            word-break: break-word;
          }
        }

        /* Fix for iOS Safari viewport height issues */
        @supports (-webkit-overflow-scrolling: touch) {
          .gallery-section {
            min-height: -webkit-fill-available;
          }
        }
      `}</style>
    </div>
  );
};

export default GallerySection;
