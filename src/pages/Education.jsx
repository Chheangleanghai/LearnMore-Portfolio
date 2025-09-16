import React from "react";
import { BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    school: "Royal University of Phnom Penh (RUPP)",
    period: "2024 - Present (Year 2)",
    details: "Currently pursuing my degree in Computer Science and Engineering."
  },
  {
    degree: "High School Diploma",
    school: "Koh Kong High School",
    period: "2021 - 2023",
    details: "Completed high school education with focus on science and mathematics."
  },
  {
    degree: "Frontend Development Certificate",
    school: "ETEC",
    period: "2025",
    details: "Professional certificate in frontend development technologies and practices."
  },
  {
    degree: "Adobe Photoshop Certificate",
    school: "ETEC",
    period: "2025",
    details: "Certificate in digital design and image editing using Adobe Photoshop."
  },
  {
    degree: "C++/OOP Certificate",
    school: "ETEC",
    period: "2024",
    details: "Certificate in C++ programming and Object-Oriented Programming concepts."
  }
];

const Education = () => {
  return (
    <section className="min-h-screen py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education & Certificates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications that built my foundation.
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-gray-300 font-medium">{edu.school}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                  <BookOpen className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
