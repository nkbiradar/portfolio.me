import React from 'react';
import { Code2, Database, Globe, Layout, Server, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout size={24} />,
    items: [
      { name: "React.js", level: 70 },
      { name: "JavaScript/TypeScript", level: 60 },
      { name: "HTML/CSS", level: 90 },
      
    ]
  },
  {
    category: "Backend Development",
    icon: <Server size={24} />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 50 },
      { name: "Python", level: 65 },
      { name: "RESTful APIs", level: 70 }
    ]
  },
  {
    category: "Database Management",
    icon: <Database size={24} />,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      
    ]
  },
  {
    category: "Tools & Technologies",
    icon: <Terminal size={24} />,
    items: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 75 },
      { name: "AWS", level: 40 },
      
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <div className="text-purple-500">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-purple-400">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
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