import React from 'react';

import useMatchMedia from "../../hooks/useMatchMedia";
import Touch from "./Touch/Touch";
import Desktop from "./Desktop/Desktop";

const SkillsSection = () => {
  const isTouch = useMatchMedia(`(max-width: ${1200}px)`);

  return isTouch ? <Touch/> : <Desktop/>;
};

export default SkillsSection;
