import React from "react";
import { Link } from "react-router-dom";
import { Home, User, Star, Briefcase, GraduationCap } from "lucide-react";

const navItems = [
  { path: "/", icon: <Home className="w-4 h-4" /> },
  { path: "/about", icon: <User className="w-4 h-4" /> },
  { path: "/skills", icon: <Star className="w-4 h-4" /> },
  { path: "/experience", icon: <Briefcase className="w-4 h-4" /> },
  { path: "/education", icon: <GraduationCap className="w-4 h-4" /> },
];

const MobileNav = ({ currentPath }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
      <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-2">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`p-3 rounded-xl transition-all duration-200 ${
                currentPath === item.path
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
