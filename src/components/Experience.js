import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import {
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import AnimatedSection from "./AnimatedSection";

const techs = [
  { id: 1, src: html,        title: "HTML",      style: "shadow-orange-500" },
  { id: 2, src: css,         title: "CSS",       style: "shadow-blue-500" },
  { id: 3, src: javascript,  title: "JavaScript",style: "shadow-yellow-500" },
  { id: 4, src: reactImage,  title: "React",     style: "shadow-blue-600" },
  { id: 5, src: nextjs,      title: "Next.js",   style: "shadow-white" },
  { id: 6, src: node,        title: "Node.js",   style: "shadow-green-500" },
  { id: 7, Icon: SiExpress,  title: "Express.js",style: "shadow-gray-400" },
  { id: 8, Icon: SiMongodb,  title: "MongoDB",   style: "shadow-green-600" },
  { id: 9, Icon: SiCplusplus,title: "C++",       style: "shadow-blue-800" },
  { id:10, Icon: SiMysql,    title: "SQL",       style: "shadow-[#00758F]" },
  { id:11, src: tailwind,    title: "Tailwind",  style: "shadow-sky-400" },
  { id:12, src: github,      title: "GitHub",    style: "shadow-gray-400" },
];

// Container variants for a quick, smooth stagger
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Simple fade/scale in
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TechCard = ({ tech, index }) => {
  // raw motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // map pointer position to rotate range
  const rotateXRaw = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateYRaw = useTransform(x, [-0.5, 0.5], [-15, 15]);

  // smooth with spring
  const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 30 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      variants={itemVariants}
      style={{ rotateX, rotateY, z: 50 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const xVal = (e.clientX - bounds.left) / bounds.width - 0.5;
        const yVal = (e.clientY - bounds.top) / bounds.height - 0.5;
        x.set(xVal);
        y.set(yVal);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`
        relative group
        bg-[#261d45]/40 border-2 border-[#4a3a7a]/50
        rounded-xl p-6 flex flex-col items-center
        transition-shadow duration-300
        hover:shadow-xl ${tech.style}
        hover:border-[#c961de]
      `}
    >
      {/* subtle radial glow on hover */}
      <div className="
        absolute inset-0 rounded-xl
        bg-gradient-to-br from-[#c961de]/20 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
      " />

      {tech.src ? (
        <img
          src={tech.src}
          alt={tech.title}
          className="w-16 h-16 object-contain mb-4"
        />
      ) : (
        <tech.Icon className="w-16 h-16 text-gray-200 mb-4" />
      )}
      <p className="text-gray-300 group-hover:text-white font-semibold">
        {tech.title}
      </p>
    </motion.div>
  );
};

const Experience = () => (
  <div
    name="experience"
    className="bg-gradient-to-br from-black via-[#1a0b2e] to-[#1a0b2e]
               w-full min-h-screen pt-24 relative overflow-hidden"
  >
    {/* subtle texture */}
    <div className="
      absolute inset-0
      bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]
      opacity-5
    " />

    {/* gentle starfield */}
    <div className="absolute inset-0 opacity-10">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>

    <AnimatedSection className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white relative z-10">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6"
      >
        <h2 className="
          text-4xl font-bold
          bg-clip-text text-transparent
          bg-gradient-to-r from-[#c961de] to-[#7c3aed]
        ">
          Experience
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className="pb-8 text-gray-300 font-semibold"
      >
        Technologies I’ve mastered through hands-on projects
      </motion.p>

      {/* tech grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-5"
      >
        {techs.map((tech, idx) => (
          <TechCard key={tech.id} tech={tech} index={idx} />
        ))}
      </motion.div>
    </AnimatedSection>

    {/* floating blobs */}
    <motion.div
      className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#7c3aed]/10 rounded-full blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#c961de]/10 rounded-full blur-3xl"
      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default Experience;
