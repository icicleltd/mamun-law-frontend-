import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Facebook } from "lucide-react";

// Contact Modal Types
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Contact Modal Component
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="bg-blue-900 text-white px-4 sm:px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none p-1"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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

        <div className="p-4 sm:p-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-xs sm:text-sm">
                {errors.name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-xs sm:text-sm">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
            >
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="+1 (234) 567-8900"
            />
            {errors.phone && (
              <p className="mt-1 text-red-500 text-xs sm:text-sm">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
            >
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="How can we help you?"
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-red-500 text-xs sm:text-sm">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 text-sm sm:text-base bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 order-1 sm:order-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Integrated NavBar Component
const NavBar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Handle form submission
  const handleContactSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setContactModalOpen(false);
    setMobileMenuOpen(false);
    Swal.fire({
      icon: "success",
      title: "Thanks For Your Submissions !!!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full left-0 right-0 z-40 bg-transparent transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden lg:flex container mx-auto py-4 px-6 justify-between items-center">
          {/* Left side - Navigation Links */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              CONTACT
            </a>

            <div className="flex items-center space-x-3 group">
              <div className="w-px h-6 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent ml-2"></div>
            </div>
          </div>

          {/* Middle - Logo */}
          <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
            <Link to={"/"}>
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="logo"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right side - Buttons */}
          <div className="flex items-center space-x-2">
            <button
              className="border border-white text-white font-medium px-4 xl:px-6 py-2 text-sm xl:text-base transition-colors duration-200 hover:bg-white hover:text-blue-600 whitespace-nowrap"
              onClick={() => setContactModalOpen(true)}
            >
              APPOINTMENT
            </button>
            <Link to={"/login"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 xl:px-6 py-2 text-sm xl:text-base transition-colors duration-200 whitespace-nowrap">
                LOGIN
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center py-3 px-4 sm:px-6">
            {/* Mobile Logo */}
            <Link to={"/"}>
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="logo"
                  width={80}
                  height={40}
                  className="sm:w-[100px] sm:h-[50px] object-contain"
                />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-300 focus:outline-none p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
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
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown - FIXED */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-t border-blue-800 z-50">
              <div className="px-4 py-3 space-y-3">
                {/* Navigation Links */}
                <a
                  href="#"
                  className="block text-white hover:text-blue-300 font-medium py-2 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-blue-300 font-medium py-2 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-blue-300 font-medium py-2 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </a>

                {/* Social Media Link */}
                {/* <div className="py-2">
                  <Facebook className="inline-block text-white hover:text-blue-300 transition-colors duration-200" size={20} />
                </div> */}

                {/* Mobile Buttons */}
                <div className="pt-3 space-y-3 border-t border-blue-800 py-8">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 text-sm transition-colors duration-200 rounded"
                    onClick={() => {
                      setContactModalOpen(true);
                      closeMobileMenu();
                    }}
                  >
                    BOOK AN APPOINTMENT
                  </button>

                  <Link to={"/login"} className="block">
                    <button
                      className="w-full border border-white text-white font-medium px-4 py-3 text-sm transition-colors duration-200 hover:bg-white hover:text-blue-600 rounded"
                      onClick={closeMobileMenu}
                    >
                      LOGIN
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />
    </>
  );
};

export default NavBar;