import React from "react";
import Marquee from "react-fast-marquee";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Robert Chen, Esq.",
      position: "Senior Partner",
      description:
        "Specializing in corporate law with 15+ years experience, Robert has successfully handled high-profile mergers and acquisitions for Fortune 500 companies.",
      image:
        "https://images.pexels.com/photos/5668789/pexels-photo-5668789.jpeg",
    },
    {
      name: "Amanda Rodriguez, JD",
      position: "Managing Partner",
      description:
        "With expertise in intellectual property law, Amanda has represented tech startups and entertainment companies in landmark copyright cases.",
      image:
        "https://media.istockphoto.com/id/1424912588/photo/happy-successful-business-leader-in-glasses-head-shot.webp?a=1&b=1&s=612x612&w=0&k=20&c=6SJbK8gfF2BzoINEed16iD178Ouy7JIcSVq7z4fZ57Y=",
    },
    {
      name: "Marcus Johnson, LL.M",
      position: "Litigation Director",
      description:
        "Marcus leads our trial practice with an 85% success rate in complex civil litigation and white-collar criminal defense matters.",
      image:
        "https://plus.unsplash.com/premium_photo-1682095218963-4e9fa1162f20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWR2b2NhdGUlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          OUR LEGAL TEAM
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
