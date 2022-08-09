import React from 'react';

import styles from './ResumeButton.module.scss';
import Button from "../../ui/Button/Button";
import noop from "../../utils/noop";

const ResumeButton = () => {
  return (
    <div className={styles.resume}>
      Resume
    </div>
  );
};

export default ResumeButton;
