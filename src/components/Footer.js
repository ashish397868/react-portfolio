import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size="1.5em" />
        </>
      ),
      href: "https://www.linkedin.com/in/ashish-kumar-4b3396213/",
      color: "hover:text-[#0A66C2]", // LinkedIn brand color
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size="1.5em" />
        </>
      ),
      href: "https://github.com/ashish397868",
      color: "hover:text-gray-400", // GitHub hover color
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size="1.5em"/>
        </>
      ),
      href: "mailto:ashish397868@gmail.com",
      color: "hover:text-[#EA4335]", // Gmail-like color
    },
  ]
  
  return (
    <footer className="relative flex justify-evenly lg:text-xl h-16 p-4 bg-gradient-to-r from-black via-[#1a0b2e] to-black text-white">
      <div className="absolute opacity-5" />
      <div className="relative z-10 lg:w-1/2">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed]">
          &copy; 2025 All Rights Reserved
        </span>
      </div>
      <ul className="relative z-10 flex space-x-1 lg:space-x-6">
        {links.map(({ id, child, href, color }) => (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer block transform transition-all duration-300 
                ${color} hover:scale-125 hover:-translate-y-1
                relative before:content-[''] before:absolute before:-bottom-1 before:left-0 
                before:w-full before:h-[2px] before:bg-current
                before:transform before:scale-x-0 before:origin-right before:transition-transform
                before:duration-300 hover:before:scale-x-100 hover:before:origin-left`}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
