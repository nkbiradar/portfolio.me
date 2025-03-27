import { Github, ExternalLink, MessageSquare } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  icon: JSX.Element;
  github: string;
  live?: string; // Optional live link
}

const projects: Project[] = [
  {
    title: "Real-Time Chat Application",
    description: "Full-stack chat app with real-time messaging, user authentication, and file sharing.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    icon: <MessageSquare size={24} />,
    github: "https://github.com/nkbiradar/fullstack-chat-app",
    live: "https://fullstack-chat-app-xkt6.onrender.com", // Updated Render deployment link
  },
  {
    title: "AI-Based Fraud Detection",
    description: "Machine learning model for detecting fraudulent transactions in online payments.",
    image: "https://media.istockphoto.com/id/507032213/photo/investigating-the-crimescene.jpg?s=612x612&w=0&k=20&c=_dddXjjG03JrzWt8V5Nqgf9iuAgfBvHvdNeJk1Mhxvw=",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    icon: <MessageSquare size={24} />,
    github: "https://github.com/nkbiradar/Crime-data",
    live: "", // No live deployment yet
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">🚀 My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-purple-600 text-white text-sm px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>

                {/* Live Project Link (Shown only if available) */}
                {project.live && project.live.trim() !== "" && (
                  <a
                    href={project.live}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} /> View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
