import Image from "next/image";

const teamMembers = [
  {
    name: "Abir",
    college: "Srinivas College",
    branch: "AIML BRANCH",
    image: "/team/abir.png", 
  },
  {
    name: "Lishmith",
    college: "Srinivas College",
    branch: "CSE BRANCH",
    image: "/team/lishmith.png",
  },
  {
    name: "Shimaz",
    college: "Srinivas College",
    branch: "CSCB BRANCH",
    image: "/team/shimaz.png",
  },
  {
    name: "Shreya",
    college: "Srinivas College",
    branch: "AIML BRANCH",
    image: "/team/shreya.png",
  },
  {
    name: "Shreyas",
    college: "Srinivas College",
    branch: "CSE BRANCH",
    image: "/team/shreyas.png",
  },
];

export default function Team() {
  return (
    <section className="relative bg-gradient-to-b from-[#ffdfd7] to-[#fff7c7] py-40 px-4 md:px-8 border-t border-black/10">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <img src="/assets/Vector9.svg" alt="" className="w-full h-auto block" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Optional Header - Uncomment if you want a title */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Meet Our Team</h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-3 pb-6 w-full max-w-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-gray-200 mb-4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
              </div>

              {/* Text Content */}
              <div className="text-center mt-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-700 font-medium leading-tight">
                  {member.college}
                </p>
                <p className="text-[11px] text-gray-500 uppercase tracking-wider font-bold mt-1">
                  {member.branch}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}