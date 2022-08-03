import { useLayoutEffect, useState } from "react";

const useMatchMedia = () => {
  const phoneMedia = matchMedia('(max-width: 1200px)');

  const [isPhone, setIsPhone] = useState(phoneMedia.matches);

  useLayoutEffect(() => {
    const handler = () => setIsPhone(phoneMedia.matches);

    phoneMedia.addEventListener('change', handler);

    return () => phoneMedia.removeEventListener('change', handler);

  });

  return isPhone;
};

export default useMatchMedia;