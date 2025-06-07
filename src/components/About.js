import  { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaSchool, FaLaptopCode, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: "John Doe",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review: "Ashish delivered exceptional work on our React project. His attention to detail and problem-solving skills are impressive.",
  },
  {
    name: "Sarah Smith",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    review: "Working with Ashish was a great experience. He understood our requirements perfectly and delivered the project ahead of schedule.",
  },
  {
    name: "Mike Johnson",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review: "Ashish's expertise in React and Tailwind CSS helped us create a beautiful and responsive website. Highly recommended!",
  },
  {
    name: "Emily Davis",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    review: "Collaborating with Ashish was seamless. His implementation of complex designs was pixel-perfect and efficient.",
  },
];

const Counter = ({ end, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      {isInView && (
        <CountUp
          end={end}
          duration={2.5}
          suffix={suffix}
          className="text-4xl font-extrabold text-[#FF00FF] drop-shadow-magenta"
        />
      )}
    </div>
  );
};

const InfiniteLoopSlider = ({ children, duration = 30 }) => (
  <div className="overflow-hidden w-full relative">
    <motion.div
      className="flex gap-8"
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ repeat: Infinity, ease: "linear", duration }}
      style={{ width: "200%", display: "flex" }}
    >
      <div className="flex gap-8 w-full">{children}</div>
      <div className="flex gap-8 w-full">{children}</div>
    </motion.div>
  </div>
);

const About = () => (
  <section
    name="about"
    className="w-full min-h-screen bg-gradient-to-br from-black via-[#1a0b2e] to-[#1a0b2e] text-gray-200 pt-20 md:pt-32 overflow-hidden relative"
  >
    {/* subtle texture */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col justify-center">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed]">
          About Me
        </h2>
        <p className="mt-6 ml-8 mx-auto text-gray-300 font-semibold text-center md:text-start">
          Passionate Mern Stack developer from Yamunanagar, Haryana, specializing in modern web technologies.
          Currently pursuing MCA from Maharaja Agrasen Institute of Management and Technology.
          I have a strong foundation in React, Node.js, and Tailwind CSS, and I'm dedicated to creating
        </p>
      </div>

      {/* Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { title: "Projects", end: 8, suffix: "+" },
          { title: "Clients", end: 2, suffix: "+" },
          { title: "Satisfaction", end: 99, suffix: "%" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative group p-8 bg-[#261d45]/40 rounded-2xl border border-[#4a3a7a] hover:border-[#c961de] transition transform hover:scale-[1.02] duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#c961de]/10 to-[#7c3aed]/10 opacity-0 group-hover:opacity-100 transition" />
            <Counter end={item.end} suffix={item.suffix} />
            <p className="mt-4 text-lg font-medium text-gray-300">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Education Timeline */}
      <div className="mb-28">
        <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed]">
          Education Journey
        </h3>
        <VerticalTimeline lineColor="rgba(124, 58, 237, 0.2)">
          {[
            {
              date: "2024 – Present",
              title: "Master of Computer Applications",
              subtitle: "Maharaja Agrasen Institute of Management And Technology",
              description: "Pursuing MCA",
              icon: <FaGraduationCap />,
            },
            {
              date: "2020 – 2024",
              title: "Bachelor of Computer Applications",
              subtitle: "Lovely Professional University",
              description: "BCA in Computer Science",
              icon: <FaGraduationCap />,
            },
            {
              date: "2015 – 2018",
              title: "Diploma in Electronics And Communication Engineering",
              subtitle: "HSBTE Board",
              description: "Diploma in ECE",
              icon: <FaSchool />,
            },
            {
              date: "2022 – Present",
              title: "Self-Taught Development",
              subtitle: "Online Learning",
              description: "React, JavaScript, Modern Web Dev",
              icon: <FaLaptopCode />,
            },
          ].map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={item.date}
              iconStyle={{ background: "#2E003E", color: "#FF00FF" }}
              contentStyle={{
                background: "rgba(26,0,26,0.7)",
                backdropFilter: "blur(8px)",
                borderRadius: "1rem",
                border: "1px solid #2E003E"
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(26,0,26,0.7)" }}
              icon={item.icon}
            >
              <h3 className="text-xl font-bold text-[#FF00FF]">{item.title}</h3>
              <h4 className="mt-1 text-gray-300 text-sm font-semibold">{item.subtitle}</h4>
              <p className="mt-2 text-gray-300 font-semibold ">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#c961de] to-[#7c3aed]">
          Client Testimonials
        </h3>
        <InfiniteLoopSlider duration={50}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className="min-w-[280px] p-6 bg-[#261d45]/40 rounded-2xl border border-[#4a3a7a] group transition hover:border-[#c961de] duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-20 h-20 rounded-full border-4 border-[#4a3a7a] group-hover:border-[#c961de] transition"
                  />
                  <span className="absolute -bottom-2 right-0 bg-gradient-to-r from-[#c961de] to-[#7c3aed] text-white rounded-full px-2 text-sm font-semibold">
                    {r.rating}/5
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-100">{r.name}</h4>
                <p className="text-sm text-[#c961de] mb-2 font-semibold">{r.role}</p>
                <FaQuoteLeft className="text-[#7c3aed] text-xl mb-2" />
                <p className="text-center text-gray-300 italic text-sm font-semibold">{r.review}</p>
              </div>
            </div>
          ))}
        </InfiniteLoopSlider>
      </div>
    </div>
  </section>
);

export default About;