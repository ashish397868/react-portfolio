import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
