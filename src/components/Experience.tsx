import { Award, Users, Activity, ExternalLink } from 'lucide-react';

const sections = [
  {
    type: "Certifications & Achievements",
    icon: <Award className="text-purple-500" size={24} />,
    items: [
      {
        title: "MERN Stack Certification",
        organization: "MongoDB, Express, React, Node.js",
        period: "Completed",
        link: "https://drive.google.com/file/d/1H1xRyTdCjoHasQc9okSQ7k3DxdAZHctJ/view?usp=sharing"
      },
      {
        title: "AI Certification",
        organization: "Artificial Intelligence Tools and Applications",
        period: "Completed",
        link: "https://drive.google.com/file/d/1-3TRqlEjEx23dSxZRBXeWxU2A1RfG_V6/view?usp=sharing"
      }
    ]
  },
  {
    type: "Clubs & Extracurriculars",
    icon: <Users className="text-purple-500" size={24} />,
    items: [
      {
        title: "E-CELL Club Member",
        organization: "IIIT Dharwad",
        description: "Active member contributing to entrepreneurial thinking."
      },
      {
        title: "Sponsorship & Outreach Member",
        organization: "HR Conclave, IIIT Dharwad",
        description: "Played a key role in securing sponsorship and managing outreach activities."
      }
    ]
  },
  {
    type: "Participation",
    icon: <Activity className="text-purple-500" size={24} />,
    items: [
      {
        title: "Unstop Marketing Competition",
        description: "Organized by AngelOne MG EXPO."
      },
      {
        title: "Unstop Business Quiz of the Thoms",
        description: "Organized by IIT Roorkee."
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Certifications & Achievements
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.type}</h3>
              </div>
              
              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <div key={i} className="relative pl-4 border-l border-purple-500/30">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                    <h4 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                      {item.title}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="text-purple-400" size={18} />
                        </a>
                      )}
                    </h4>
                    <p className="text-purple-400 mb-1">{item.organization}</p>
                    {item.period && <p className="text-sm text-gray-400 mb-2">{item.period}</p>}
                    {item.description && <p className="text-gray-300">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}