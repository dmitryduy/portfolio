import React, { FC } from 'react';

import useMatchMedia from "../../hooks/useMatchMedia";
import { PHONE_BREAKPOINT } from "../../data";
import Desktop from "./Desktop/Desktop";
import Touch from './Touch/Touch';

export interface IButtonProps {
  text: string
  onClick: () => void
  children?: React.ReactNode
}

const Button: FC<IButtonProps> = (props) => {
  const isTouch = useMatchMedia(`(max-width: 1000px)`);

  return isTouch ? <Touch {...props}>{props.children}</Touch> : <Desktop {...props}>{props.children}</Desktop>;
};

export default Button;
