import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

const CountUpOnView = ({ target, duration = 1.2, className = "" }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        onUpdate: v => setValue(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>{value}+</span>
  );
};

export default CountUpOnView; 