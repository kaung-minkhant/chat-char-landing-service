import { motion, useScroll, useTransform } from "framer-motion";
import { forwardRef, RefObject } from "react";

interface TEyeProps {
  size?: number;
}
const Eye = forwardRef<HTMLDivElement, TEyeProps>(function Eye(props, ref) {
  const { size = 241 } = props;
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref as RefObject<HTMLDivElement>,
    offset: ["start end", "end start"],
  });
  const transformY = useTransform(scrollYProgress, (latestValue) => {
    return (latestValue+0.5)*104
  })
  console.log("Eye rerender");
  return (
    <svg
      width={size}
      height={size + 13}
      viewBox="0 0 241 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2046_352)">
        <rect x="1" y="54" width="100" height="200" rx="50" fill="white" />
        {/* <motion.rect x="66" y="104" width="50" height="100" rx="25" fill="#7F00FF" /> */}
        <motion.rect x="66" y={transformY} width="50" height="100" rx="25" fill="#7F00FF" />
      </g>
      <g clipPath="url(#clip1_2046_352)">
        <rect x="141" y="54" width="100" height="200" rx="50" fill="white" />
        <motion.rect x="206" y={transformY} width="50" height="100" rx="25" fill="#7F00FF" />
      </g>
      <path
        d="M0 55C26.4227 19.2875 78.3428 18.2955 101 22.2635L97.6745 15.685C93.1702 6.7746 84.4921 0.476763 74.5148 0.105605C12.4864 -2.20186 1.77239 33.8794 0 55Z"
        fill="#490093"
      />
      <path
        d="M241 55C214.839 19.2875 163.433 18.2955 141 22.2635L144.254 15.7613C148.736 6.80671 157.427 0.460131 167.434 0.0978093C228.662 -2.11903 239.247 33.9036 241 55Z"
        fill="#490093"
      />
      <defs>
        <clipPath id="clip0_2046_352">
          <rect x="1" y="54" width="100" height="200" rx="50" fill="white" />
        </clipPath>
        <clipPath id="clip1_2046_352">
          <rect x="141" y="54" width="100" height="200" rx="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Eye;
