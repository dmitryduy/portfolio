import React, { FC } from 'react';

import styles from './Coder.module.scss';
import { beautifyCode } from "../../utils/beautifyCode";

interface ICoderProps {
  code: string
}


const Coder: FC<ICoderProps> = ({code}) => {
  return (
    <div className={styles.coderContainer}>
      <pre dangerouslySetInnerHTML={beautifyCode(code, true)}/>
    </div>
  );
};

export default Coder;
