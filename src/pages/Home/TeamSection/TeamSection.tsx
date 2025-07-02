import React from "react";
import Marquee from "react-fast-marquee";
import imam_hosain from "../../../assets/images/Teams/imam_advocate.jpg"
import meraz_img from "../../../assets/images/Teams/meraj_advocate.jpg"
import anisur_img from "../../../assets/images/Teams/Anisur_advocate.jpg"
import baset_img from "../../../assets/images/Teams/Baset_advocate.jpg"
import monirul_img from "../../../assets/images/Teams/Monirul_advocate.jpg"
import sumaia_img from "../../../assets/images/Teams/Parvin_advocate.jpg"

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Sayed Imam Hossain(Moin)",
      position: "Advocate",
      description:
        "M.Sc (Geography), LLB(Hon's), University of London UK, Leading to Barrister-at-Law",
      image: imam_hosain,
    },
    {
      name: "Md. Meraz Sarder",
      position: "Advocate Supreme Court of Bangladesh",
      description: "Barrister-at-Law (Lincoln'Inn, London), LL.M BPP University, UK, B.T.C BPP University, UK, LL.B(Hon's) University of London, UK",
      image:
        meraz_img,
    },
    {
      name: "Md Anisur Rahman Badsa",
      position: "Advocate",
      description:
        "Anisur leads our trial practice with an 85% success rate in complex civil litigation and white-collar criminal defense matters.",
      image: anisur_img
    },
    {
      name: "Late Senior Advocate Abdul Baset Mojumder",
      position: "Advocate",
      description:
        "Baset leads our trial practice with an 80% success rate in complex civil litigation and white-collar criminal defense matters.",
      image: baset_img
    },
    {
      name: "M. Monirul",
      position: "Advocate",
      description:
        "Monirul leads our trial practice with an 80% success rate in complex civil litigation and white-collar criminal defense matters.",
      image: monirul_img
    },
    {
      name: "Sumaia Parvin Rimmy",
      position: "Legal Adviser And Experts Family Matter",
      description:
        "Parvin leads our trial practice with an 80% success rate in Legal Adviser And Experts Family Matter.",
      image: sumaia_img
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          OUR TEAM
        </h1>

        {/* Team Members Grid */}
        <div >
          <Marquee>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 w-[600px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-1/2 h-64 object-cover rounded-t-lg mb-4"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-blue-700 font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600">
                      {member.description?.slice(0, 100)}
                    </p>
                    <button className="mt-4 text-blue-700 hover:text-blue-900 font-medium">
                      View Full Profile →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
