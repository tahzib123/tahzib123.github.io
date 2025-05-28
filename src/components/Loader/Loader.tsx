import { motion } from "motion/react";

export const Loader = () => {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-base-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        animate="pulse"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="flex items-center justify-center gap-4"
      >
        <motion.div
          className="w-[20px] h-[20px] bg-info will-change-transform rounded-[50%]"
          variants={dotVariants}
        />
        <motion.div
          className="w-[20px] h-[20px] bg-info will-change-transform rounded-[50%]"
          variants={dotVariants}
        />
        <motion.div
          className="w-[20px] h-[20px] bg-info will-change-transform rounded-[50%]"
          variants={dotVariants}
        />
      </motion.div>
    </motion.div>
  );
};
