import React, { useEffect } from "react";
import { Phone } from "lucide-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-fade";

// import personalImg from "@/assets/images/personalImg.jpeg";
import personalImg from "../../../assets/images/personalImg.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import slideImg_01 from "../../../assets/images/event_01.jpeg";
import slideImg_02 from "../../../assets/images/event_02.jpeg";
import slideImg_03 from "../../../assets/images/event_03.jpeg";
import slideImg_05 from "../../../assets/images/event_05.jpeg";
import slideImg_06 from "../../../assets/images/event_06.jpeg";

const AboutSection: React.FC = () => {
  const slideImages = [
    {
      id: 1,
      src: slideImg_01,
      title: "Immigration Success Stories",
    },
    {
      id: 2,
      src: slideImg_02,
      title: "Client Consultations",
    },
    {
      id: 3,
      src: slideImg_03,
      title: "Legal Documentation",
    },
    {
      id: 5,
      src: slideImg_05,
      title: "Professional Services",
    },
    {
      id: 6,
      src: slideImg_06,
      title: "Expert Guidance",
    },
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
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

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2
              className="text-4xl md:text-5xl -mt-6 font-light text-amber-300 leading-tight"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Committed to helping our
              <br />
              clients succeed
            </h2>

            <div
              className="flex items-center justify-start"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="h-px bg-gray-300 w-28"></div>
              <div className="mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-300"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <div className="h-px bg-gray-300 w-28"></div>
            </div>

            <p
              className="text-gray-600 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Mamun Law Office excels in navigating complex immigration
              processes for individuals and families seeking new beginnings in
              Canada. Our expertise spans across various immigration pathways,
              ensuring personalized solutions that align with our rigorous
              standards of excellence.
            </p>

            <div className="space-y-3">
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="text-red-600 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">
                  Specializing in diverse immigration pathways.
                </p>
              </div>

              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="text-red-600 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">
                  Expertise in family and work visas.
                </p>
              </div>

              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="text-red-600 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">
                  Skilled in permanent residency applications.
                </p>
              </div>

              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="text-red-600 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">
                  Personalized consultation for every client.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 items-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <button
                className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white transition-colors duration-300 px-8 py-3 rounded-md font-medium"
                data-aos="flip-up"
                data-aos-delay="900"
              >
                More About Us
              </button>

              <div
                className="flex items-center bg-amber-100 rounded-lg px-6 py-3 shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div className="mr-4 bg-amber-300 rounded-full p-3">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-amber-700 font-bold text-lg">
                    +880 1713-992110
                  </p>
                  <p className="text-gray-600 text-sm">Call For Appointment</p>
                </div>
              </div>
            </div>
            {/* Swiper Slider */}
            <div className="relative" data-aos="fade-up" data-aos-delay="400">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                className="rounded-lg shadow-lg"
              >
                {slideImages.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative h-64 md:h-64 overflow-hidden rounded-lg">
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
                          {slide.title}
                        </h3>
                        <div className="w-12 h-1 bg-amber-300 rounded"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-amber-700 rounded-full p-2 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>

              <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-amber-700 rounded-full p-2 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Swiper Slider */}
          <div
            className="w-full lg:w-1/2 relative"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            {/* Main Personal Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 mb-8">
              <img
                src={personalImg}
                alt="personal"
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-pagination-bullet {
          background: #d97706;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #d97706;
          opacity: 1;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
