import React  from 'react';
import useMatchMedia from "../../hooks/useMatchMedia";
import Desktop from "./Desktop/Desktop";
import Touch from "./Touch/Touch";
import { PHONE_BREAKPOINT } from "../../data";


const Menu = () => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);

  return isTouch ? <Touch/>: <Desktop/>
};

export default Menu;
