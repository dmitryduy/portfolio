import React, { FC} from 'react';
import { Page, PHONE_BREAKPOINT } from "../../data";

import useMatchMedia from "../../hooks/useMatchMedia";
import Desktop from "./Desktop/Desktop";
import Touch from "./Touch/Touch";

interface ISectionProps {
  children: React.ReactNode
  sectionName: Page
  className?: string
}

const Section: FC<ISectionProps> = (props) => {
  const isTouch = useMatchMedia(`(max-width: ${PHONE_BREAKPOINT}px)`);

  return isTouch ?
    <Touch {...props}>{props.children}</Touch>
    :
    <Desktop {...props}>{props.children}</Desktop>;
};

export default Section;
