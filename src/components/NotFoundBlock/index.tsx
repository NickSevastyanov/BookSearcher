import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Oops Error
      </h1>
      <p className={styles.description}>
        There is nothing
      </p>
    </div>
  );
};
