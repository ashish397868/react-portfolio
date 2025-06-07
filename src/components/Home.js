import { BsArrowRight } from "react-icons/bs"
import dp from "../assets/dp.png"
import { Link } from "react-scroll"
import {ReactTyped } from "react-typed"
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-br from-black via-[#1a0b2e] to-[#1a0b2e] relative">
      {/* subtle texture */}
      <div className="absolute opacity-5" />

      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 flex-col-reverse md:flex-row relative z-10">
        <AnimatedSection className="flex flex-col justify-center h-full">
          <motion.h2 
            className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c961de] to-[#7c3aed] text-center md:text-start min-h-[120px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm{" "}
            <div className="w-[24rem] md:w-[50vw]">
              <ReactTyped 
                strings={[
                  "a Full Stack Developer",
                  "a MERN Developer",
                  "a Node Developer",
                  "Passionate about Building Web Apps",
                  "a React Developer"
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
                className="bg-gradient-to-r from-[#c961de] to-[#7c3aed] bg-clip-text text-transparent"
              />
            </div>
          </motion.h2>

          <motion.p 
            className="text-gray-300 font-semibold py-4 max-w-md text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I have 6 months of experience building and designing web applications.
            Currently, I love working on web apps using technologies like React and Tailwind.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#c961de] to-[#7c3aed] cursor-pointer m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Portfolio
              <span className="ml-2 group-hover:rotate-90 group-hover:translate-x-1 duration-300">
                <BsArrowRight size={20} />
              </span>
            </Link>
          </motion.div>
        </AnimatedSection>

        <motion.div 
          className="mt-24 md:mt-0"
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#c961de] to-[#7c3aed] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <img
              src={dp}
              alt="my profile"
              className="relative rounded-2xl mx-auto w-2/3 md:w-full transition-all duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home