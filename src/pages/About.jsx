import React from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Motivated and detail-oriented student with a strong interest in Frontend Development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I am a motivated and detail-oriented student with a strong interest in Frontend Development. 
              Skilled in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, jQuery and React.js with a passion 
              for building responsive and user-friendly web applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am a quick learner, eager to gain practical experience and grow as a developer through 
              frontend development opportunities. I believe in creating intuitive user experiences that 
              combine functionality with beautiful design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, working on personal projects, 
              or continuously learning to improve my skills in web development.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">chheangleanghai160@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">010 248 053</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Sangkat Samraong Kraom, Potsenchey District, Phnom Penh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Available for internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
