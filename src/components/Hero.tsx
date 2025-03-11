import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import myImage from "../assets/me.jpg"; // Profile Image
import videoBackground from "../assets/beach.mp4"; // Video Background

export default function Hero() {
  const ropeRef1 = useRef(null);
  const ropeRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ropeRef1.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
    );
    gsap.fromTo(
      ropeRef2.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 0.3 }
    );
  }, []);

  return (
    <section className="h-[90vh] relative flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-[1.1] saturate-[1.2] opacity-90"
      >
        <source src={videoBackground} type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        {/* Profile Picture */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full shadow-2xl shadow-cyan-500/50 relative group">
            <img
              src={myImage}
              alt="Nayan Kumar Biradar"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 filter brightness-95 contrast-110 saturate-110"
            />
          </div>
        </motion.div>

        {/* Ropes */}
        <div className="absolute left-1/3 top-10" ref={ropeRef1}>
          <div className="w-1 h-16 bg-gray-300"></div> {/* Rope */}
        </div>
        <div className="absolute right-1/3 top-10" ref={ropeRef2}>
          <div className="w-1 h-16 bg-gray-300"></div> {/* Rope */}
        </div>

        {/* Animated Name - Puppet Effect */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 tracking-tight drop-shadow-lg relative"
          initial={{ y: -200, opacity: 0, rotate: -15 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
        >
          Nayan Kumar Biradar
        </motion.h1>

        {/* Social Icons */}
        <div className="mt-5 flex justify-center space-x-8">
          <a href="https://www.instagram.com/nk_biradar_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-4xl md:text-5xl hover:scale-110 transition-transform hover:text-pink-400" />
          </a>
          <a href="https://www.linkedin.com/in/nayan-kumar-biradar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-4xl md:text-5xl hover:scale-110 transition-transform hover:text-blue-500" />
          </a>
          <a href="https://github.com/nkbiradar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-4xl md:text-5xl hover:scale-110 transition-transform hover:text-gray-300" />
          </a>
          <a href="mailto:nayankuma1234@gmail.com">
            <FaEnvelope className="text-red-500 text-4xl md:text-5xl hover:scale-110 transition-transform hover:text-red-400" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 animate-bounce text-white text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
