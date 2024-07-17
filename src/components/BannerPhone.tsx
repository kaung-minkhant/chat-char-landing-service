import { useResponsive } from "@hooks/useResponsive";
import { useAnimate, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

function BannerPhone() {
  const {responsiveState} = useResponsive()
  const played = useRef(false);
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: scope,
    offset: ["start end", "end end"],
  });
  console.log('Responsive state', responsiveState)
  useTransform(scrollYProgress, (lastValue: number) => {
    console.log('banner last value', lastValue)
    if (!played.current && window.scrollY === 0) lastValue = 0
    if (!played.current && lastValue > 0.75 ) {
      played.current = true;
      let translationDistant;
      switch (responsiveState) {
        case '2xl':
          translationDistant = 300;
          break;
        case 'xl':
          translationDistant = 300;
          break;
        case 'lg':
          translationDistant = 250;
          break;
        case 'md':
          translationDistant = 200;
          break;
        case 'sm':
          translationDistant = 160;
          break;
        default:
          translationDistant = 60;
          break;
        
      }
      animate('#left-phone', {
        x: translationDistant * -1,
      }, {duration: 0.5})
      animate('#right-phone', {
        x: translationDistant,
      }, {duration: 0.5})
    }
  });


  const [offset, setOffset] = useState(0);
  const calculateGradientOffset = useCallback(() => {
    if (scope.current) {
      const y =
        scope.current.getBoundingClientRect().top +
        globalThis.scrollY +
        25;
      setOffset(y);
    }
  }, []);
  useEffect(() => {
    calculateGradientOffset();
    window.addEventListener("resize", calculateGradientOffset);

    return () => {
      window.removeEventListener("resize", calculateGradientOffset);
    };
  }, [scope.current]);
  return (
    <div className="pt-28 w-full" ref={scope}>
      <div className="relative w-full flex justify-center items-end z-10 bg-transparent">
        <img src="./iphone-half-long-2xl-624.png" className="z-10"
          srcSet="iphone-half-long-2xl-624.png 624w, iphone-half-long-xl-512.png 512w, iphone-half-long-lg-409.png 409w, iphone-half-long-md-307.png 307w, iphone-half-long-sm-256.png 256w, iphone-half-long-240.png 240w"
          sizes="(min-width: 1536px) 624px, (min-width: 1280px) 512px, (min-width: 1024px) 409px, (min-width: 768px) 307px, (min-width: 640px) 256px, 240px"
         />
        <img src="./iphone-half-short-2xl-624.png" id="left-phone" className={`absolute -bottom-[0.1px] z-0`}
          srcSet="iphone-half-short-2xl-624.png 624w, iphone-half-short-xl-512.png 512w, iphone-half-short-lg-409.png 409w, iphone-half-short-md-307.png 307w, iphone-half-short-sm-256.png 256w, iphone-half-short-240.png 240w"
          sizes="(min-width: 1536px) 624px, (min-width: 1280px) 512px, (min-width: 1024px) 409px, (min-width: 768px) 307px, (min-width: 640px) 256px, 240px"
         />
        <img src="./iphone-half-short-2xl-624.png" id="right-phone" className={`absolute -bottom-[0.1px] z-0 `}
          srcSet="iphone-half-short-2xl-624.png 624w, iphone-half-short-xl-512.png 512w, iphone-half-short-lg-409.png 409w, iphone-half-short-md-307.png 307w, iphone-half-short-sm-256.png 256w, iphone-half-short-240.png 240w"
          sizes="(min-width: 1536px) 624px, (min-width: 1280px) 512px, (min-width: 1024px) 409px, (min-width: 768px) 307px, (min-width: 640px) 256px, 240px"
         />
      </div>
      {offset && (
        <div
          style={{
            top: `${offset}px`,
          }}
          className="absolute left-0 w-[100vw] h-[362px] sm:h-[379px] md:h-[437px] lg:h-[554px] xl:h-[671px] 2xl:h-[800px] bg-gradient-ellipse z-0"
        ></div>
      )}
    </div>
  );
}

export default BannerPhone;
