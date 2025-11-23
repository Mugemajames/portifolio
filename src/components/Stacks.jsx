import { motion } from "framer-motion";

// Import your PNG images
 import windows from "../assets/windows.png";
 import redhat from "../assets/redhat.jpg";
 import wazuh from "../assets/wazuh.png";
import Kali from "../assets/kali.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Stacks = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="m-20 text-center text-4xl font-bold"
      >
        Skills
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {[ Kali,windows,redhat,wazuh].map(
          (Icon, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={iconVariants(2 + index * 0.5)}
              className="p-4"
            >
              <img src={Icon} alt="stack icon" className="w-25 h-25 object-contain" />
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Stacks;
