import React from 'react';
import { PHONE_BREAKPOINT } from "../../data";

import useMatchMedia from "../../hooks/useMatchMedia";
import Touch from "./Touch/Touch";
import Desktop from "./Desktop/Desktop";


const PortfolioSection = () => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);

  return isTouch? <Touch/>: <Desktop/>;
};

export default PortfolioSection;
