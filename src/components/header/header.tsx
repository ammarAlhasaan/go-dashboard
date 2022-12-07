import React from 'react';
import classNames from 'classnames';

import {Notification} from "../icons";
import avatar from '../../assets/images/user.png';

import styles from './header.module.scss';

export type HeaderProps = {
  className?: string
};


export const Header = ({className}: HeaderProps) => {

  return (
    <div className={classNames(styles.Header, className)}>
      <nav className="d-flex justify-content-end align-items-center">
        <div className={classNames(styles.notification)}><Notification /></div>
        <div className={classNames(styles.vDivider)}/>
        <div className={classNames(styles.userDropdown, 'd-flex align-items-center')}>
          <img src={avatar} className="d-block me-2"/>
          <div className="triangle-down"/>
        </div>
      </nav>
    </div>
  )
};
