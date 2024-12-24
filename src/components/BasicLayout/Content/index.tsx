import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.scss";

export const Content = () => {
  const { pathname } = useLocation();

  // Animation Variants
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.8,
  };

  return (
    <div className="content-wrapper">
      <motion.div
        key={pathname} // Tracks route changes for animations
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="motion-container" // Scoped animation only within this area
      >
        <Outlet />
      </motion.div>
    </div>
  );
};
