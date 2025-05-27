import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const StickySocialIcons: React.FC = () => {
  return (
    <div className="fixed right-16 top-[90%] transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-2">
        {/* Facebook */}
        <Link
          to="/"
          className="group relative"
          aria-label="Follow us on Facebook"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded  backdrop-blur-sm shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-xl group-hover:bg-blue-600">
            <FaFacebook className="text-blue-600 group-hover:text-white text-xl transition-colors duration-300" />
          </div>

          {/* Tooltip */}
        </Link>

        {/* YouTube */}
        <Link
          to="/"
          className="group relative"
          aria-label="Subscribe to our YouTube channel"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded  backdrop-blur-sm shadow-lg border border-red-100 hover:border-red-300 transition-all duration-300 hover:scale-110 hover:shadow-xl group-hover:bg-red-600">
            <FaYoutube className="text-red-600 group-hover:text-white text-xl transition-colors duration-300" />
          </div>

          {/* Tooltip */}
          {/* <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Subscribe on YouTube
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
          </div> */}
        </Link>

        {/* Instagram */}
        <Link
          to="/"
          className="group relative"
          aria-label="Follow us on Instagram"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded  backdrop-blur-sm shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-110 hover:shadow-xl group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600">
            <FaInstagram className="text-purple-600 group-hover:text-white text-xl transition-colors duration-300" />
          </div>

          {/* Tooltip */}
          {/* <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Follow on Instagram
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
          </div> */}
        </Link>

        {/* Decorative line */}
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto"></div>

        {/* Optional: Scroll indicator or "Follow Us" text */}
        {/* <div className="transform rotate-90 origin-center">
          <span className="text-xs text-gray-500 font-medium tracking-wider whitespace-nowrap">
            FOLLOW US
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default StickySocialIcons;
