import React from "react";
import { ChevronDown, User, Github, Linkedin, Mail } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
            <User className="w-16 h-16 text-purple-400" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Frontend Developer & UI/UX Enthusiast
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Learn More About Me
          </button>
          <a
            href="mailto:john.doe@email.com"
            className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:john.doe@email.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
