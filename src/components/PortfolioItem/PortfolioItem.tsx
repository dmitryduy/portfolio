import React, { FC } from 'react';

import useMatchMedia from "../../hooks/useMatchMedia";
import Touch from "./Touch/Touch";
import Desktop from "./Desktop/Desktop";
import { IProject, PHONE_BREAKPOINT } from "../../data";

interface IPortfolioItemProps {
  project: IProject
  isTouch: boolean
}

const PortfolioItem: FC<IPortfolioItemProps> = ({project, isTouch}) => {
  return isTouch ? <Touch project={project}/> : <Desktop project={project}/>;
};

export default PortfolioItem;
