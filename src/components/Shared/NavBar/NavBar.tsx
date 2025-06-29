import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Swal from "sweetalert2";

// Contact Modal Types
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Contact Modal Component with Enhanced Styling
const ContactModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ContactFormData) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto overflow-hidden max-h-[90vh] overflow-y-auto transform animate-scaleIn">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">Get In Touch</h3>
              <p className="text-blue-100 text-sm mt-1">
                We'd love to hear from you
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 focus:outline-none p-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Enhanced Form Fields */}
          <div className="space-y-5">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2 text-sm"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                    errors.name
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-blue-400"
                  }`}
                  placeholder="Enter your full name"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              {errors.name && (
                <p className="mt-2 text-red-500 text-xs animate-slideDown">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2 text-sm"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                    errors.email
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-blue-400"
                  }`}
                  placeholder="your.email@example.com"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
              {errors.email && (
                <p className="mt-2 text-red-500 text-xs animate-slideDown">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2 text-sm"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ${
                    errors.phone
                      ? "border-red-400 focus:border-red-400"
                      : "border-gray-200 focus:border-blue-400"
                  }`}
                  placeholder="+880 "
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
              </div>
              {errors.phone && (
                <p className="mt-2 text-red-500 text-xs animate-slideDown">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2 text-sm"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 text-sm border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 resize-vertical transition-all duration-200 ${
                  errors.message
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-blue-400"
                }`}
                placeholder="Tell us how we can help you..."
              ></textarea>
              {errors.message && (
                <p className="mt-2 text-red-500 text-xs animate-slideDown">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-sm font-medium border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-200 order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105 order-1 sm:order-2 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced NavBar Component
const NavBar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setScrolled(currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleContactSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setContactModalOpen(false);
    setMobileMenuOpen(false);
    Swal.fire({
      icon: "success",
      title: "Message Sent Successfully!",
      text: "We'll get back to you soon.",
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: "rounded-xl",
      },
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      <nav
        className={`fixed w-full left-0 right-0 z-40 transition-all px-0 md:px-12 duration-500 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden lg:flex mx-auto py-4 justify-between items-center">
          {/* Left side - Navigation Links */}
          <div className="flex items-center space-x-8">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive("hero")}
              className={`font-semibold text-sm tracking-wider transition-all duration-300 relative group cursor-pointer ${
                scrolled
                  ? "text-orange-700 hover:text-orange-600"
                  : "text-orange-700 hover:text-orange-300"
              } ${activeSection === "hero" ? "text-blue-600" : ""}`}
            >
              HOME
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                activeSection === "hero" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </ScrollLink>
            
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleSetActive("about")}
              className={`font-semibold text-sm tracking-wider transition-all duration-300 relative group cursor-pointer ${
                scrolled
                  ? "text-orange-700 hover:text-orange-600"
                  : "text-orange-700 hover:text-orange-300"
              } ${activeSection === "about" ? "text-blue-600" : ""}`}
            >
              ABOUT
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                activeSection === "about" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </ScrollLink>
            
            <button
              onClick={() => setContactModalOpen(true)}
              className={`font-semibold text-sm tracking-wider transition-all duration-300 relative group cursor-pointer ${
                scrolled
                  ? "text-orange-700 hover:text-orange-600"
                  : "text-orange-700 hover:text-orange-300"
              }`}
            >
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Elegant Divider */}
            <div className="flex items-center space-x-3 group ml-4">
              <div
                className={`w-px h-8 transition-all duration-300 ${
                  scrolled
                    ? "bg-gradient-to-b from-transparent via-gray-300 to-transparent"
                    : "bg-gradient-to-b from-transparent via-white/30 to-transparent"
                }`}
              ></div>
            </div>
          </div>

          {/* Middle - Enhanced Logo */}
          <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
            <Link to={"/"} className="group">
              <div className="flex items-center transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={logo}
                    alt="logo"
                    width={140}
                    height={70}
                    className="object-contain drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right side - Enhanced Buttons */}
          <div className="flex items-center space-x-3">
            <button
              className={`relative overflow-hidden font-semibold px-6 xl:px-8 py-3 text-sm xl:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg group ${
                scrolled
                  ? "border-2 border-white text-white hover:border-orange-500 hover:text-white"
                  : "border-2 border-white text-white hover:bg-white hover:text-white"
              }`}
              onClick={() => setContactModalOpen(true)}
            >
              <span className="relative z-10">APPOINTMENT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <Link to={"/login"}>
              <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 xl:px-8 py-3 text-sm xl:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                <span className="relative z-10">LOGIN</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>
          </div>
        </div>

        {/* Enhanced Mobile/Tablet Navigation */}
        <div className="lg:hidden">
          <div
            className={`flex justify-between items-center py-4 px-4 sm:px-6 transition-all duration-300 ${
              scrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent"
            }`}
          >
            {/* Mobile Logo */}
            <Link to={"/"} className="group">
              <div className="flex items-center transition-transform duration-300 hover:scale-105">
                <img
                  src={logo}
                  alt="logo"
                  width={90}
                  height={45}
                  className="sm:w-[110px] sm:h-[55px] object-contain drop-shadow-lg"
                />
              </div>
            </Link>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`p-3 rounded-xl transition-all duration-300 focus:outline-none group ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    scrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen
                      ? "rotate-45 translate-y-2.5"
                      : "translate-y-0"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    scrolled ? "bg-gray-700" : "bg-white"
                  } ${mobileMenuOpen ? "opacity-0" : "translate-y-2"}`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    scrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen
                      ? "-rotate-45 translate-y-2.5"
                      : "translate-y-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Menu Dropdown */}
          <div
            className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl transition-all duration-300 ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="px-6 py-6 space-y-4">
              {/* Navigation Links */}
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block text-orange-700 hover:text-blue-600 font-semibold py-3 transition-all duration-200 border-b border-gray-100 last:border-b-0 relative group cursor-pointer ${
                  activeSection === "hero" ? "text-blue-600" : ""
                }`}
                onClick={closeMobileMenu}
                onSetActive={() => handleSetActive("hero")}
              >
                HOME
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                  activeSection === "hero" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </ScrollLink>
              
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`block text-gray-700 hover:text-blue-600 font-semibold py-3 transition-all duration-200 border-b border-gray-100 last:border-b-0 relative group cursor-pointer ${
                  activeSection === "about" ? "text-blue-600" : ""
                }`}
                onClick={closeMobileMenu}
                onSetActive={() => handleSetActive("about")}
              >
                ABOUT
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                  activeSection === "about" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </ScrollLink>
              
              <button
                className="block text-gray-700 hover:text-blue-600 font-semibold py-3 transition-all duration-200 border-b border-gray-100 last:border-b-0 relative group w-full text-left"
                onClick={() => {
                  setContactModalOpen(true);
                  closeMobileMenu();
                }}
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Enhanced Mobile Buttons */}
              <div className="pt-6 space-y-4 border-t border-gray-200">
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 text-sm transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => {
                    setContactModalOpen(true);
                    closeMobileMenu();
                  }}
                >
                  BOOK AN APPOINTMENT
                </button>

                <Link to={"/login"} className="block">
                  <button
                    className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold px-6 py-4 text-sm transition-all duration-300 rounded-xl hover:bg-blue-50 transform hover:scale-105"
                    onClick={closeMobileMenu}
                  >
                    LOGIN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
        
        .bg-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
};

export default NavBar;