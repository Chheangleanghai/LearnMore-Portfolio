import React from "react";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: 'Personal Portfolio Website',
    company: 'Personal Project',
    period: '2024 - Present',
    description: 'Built with React.js + Vite, JavaScript, and TailwindCSS. Fully responsive and deployed on GitHub Pages.',
    technologies: ['React.js', 'Vite', 'JavaScript', 'Tailwind CSS', 'GitHub Pages']
  },
  {
    title: 'E-commerce Application',
    company: 'Personal Project',
    period: '2024',
    description: 'JavaScript with TailwindCSS application with CRUD functionality and local storage.',
    technologies: ['JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Local Storage']
  }
];

const Experience = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Personal projects showcasing my frontend development skills and learning journey.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-300 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
