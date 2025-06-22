import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

const NewsSection: React.FC = () => {
  // @ts-ignore
  const swiperRef = useRef<SwiperType>();

  const interviews = [
    {
      videoId: "bANQ3obz4cE", // Extract from the YouTube URL
      title: "Adda with Rumpa #celebrityshow",
      date: "২৫ মে ২০২৫",
      duration: "45:20",
      description:
        "আড্ডা অনুষ্ঠানে রুমপার সাথে বিশেষ আলোচনা - থিয়েটার, সিনেমা এবং শিল্পীজীবন নিয়ে",
    },
    {
      videoId: "bANQ3obz4cE", // Add your other interview videos
      title: "থিয়েটার ও সিনেমার গভীর আলোচনা",
      date: "২০ মে ২০২৫",
      duration: "32:15",
      description: "বাংলাদেশের থিয়েটার ও সিনেমার বিকাশ নিয়ে বিস্তারিত আলোচনা",
    },
    {
      videoId: "bANQ3obz4cE", // Add more videos as needed
      title: "সৃজনশীল প্রক্রিয়ার পেছনের গল্প",
      date: "১৫ মে ২০২৫",
      duration: "28:45",
      description:
        "শিল্পী হিসেবে সৃজনশীল যাত্রা এবং শৈল্পিক দৃষ্টিভঙ্গি নিয়ে আলোচনা",
    },
  ];

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div id="interviews" className=" py-8 md:pt-12 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Header Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <div className="flex items-center mb-3">
              <div className="w-8 h-0.5 bg-[#FF5C00] mr-3"></div>
              <p className="text-[#FF5C00] text-sm font-bold uppercase tracking-wider">
                VIDEOS
              </p>
            </div>
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <br />
              Latest
              <br />
              Videos
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Watch exclusive interviews and conversations about Law, Family
              Law, and Law Practics.
            </p>
            <button className="bg-[#FF5C00]  px-6 py-2 rounded-md hover:bg-[#e54900] transition-colors">
              VIEW ALL
            </button>
          </div>

          {/* Interview Videos Swiper */}
          <div className="w-full lg:w-3/4 relative">
            <Swiper
              onBeforeInit={(swiper: any) => {
                swiperRef.current = swiper;
              }}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              // pagination={{ clickable: true }}
              //   autoplay={{
              //     delay: 4000,
              //     disableOnInteraction: false,
              //   }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              className="w-full relative"
            >
              {interviews.map((interview, index) => (
                <SwiperSlide key={index}>
                  <div className="group cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <div onClick={() => handleVideoClick(interview.videoId)}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${interview.videoId}`}
                          title={interview.title}
                          className="w-full h-[200px] md:h-[250px] lg:h-[300px] "
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center hover:bg-[#e54900] transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  transform group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center hover:bg-[#e54900] transition-colors group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  transform group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
