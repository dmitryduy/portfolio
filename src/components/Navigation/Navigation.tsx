import React from 'react';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className='container'>
      <nav className={styles.navigationContainer}>
        <ul className={styles.navigationRight}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Code examples</li>
          <li>Portfolio</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
