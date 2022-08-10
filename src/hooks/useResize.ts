import { useEffect } from "react";
import useThrottle from "./useThrottle";

const useResize = () => {
  const [width, setWidth] = useThrottle(window.innerWidth, 200);

  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    }

  },[]);

  return width;
}

export default useResize;