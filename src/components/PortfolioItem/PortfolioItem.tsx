import React, { FC } from 'react';

import useMatchMedia from "../../hooks/useMatchMedia";
import Touch from "./Touch/Touch";
import Desktop from "./Desktop/Desktop";

interface IPortfolioItemProps {
  id: number
}

const PortfolioItem: FC<IPortfolioItemProps> = ({id}) => {
  const isPhoneLandscape = useMatchMedia('(max-width: 900px)');

  return isPhoneLandscape ? <Touch/> : <Touch/>;
};

export default PortfolioItem;
