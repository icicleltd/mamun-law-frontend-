import React, { useState } from "react";

// images
// import image_01 from "@/assets/images/award_wining.jpeg";
import image_02 from "../../../assets/images/event_01.jpeg";
import image_03 from "../../../assets/images/event_02.jpeg";
import image_04 from "../../../assets/images/event_03.jpeg";
import image_05 from "../../../assets/images/event_04.jpeg";
import image_06 from "../../../assets/images/event_05.jpeg";
import image_07 from "../../../assets/images/event_06.jpeg";
import image_08 from "../../../assets/images/event_07.jpeg";

const GalleryTabSection: React.FC = () => {
  const [filter, setFilter] = useState("All");

  // Team members data
  const leaders = [
    // {
    //   id: 1,
    //   name: "",
    //   title: "Partner",
    //   specialty: "Dispute Resolution",
    //   image: image_01,
    //   category: ["Executive Committee", "Lawyers"],
    // },
    {
      id: 2,
      name: "Aakash Choubey",
      title: "Partner",
      specialty: "Mergers and Acquisitions, Private Equity, Public M&A",
      image: image_02,
      category: ["Lawyers"],
    },
    {
      id: 3,
      name: "Aashutosh Sampat",
      title: "Partner",
      specialty:
        "Corporate and Commercial, Private Equity, Restructuring and Insolvency",
      image: image_03,
      category: ["Functional Leaders"],
    },
    {
      id: 4,
      name: "Team Member 4",
      title: "Partner",
      specialty: "Banking and Finance",
      image: image_04,
      category: ["Lawyers"],
    },
    {
      id: 5,
      name: "Team Member 5",
      title: "Partner",
      specialty: "Intellectual Property",
      image: image_05,
      category: ["Executive Committee"],
    },
    {
      id: 6,
      name: "Team Member 6",
      title: "Partner",
      specialty: "Technology and Innovation",
      image: image_06,
      category: ["Functional Leaders"],
    },
    {
      id: 7,
      name: "Team Member 6",
      title: "Partner",
      specialty: "Technology and Innovation",
      image: image_07,
      category: ["Functional Leaders"],
    },
    {
      id: 8,
      name: "Team Member 8",
      title: "Partner",
      specialty: "Intellectual Property",
      image: image_08,
      category: ["Executive Committee"],
    },
  ];

  // Filter leaders based on selected category
  const filteredLeaders =
    filter === "All"
      ? leaders
      : leaders.filter((leader) => leader.category.includes(filter));

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left sidebar */}
      <div className="w-full md:w-2/5 bg-blue-900 text-white p-8 md:py-36">
        <h1 className="text-xl md:text-2xl font-bold mb-6">Gallery</h1>

        <p className="mb-8 text-lg">
          Mamun Law has a robust team of lawyers with rich experience across
          various areas of work. Find one who specialises in what you need.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm border border-blue-400 ${
              filter === "All" ? "bg-blue-400 text-blue-900" : "bg-transparent"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm border border-blue-400 ${
              filter === "Executive Committee"
                ? "bg-blue-400 text-blue-900"
                : "bg-transparent"
            }`}
            onClick={() => setFilter("Executive Committee")}
          >
            Events
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm border border-blue-400 ${
              filter === "Lawyers"
                ? "bg-blue-400 text-blue-900"
                : "bg-transparent"
            }`}
            onClick={() => setFilter("Lawyers")}
          >
            Activities
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm border border-blue-400 ${
              filter === "Functional Leaders"
                ? "bg-blue-400 text-blue-900"
                : "bg-transparent"
            }`}
            onClick={() => setFilter("Functional Leaders")}
          >
            Functional Leaders
          </button>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-2">OR</p>

          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Name"
              className="w-full bg-transparent border-b border-white pb-2 text-white placeholder-blue-300 focus:outline-none"
            />
            <button className="absolute right-0 bottom-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right content - Team grid */}
      <div className="w-full md:w-3/5 p-4 mt-32 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLeaders.map((leader) => (
            <div key={leader.id} className="bg-white overflow-hidden mb-4">
              <div className="h-60 overflow-hidden bg-blue-50">
                {leader.id === 1 ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-32 w-32 text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                ) : (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryTabSection;
