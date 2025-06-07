import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" }
    // { id: 6, link: "leetcode" }
  ];

  return (
    <div className="flex justify-between items-center fixed w-full h-20 bg-black/80 backdrop-blur-sm px-4 z-50">
      <h1 className="text-4xl font-signature ml-2 bg-gradient-to-r from-[#c961de] to-[#7c3aed] bg-clip-text text-transparent"> {"<Ashish/>"}</h1>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li key={id} className="capitalize px-4 cursor-pointer text-white text-lg font-bold">
              <Link
                to={link}
                smooth
                duration={500}
                className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#c961de] after:to-[#7c3aed] after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-[#c961de] hover:to-[#7c3aed] hover:bg-clip-text transition-colors"
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer pr-4 z-10 text-[#7c3aed] hover:text-[#c961de] transition-colors duration-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-black via-[#1a0b2e]/95 to-black backdrop-blur-lg">
          {links.map(({ id, link }) => {
            return (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  className="relative text-gray-200 hover:text-transparent hover:bg-gradient-to-r hover:from-[#c961de] hover:to-[#7c3aed] hover:bg-clip-text transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#c961de] after:to-[#7c3aed] after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
