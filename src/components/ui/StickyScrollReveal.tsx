import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import "@ui/style.css";
import { tw } from "@utils/tw";
import Typography from "./Typography";

export const StickyScrollReveal = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length; // 4

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength); // 0/4 1/4 2/4 3/4
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc]) + 0.07) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [_, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="py-10 px-5 lg:px-20 rounded-lg bg-background sticky-reveal-shadow relative z-10"
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
    >
      <div
        // ref={containerRef}
        className="flex justify-center space-x-24 sticky-scroll-reveal"
      >
        <div
          ref={containerRef}
          className="h-[30rem] relative flex-1 overflow-auto self-center justify-start xl:justify-center flex flex-row px-4 sticky-scroll-reveal"
        >
          <div className="w-full xl:w-[70%] max-w-5xl h-fit" ref={targetRef}>
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  <Typography fontStyles="font-intersemi" sizeStyles="text-3xl">
                    {item.title}
                  </Typography>
                </motion.h2>
                <motion.p
                  className="mt-7 xl:mt-10"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                >
                  <Typography
                    fontStyles="font-interreg"
                    sizeStyles="text-sm xl:text-lg"
                    className="leading-7 xl:leading-7"
                  >
                    {item.description}
                  </Typography>
                </motion.p>
              </div>
            ))}
            <div className="h-0 lg:h-20" />
          </div>
        </div>
        <div
          // style={{ background: backgroundGradient }}
          className={tw(
            "rounded-md bg-transparent flex-1 ml-auto flex",
            contentClassName
          )}
        >
          <img
            src="./sticky-phone-frame-xl-416.png"
            srcSet="sticky-phone-frame-xl-416.png 416w, sticky-phone-frame-lg-300.png 300w, sticky-phone-frame-lg-166.png 250w"
            sizes="(min-width: 1280px) 426px, (min-width: 1024px) 300px, (min-width: 768px) 307px, (min-width: 640px) 256px, 200px"
            className="object-contain m-auto"
          />
          {/* {content[activeCard].content ?? null} */}
        </div>
      </div>
    </motion.div>
  );
};
