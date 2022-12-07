import React from 'react';
import classNames from "classnames";
import styles from './tfo-details.module.scss';

export const RowItem = ({label, value}: any) => (
  <div
    className={classNames(styles.cardRow, 'plg', 'mb-4')}>
    <span className="co-gray">{label}</span>
    <div>
      {value}
    </div>
  </div>
);
