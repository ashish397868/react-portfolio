// Portfolio.jsx
import { FaGithub } from "react-icons/fa";
import weather from "../assets/portfolio/weather.jpg";
import passwordGen from "../assets/portfolio/passwordGen.jpg";
import ticTac from "../assets/portfolio/ticTac.jpg";
import chatApp from "../assets/portfolio/chatApp.png";
import textUtils from "../assets/portfolio/textUtils.jpg";
import instaClone from "../assets/portfolio/instaClone.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weather,
      title: "Weather App",
      description: "A React app fetching real-time weather forecasts with elegant UI.",
      code: "https://github.com/ak397/weatherApp-usingReactJs",
      demo: "https://weather-forecast-info.netlify.app/",
      tags: ["React", "TailwindCSS", "Weather API"],
    },
    {
      id: 2,
      src: passwordGen,
      title: "Password Generator",
      description: "Generates secure passwords using customizable criteria.",
      code: "https://github.com/ak397/react-password-generator",
      demo: "https://password-generator91.netlify.app/",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      id: 3,
      src: ticTac,
      title: "Tic Tac Toe",
      description: "Classic Tic Tac Toe game built with React components.",
      code: "https://github.com/ak397/react-tic-tac-toe",
      demo: "https://react-tic-tac-toe-ak.netlify.app/",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      id: 4,
      src: chatApp,
      title: "Chat App",
      description: "Basic chat application and real-time messaging.",
      code: "https://github.com/ashish397868/livechat",
      demo: "https://livechat-wccu.onrender.com/",
      tags: ["React", "TailwindCSS", "Node.js", "Socket.io"],
    },
    {
      id: 5,
      src: textUtils,
      title: "Text Utils",
      description: "Utility toolkit for transforming and analyzing text in React.",
      code: "https://github.com/ak397/TextUtils-React",
      demo: "https://ak397.github.io/TextUtils-React/",
      tags: ["React", "Bootstrap", "JavaScript"],
    },
    {
      id: 6,
      src: instaClone,
      title: "Instagram Clone",
      description: "Login page clone replicating Instagram UI using Tailwind CSS.",
      code: "https://github.com/ak397/instagramLoginPageClone-usingTailwindCss",
      demo: "https://instagramloginpageclone-usingtailwind.netlify.app/",
      tags: ["HTML", "TailwindCSS"],
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-br from-black via-[#1a0b2e] to-[#1a0b2e] w-full text-white min-h-screen py-20 relative">
      <div className="absolute opacity-5" />

      <div className="relative z-10 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed]">Portfolio</p>
          <p className="py-6 text-gray-300 font-bold">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0 pb-8">
          {portfolios.map(({ id, src, title, description, demo, code, tags }) => (
            <div key={id} className="group relative flex flex-col justify-between bg-[#261d45]/40 p-4 rounded-xl border border-[#4a3a7a] hover:border-[#c961de] transition-all duration-300 transform hover:scale-105">
              {/* overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#c961de]/5 to-[#7c3aed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* image */}
              <img src={src} alt={title} className="rounded-lg w-full h-52 object-cover duration-300 group-hover:scale-105 transition-transform shadow-lg shadow-purple-900/20" />

              {/* Tags section */}
              <div className="flex flex-wrap gap-2 mt-4 mb-3">
                {tags.map((tag, index) => (
                  <span key={index} className="font-semibold px-2 py-1 text-xs rounded-full bg-[#4a3a7a]/50 text-gray-300 border border-[#4a3a7a] group-hover:border-[#c961de]/50 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* title & description */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[#c961de]">{title}</h3>
                <p className="text-gray-300 font-bold text-sm mt-1">{description}</p>
              </div>

              {/* buttons */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 text-center">
                  <button className="px-6 py-2 w-full bg-gradient-to-r from-[#c961de] to-[#7c3aed] rounded-md font-bold text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-1/2 text-center">
                  <button className="flex items-center justify-center px-6 py-2 w-full bg-[#261d45] border border-[#4a3a7a] hover:border-[#c961de] rounded-md font-bold text-white transform hover:scale-105 transition-all duration-300">
                    <FaGithub size={20} />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
