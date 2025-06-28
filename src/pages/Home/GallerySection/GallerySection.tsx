import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";

import BannnerImg from "../../../assets/images/event_05.jpeg";
import image_02 from "../../../assets/images/event_01.jpeg";
import image_03 from "../../../assets/images/event_02.jpeg";
import image_04 from "../../../assets/images/event_03.jpeg";
import image_05 from "../../../assets/images/event_04.jpeg";
import image_06 from "../../../assets/images/event_05.jpeg";
import image_07 from "../../../assets/images/event_06.jpeg";
import image_08 from "../../../assets/images/event_07.jpeg";

const GallerySection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      title: "Corporate Event 1",
      image: image_02,
      category: ["Events", "Corporate"],
    },
    {
      id: 2,
      title: "Team Activity 1",
      image: image_03,
      category: ["Activities", "Team Building"],
    },
    {
      id: 3,
      title: "Legal Conference",
      image: image_04,
      category: ["Events", "Professional"],
    },
    {
      id: 4,
      title: "Office Activity",
      image: image_05,
      category: ["Activities", "Office"],
    },
    {
      id: 5,
      title: "Award Ceremony",
      image: image_06,
      category: ["Events", "Awards"],
    },
    {
      id: 6,
      title: "Team Meeting",
      image: image_07,
      category: ["Activities", "Meetings"],
    },
    {
      id: 7,
      title: "Professional Event",
      image: image_08,
      category: ["Events", "Professional"],
    },
    {
      id: 8,
      title: "Workshop Session",
      image: image_02,
      category: ["Activities", "Training"],
    },
    {
      id: 111,
      title: "Team Meeting",
      image: image_07,
      category: ["Activities", "Meetings"],
    },
  ];

  // Tab categories
  const tabs = [
    { id: "All", label: "All Gallery", count: galleryItems.length },
    {
      id: "Events",
      label: "Events",
      count: galleryItems.filter((item) => item.category.includes("Events"))
        .length,
    },
    {
      id: "Activities",
      label: "Activities",
      count: galleryItems.filter((item) => item.category.includes("Activities"))
        .length,
    },
    {
      id: "Corporate",
      label: "Corporate",
      count: galleryItems.filter((item) => item.category.includes("Corporate"))
        .length,
    },
    {
      id: "Professional",
      label: "Professional",
      count: galleryItems.filter((item) =>
        item.category.includes("Professional")
      ).length,
    },
  ];

  // Filter gallery items based on active tab
  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category.includes(activeTab));

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    AOS.init({
      duration: isMobile ? 600 : 1000,
      once: false,
      mirror: !isMobile,
      easing: "ease-out-cubic",
      offset: isMobile ? 30 : 50,
      disable: function () {
        return window.innerWidth < 480;
      },
    });

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
    <div className="flex flex-col lg:flex-row w-full min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BannnerImg}
          alt="Gallery Background"
          className="object-cover w-full h-full opacity-20"
        />
      </div>

      {/* Animated background overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"
        data-aos="fade"
        data-aos-duration="1500"
      ></div>

      {/* Left Content Section */}
      <div
        className="w-full lg:w-3/5 pt-16 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-start relative z-20"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
        data-aos="slide-right"
        data-aos-duration="1200"
      >
        {/* Gallery Grid */}
        <div
          className="flex-1 overflow-y-auto max-h-[500px]"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={1200 + index * 100}
              >
                <div className="h-32 md:h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
      </div>

      {/* Right Vertical Tabs Section */}
      <div
        className="w-full lg:w-2/5 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 lg:p-8 relative z-20 flex flex-col justify-center"
        data-aos="slide-left"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        {/* Vertical Tab Buttons */}
        <div
          className="space-y-4 flex-1"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 group ${
                activeTab === tab.id
                  ? "bg-white text-blue-900 border-white shadow-lg"
                  : "bg-transparent text-white border-blue-400 hover:bg-blue-800 hover:border-white"
              }`}
              data-aos="fade-left"
              data-aos-delay={1000 + index * 100}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-lg block">
                    {tab.label}
                  </span>
                  <span
                    className={`text-sm ${
                      activeTab === tab.id ? "text-blue-600" : "text-blue-200"
                    }`}
                  >
                    {tab.count} items
                  </span>
                </div>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeTab === tab.id
                      ? "rotate-90"
                      : "group-hover:translate-x-1"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-8 w-16 h-16 border-2 border-white/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-8 h-8 border-2 border-white/20 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-8 w-12 h-12 border-2 border-white/20 rounded-full opacity-25"></div>
      </div>

      {/* Custom styles */}
      <style>{`
        /* Mobile landscape optimization */
        @media screen and (orientation: landscape) and (max-height: 500px) {
          .gallery-section {
            min-height: 70vh;
          }
        }

        /* Enhanced mobile animations */
        @media (max-width: 767px) {
          [data-aos] {
            transition-duration: 0.4s !important;
          }
        }

        /* Scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 2px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default GallerySection;
