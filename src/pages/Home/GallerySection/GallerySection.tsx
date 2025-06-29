import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your images (keeping the same structure)
// import BannnerImg from "../../../assets/images/event_05.jpeg";
import image_02 from "../../../assets/images/event_01.jpeg";
import image_03 from "../../../assets/images/event_02.jpeg";
import image_04 from "../../../assets/images/event_03.jpeg";
import image_05 from "../../../assets/images/event_04.jpeg";
import image_06 from "../../../assets/images/event_05.jpeg";
import image_07 from "../../../assets/images/event_06.jpeg";
import image_08 from "../../../assets/images/event_07.jpeg";

// Define types for the component
interface Tab {
  id: TabId;
  label: string;
}

type TabId = "All" | "Events" | "Activities" | "Corporate" | "Professional";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: TabId[];
  hasVideo?: boolean;
}

interface VisibleItem extends GalleryItem {
  isVisible: boolean;
}

const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("All");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [visibleItems, setVisibleItems] = useState<VisibleItem[]>([]);

  const tabs: Tab[] = [
    { id: "All", label: "ALL" },
    { id: "Events", label: "Events" },
    { id: "Activities", label: "Activities" },
    { id: "Corporate", label: "Corporate" },
    { id: "Professional", label: "Professional" },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Corporate Event 2024",
      image: image_02,
      category: ["Events", "Corporate"],
      hasVideo: true,
    },
    {
      id: 2,
      title: "Team Building Activity",
      image: image_03,
      category: ["Activities"],
    },
    {
      id: 3,
      title: "Legal Conference",
      image: image_04,
      category: ["Events", "Professional"],
    },
    {
      id: 4,
      title: "Office Innovation Day",
      image: image_05,
      category: ["Activities", "Corporate"],
    },
    {
      id: 5,
      title: "Excellence Awards",
      image: image_06,
      category: ["Events"],
      hasVideo: true,
    },
    {
      id: 6,
      title: "Strategic Meeting",
      image: image_07,
      category: ["Activities", "Professional"],
    },
    {
      id: 7,
      title: "Professional Summit",
      image: image_08,
      category: ["Events", "Professional"],
    },
    {
      id: 8,
      title: "Skills Workshop",
      image: image_02,
      category: ["Activities"],
    },
    {
      id: 9,
      title: "Leadership Conference",
      image: image_07,
      category: ["Events", "Corporate"],
      hasVideo: true,
    },
  ];

  const handleTabChange = (tabId: TabId): void => {
    setIsAnimating(true);
    setActiveTab(tabId);

    // First hide all items with zoom out
    setVisibleItems((current) =>
      current.map((item) => ({ ...item, isVisible: false }))
    );

    // After zoom out animation, filter and show new items with zoom in
    setTimeout(() => {
      const filtered = galleryItems
        .filter((item) =>
          tabId === "All" ? true : item.category.includes(tabId)
        )
        .map((item) => ({ ...item, isVisible: true }));
      setVisibleItems(filtered);
      setIsAnimating(false);
    }, 300);
  };

  // Initialize visible items
  useEffect(() => {
    setVisibleItems(galleryItems.map((item) => ({ ...item, isVisible: true })));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div id="gallery" className=" pt-5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* <h2 className="text-4xl text-black font-bold mb-4 uppercase">
            Gallery
          </h2> */}
          <p className="text-gray-600 italic">
            A COLLECTION OF OUR MEMORABLE MOMENTS
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => !isAnimating && handleTabChange(tab.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white scale-110"
                  : "text-black border border-gray-700 hover:bg-orange-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems?.slice(0, 6)?.map((item) => (
            <div
              key={item.id}
              className={`transform transition-all duration-300 ${
                item.isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            >
              <div className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.hasVideo && (
                      <button className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.category.map((category) => (
                      <span key={category} className="text-sm text-gray-300">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        

        /* Enhanced mobile animations */
        @media (max-width: 767px) {
          [data-aos] {
            transition-duration: 0.4s !important;
          }
        }

        /* Mobile landscape optimization */
        @media screen and (orientation: landscape) and (max-height: 500px) {
          .gallery-section {
            min-height: 70vh;
          }
        }
      `}</style>
    </div>
  );
};

export default GallerySection;
