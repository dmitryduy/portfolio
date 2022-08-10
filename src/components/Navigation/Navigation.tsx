import React from 'react';

import Touch from './Touch/Touch';
import useMatchMedia from "../../hooks/useMatchMedia";
import Desktop from "./Desktop/Desktop";
import { PHONE_BREAKPOINT } from "../../data";

const Navigation = () => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);

  return isTouch? <Touch/>: <Desktop/>
};

export default Navigation;
