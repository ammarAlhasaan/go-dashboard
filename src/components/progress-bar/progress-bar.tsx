import React from 'react';

import styles from './progress-bar.module.scss'
import classNames from "classnames";

export type ProgressBarProps = {
  className: string,
  width: number
};


export const ProgressBar = ({className, width}: ProgressBarProps) => {


  return (
    <div className={classNames(styles.ProgressBar, className)}>
      <div className={styles.container}>
        <div
          className={styles.completed}
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  );
};
