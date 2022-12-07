import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

export type CardProps = {
  className?: string;
  loading?: boolean;
  loader?: any;
  children?: any;
};


export const Card = ({loading, className, loader, children}: CardProps) => {
  return (
    <div className={classNames(styles.Card, className, 'py-4')}>
      {loading ? loader || <div>loading...</div> : children}
    </div>
  )
};
