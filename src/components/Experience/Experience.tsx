import React from 'react';

import useMatchMedia from "../../hooks/useMatchMedia";
import Touch from "./Touch/Touch";
import Desktop from "./Desktop/Desktop";
import { PHONE_BREAKPOINT } from "../../data";

const Experience = () => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);

  return isTouch? <Touch/>: <Desktop/>
};

export default Experience;
