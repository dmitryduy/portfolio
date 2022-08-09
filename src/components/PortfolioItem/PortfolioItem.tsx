import React, { FC } from 'react';

import useMatchMedia from "../../hooks/useMatchMedia";
import Touch from "./Touch/Touch";
import Desktop from "./Desktop/Desktop";
import { IProject } from "../../data";

interface IPortfolioItemProps {
  project: IProject
}

const PortfolioItem: FC<IPortfolioItemProps> = ({project}) => {
  const isPhoneLandscape = useMatchMedia('(max-width: 900px)');

  return isPhoneLandscape ? <Touch project={project}/> : <Touch project={project}/>;
};

export default PortfolioItem;
