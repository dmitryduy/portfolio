import React, { FC } from 'react';
import commonStyles from '../Button.module.scss';
import { IButtonProps } from "../Button";

const Touch: FC<IButtonProps> = ({ text, onClick, children}) => {
  return (
    <button className={commonStyles.button} onClick={onClick}>
      <p>{text}</p>
      {children}
    </button>
  );
};

export default Touch;
