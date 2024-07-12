import { useEffect, useReducer, useRef } from "react";

const useForceUpdate = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
};

export default function useIsMobile(size: "md" | "lg" | "xl") {
  const screenSize = useRef(window.innerWidth);

  const forceUpdate = useForceUpdate();
  const handleResize = () => {
    screenSize.current = window.innerWidth;
    forceUpdate();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isMobileCounter(size, screenSize.current);
}

export function isMobileCounter(size: "md" | "lg" | "xl", screenSize: number) {
  const screenWidth = size === "md" ? 768 : "lg" ? 992 : 1200;
  return screenSize < screenWidth;
}
