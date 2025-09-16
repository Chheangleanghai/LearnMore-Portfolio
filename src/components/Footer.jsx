import React from "react";
import { Github, Linkedin, Twitter, Code, Zap, Palette } from "lucide-react";

const Footer = () => {
  const techStack = [
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "React Router", icon: "🛣️", color: "text-red-400" },
    { name: "Vite", icon: "⚡", color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-400" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-300" },
    { name: "Lucide Icons", icon: "🎯", color: "text-purple-400" }
  ];

  return (
    <footer className="bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Technology Stack */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Built with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                <span className="text-xl">{tech.icon}</span>
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Leanghai Chheang. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
