import { AnimatePresence, motion } from "motion/react";
import Lottie from "lottie-react";
import welcomeAnimation from "../../lottie/Welcome.json";

export const Loader = () => {
  const options = {
    animationData: welcomeAnimation,
    loop: false,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 flex justify-center items-center bg-base-100 z-50"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Lottie {...options} />
      </motion.div>
    </AnimatePresence>
  );
};
