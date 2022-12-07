import React from 'react';
import classNames from 'classnames';
import styles from './tag.module.scss';

export type TagProps = {
  className?: string;
  children: any;
};


export const Tag = ({ className, children}: TagProps) => {

  return (
    <div className={classNames(styles.Tag, className, 'py-1', 'px-3')}>
      {children}
    </div>
  )
};
