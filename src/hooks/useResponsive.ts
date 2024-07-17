import { TScreenSizes } from "@/types";
import { useEffect, useState } from "react";

export function useResponsive() {
  const [width, setWidth] = useState(window.innerWidth);
  const [responsiveState, setResponsiveState] = useState<TScreenSizes>(calculateState(width))
  const [scale, setScale] = useState(calculateScale(width))


  enum ScaleMap {
    '2xl' = 5,
    xl=4,
    lg=3,
    md=2,
    sm=1,
    xm=0
  }

  function calculateState(width: number): TScreenSizes {
    if (width >= 1536) {
      return '2xl'
    }
    if (width >= 1280 && width < 1536) {
      return 'xl'
    }
    if (width >= 1024 && width < 1280) {
      return 'lg'
    }
    if (width >= 768 && width < 1024) {
      return 'md'
    }
    if (width >= 640 && width < 768) {
      return 'sm'
    }
    return 'xm'
  }

  function calculateScale(width: number) {
    if (width >= 1536) {
      return 5
    }
    if (width >= 1280 && width < 1536) {
      return 4
    }
    if (width >= 1024 && width < 1280) {
      return 3
    }
    if (width >= 768 && width < 1024) {
      return 2
    }
    if (width >= 640 && width < 768) {
      return 1
    }
    return 0
  }

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    setResponsiveState(calculateState(window.innerWidth))
    setScale(calculateScale(window.innerWidth))
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const is2Xl = responsiveState === '2xl'
  const isXl = responsiveState === 'xl'
  const isLg = responsiveState === 'lg'
  const isMd = responsiveState === 'md'
  const isSm = responsiveState === 'sm'
  const isXm = responsiveState === 'xm'

  return {
    is2Xl,
    isXl,
    isLg,
    isMd,
    isSm,
    isXm,
    responsiveState,
    scale,
    ScaleMap
  };
}
