import { motion } from "framer-motion";

const directionOffsets = {
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  up: { x: 0, y: 50 },
  down: { x: 0, y: -50 },
};

const AnimatedCard = ({ children, className, delay = 0, direction = "up", style, initialRotate = 0 }) => {
  const offset = directionOffsets[direction] || directionOffsets.up;
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...offset, rotate: initialRotate }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 