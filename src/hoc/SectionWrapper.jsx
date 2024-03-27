import { motion } from "framer-motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 translate-y-20 max-w-7xl mx-auto relative z-0"
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;