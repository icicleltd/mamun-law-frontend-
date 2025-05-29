import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const StickySocialIcons: React.FC = () => {
  return (
    <div className="fixed right-16 top-[90%] transform -translate-y-1/2 z-50 ">
      <div className="flex flex-col space-y-2">
        <Link
          to="https://www.facebook.com/profile.php?id=61565224169508&mibextid=wwXIfr&rdid=Pntntp3NGo5v8Is6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FZhJSRtcY%2F%3Fmibextid%3DwwXIfr#"
          target="_blank"
          className="group relative"
          aria-label="Follow us on Facebook"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded  backdrop-blur-sm shadow-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-xl group-hover:bg-blue-600">
            <FaFacebook className="text-blue-600 group-hover:text-white text-xl transition-colors duration-300" />
          </div>
        </Link>

        <Link
          to="https://www.youtube.com/@advmdabdullahalmamun"
          target="_blank"
          className="group relative"
          aria-label="Subscribe to our YouTube channel"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded  backdrop-blur-sm shadow-lg border border-red-100 hover:border-red-300 transition-all duration-300 hover:scale-110 hover:shadow-xl group-hover:bg-red-600">
            <FaYoutube className="text-red-600 group-hover:text-white text-xl transition-colors duration-300" />
          </div>
        </Link>

        <Link
          to="https://www.instagram.com/advocate_mamun/?igsh=NXE1NnZnZHh6dW8%3D"
          target="_blank"
          className="group relative"
          aria-label="Follow us on Instagram"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded  backdrop-blur-sm shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-110 hover:shadow-xl group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600">
            <FaInstagram className="text-purple-600 group-hover:text-white text-xl transition-colors duration-300" />
          </div>
        </Link>

        <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default StickySocialIcons;
