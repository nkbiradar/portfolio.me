import profileImage from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="w-full py-20 bg-gray-950 text-white text-center font-inter">
      {/* Profile Image with Neon Effect */}
      <div className="flex justify-center relative">
        <div className="relative w-52 h-52">
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full blur-2xl opacity-60 bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse"></div>
          {/* Image */}
          <img
            src={profileImage}
            alt="Nayan Kumar Biradar"
            className="w-52 h-52 object-cover rounded-full border-4 border-cyan-400 shadow-2xl transition-transform duration-500 transform hover:scale-110 hover:shadow-cyan-400/50"
          />
          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-[6px] border-purple-500 opacity-40 animate-spin-slow"></div>
        </div>
      </div>

      {/* Section Title */}
      <h1 className="text-5xl font-extrabold font-orbitron text-cyan-400 mt-6 tracking-wide drop-shadow-lg">
        About Me
      </h1>

      {/* Intro Text */}
      <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in">
        Hey, I'm{" "}
        <span className="font-semibold text-white text-shadow-md">
          Nayan Kumar Biradar
        </span>
        , a passionate Full-Stack Developer and AI Enthusiast from{" "}
        <span className="text-cyan-300 font-semibold">IIIT Dharwad</span>.  
        I love crafting futuristic applications and solving real-world 
        problems with technology.
      </p>

      {/* Skills Section */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {["Full-Stack Developer", "Machine Learning & AI Enthusiast"].map((skill, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-gray-800 text-cyan-300 font-bold rounded-xl shadow-xl text-lg transition-transform transform hover:scale-110 hover:bg-cyan-500 hover:text-gray-900 hover:shadow-cyan-500/50"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Education */}
      <p className="mt-10 text-xl font-semibold text-purple-400 drop-shadow-lg">
        🎓 IIIT Dharwad, Karnataka – B.Tech in CSE (2022-2026)
      </p>
    </div>
  );
}
