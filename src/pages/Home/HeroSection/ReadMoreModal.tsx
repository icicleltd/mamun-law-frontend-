// ReadMoreModal.tsx
import React, { useEffect } from "react";
import modalImg from "../../../assets/images/modalimg/modalimg_01.jpeg";

interface ReadMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReadMoreModal: React.FC<ReadMoreModalProps> = ({ isOpen, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto max-h-[90vh] overflow-hidden transform animate-slideUp">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                About Md. Abdullah Al Mamun
              </h2>
              <p className="text-blue-100 text-sm md:text-base">
                Advocate of the Supreme Court of Bangladesh
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 focus:outline-none p-2 rounded-full hover:bg-white/10 transition-all duration-200 ml-4"
              aria-label="Close modal"
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

        {/* Modal Content */}
        <div className="px-6 py-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-lg max-w-none">
            {/* Professional Photo Placeholder */}
            <div className="float-right ml-6 mb-6 hidden md:block">
              <div className="w-48 h-56 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg flex items-center justify-center border-4 border-white">
                <div className="text-center text-blue-600">
                  <img
                    src={modalImg}
                    alt="Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Early Life & Education */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full mr-3"></span>
                Early Life & Background
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am{" "}
                <strong className="text-blue-800">Md. Abdullah Al Mamun</strong>
                , an Advocate of the
                <strong className="text-blue-800">
                  {" "}
                  Supreme Court of Bangladesh
                </strong>{" "}
                and the head of this prestigious law firm. Born into a respected
                Muslim family in the peaceful village of Beneyali, under
                Jhikargacha Upazila of Jessore District, my roots are deeply
                connected to the agricultural heritage of rural Bangladesh.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Growing up in a family with strong agricultural traditions, I
                learned the values of hard work, integrity, and dedication from
                an early age. These foundational principles have guided my
                entire legal career and continue to shape my approach to serving
                clients.
              </p>
            </section>

            {/* Educational Journey */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full mr-3"></span>
                Educational Excellence
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Secondary Education
                  </h4>
                  <p className="text-gray-700">
                    Completed my secondary education from a village school,
                    where I developed a strong foundation in academics and
                    cultivated my passion for justice and legal studies.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Higher Secondary Education
                  </h4>
                  <p className="text-gray-700">
                    Pursued higher secondary education at the renowned{" "}
                    <strong>Jessore Cantonment College</strong>, an institution
                    known for its academic excellence and disciplined
                    environment.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Undergraduate Studies
                  </h4>
                  <p className="text-gray-700">
                    Completed undergraduate studies at{" "}
                    <strong>Michael Madhusudan Dutta College</strong>, where I
                    further developed my analytical and critical thinking
                    skills.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Legal Education</h4>
                  <p>
                    Earned my{" "}
                    <strong>LL.B. degree from Northern University</strong>,
                    where I specialized in commercial law and developed
                    expertise in various areas of legal practice.
                  </p>
                </div>
              </div>
            </section>

            {/* Professional Career */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full mr-3"></span>
                Professional Journey
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  After successfully passing the bar examination, I embarked on
                  my legal career at the
                  <strong className="text-blue-800">
                    {" "}
                    Dhaka Bar Association
                  </strong>
                  . This marked the beginning of my journey in the legal
                  profession, where I gained invaluable experience handling
                  diverse cases and understanding the intricacies of
                  Bangladesh's legal system.
                </p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Supreme Court Advocate
                  </h4>
                  <p className="text-amber-800">
                    Through dedication and consistent excellence in legal
                    practice, I eventually became a regular advocate of the{" "}
                    <strong>Supreme Court of Bangladesh</strong>, representing
                    clients in the highest court of the land.
                  </p>
                </div>
              </div>
            </section>

            {/* Areas of Expertise */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full mr-3"></span>
                Areas of Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Commercial Law
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive legal solutions for business transactions and
                    commercial disputes.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Civil Litigation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Expert representation in civil matters and dispute
                    resolution.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Corporate Affairs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Legal guidance for corporate governance and compliance
                    matters.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Legal Consultation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Strategic legal advice for individuals and organizations.
                  </p>
                </div>
              </div>
            </section>

            {/* Philosophy & Approach */}
            <section className="mb-6">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full mr-3"></span>
                Legal Philosophy
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "Justice is not just about applying the law; it's about
                  understanding the human story behind every case and ensuring
                  that fairness prevails. My agricultural roots have taught me
                  patience, my education has given me knowledge, and my
                  experience has provided wisdom to serve my clients with
                  integrity and dedication."
                </blockquote>
                <footer className="mt-4 text-right">
                  <cite className="text-blue-800 font-semibold">
                    — Md. Abdullah Al Mamun
                  </cite>
                </footer>
              </div>
            </section>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Close
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .bg-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 20px 20px;
        }
        
        .prose h3 {
          margin-top: 0;
        }
        
        .prose p {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ReadMoreModal;
