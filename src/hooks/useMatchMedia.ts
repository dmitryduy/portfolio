import { useLayoutEffect, useState } from "react";

const useMatchMedia = (query: string) => {

  const media = matchMedia(query);

  const [isMedia, setIsMedia] = useState(media.matches);

  useLayoutEffect(() => {
    const handler = () => {
      console.log(10)
      setIsMedia(media.matches);
    }

    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);

  });

  return isMedia;
};

export default useMatchMedia;