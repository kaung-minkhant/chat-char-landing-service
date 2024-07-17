import { Logo } from "@icons/Logo";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TDividerProps {
  width?: string;
  height?: string;
  gap?: string;
}
function Divider({
  width = "200px",
  height = "5px",
  gap = "5px",
}: TDividerProps) {
  const { inView, ref } = useInView({
    triggerOnce: true,
  });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (inView) {
      console.log("In view", inView);
      animate("#left", { width: width }, { duration: 0.7, delay: 0.3 });
      animate("#right", { width: width }, { duration: 0.7, delay: 0.3 });
    }
  }, [inView]);
  return (
    <div className="w-full" ref={scope}>
      <div
        ref={ref}
        className="flex items-center justify-center"
        style={{
          gap: gap,
        }}
      >
        <div
          id="left"
          style={{ width: 0, height: height }}
          className="bg-gradient-to-l from-[#fff] to-[#080011]"
        ></div>
        <Logo size={32} />
        <div
          id="right"
          style={{ width: 0, height: height }}
          className="bg-gradient-to-r from-[#fff] to-[#080011]"
        ></div>
      </div>
    </div>
  );
}

export default Divider;
