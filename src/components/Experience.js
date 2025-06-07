import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import { SiExpress, SiMongodb, SiCplusplus, SiMysql } from "react-icons/si";

const techs = [
  { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
  { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
  { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
  { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
  { id: 5, src: nextjs, title: "Next.js", style: "shadow-white" },
  { id: 6, src: node, title: "Node.js", style: "shadow-green-500" },
  { id: 7, Icon: SiExpress, title: "Express.js", style: "shadow-gray-400" },
  { id: 8, Icon: SiMongodb, title: "MongoDB", style: "shadow-green-600" },
  { id: 9, Icon: SiCplusplus, title: "C++", style: "shadow-blue-800" },
  { id: 10, Icon: SiMysql, title: "SQL", style: "shadow-[#00758F]" },
  { id: 11, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
  { id: 12, src: github, title: "GitHub", style: "shadow-gray-400" },
];

const TechCard = ({ tech }) => (
  <motion.div
    whileHover={{
      scale: 1.2,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
    className={`relative group bg-[#261d45]/40 border-2 border-[#4a3a7a]/50 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl ${tech.style} hover:border-[#c961de]`}
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#c961de]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    {tech.src ? <img src={tech.src} alt={tech.title} className="w-16 h-16 object-contain mb-4" /> : <tech.Icon className="w-16 h-16 text-gray-200 mb-4" />}
    <p className="text-gray-300 group-hover:text-white font-semibold">{tech.title}</p>
  </motion.div>
);

const Experience = () => (
  <div name="experience" className="bg-gradient-to-br from-black via-[#1a0b2e] to-[#1a0b2e] w-full min-h-screen pt-24 relative overflow-hidden">
    {/* Background texture */}
    <div className="absolute opacity-5" />

    {/* Content */}
    <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white relative z-10">
      <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed]">Experience</h2>
      <p className="pb-8 text-gray-300 font-semibold">Technologies I’ve mastered through hands-on projects</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-5">
        {techs.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
