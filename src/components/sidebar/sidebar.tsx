import React, {useEffect} from 'react';
import classNames from 'classnames';

import logo from '../../assets/images/logos/carasti-blue.svg';
import logoSm from '../../assets/images/logos/logo-sm.svg';
import styles from './sidebar.module.scss';
import {useWindowSize} from "../../hooks/useWindowSize";

export type SidebarLinkProps = {
  text: string,
  icon: any,
  link: string,
  onClick?: Function,
  active: boolean,
};
export type SidebarProps = {
  links: SidebarLinkProps[],
  className?: string
};


export const Sidebar = ({links, className}: SidebarProps) => {
  const [width] = useWindowSize();
  useEffect(() => {
  }, [width])
  return (
    <div className={classNames(styles.Sidebar, {[styles.sm]: width < 1433})}>
      <div className={classNames('p-3')}>
        <div className={classNames(styles.logoWrapper, 'ps-1', 'pt-3')}>
          <img src={logo} alt="carasti" className={styles.logo}/>
          <img src={logoSm} alt="carasti" className={styles.logoSm}/>
        </div>
        <div className={styles.links}>
          <ul>
            {links?.map((link) => (<li key={link.text}>
              <div className={classNames(styles.sideLink, {[styles.active]: link.active})}>
                <span className={styles.icon}>{link.icon}</span>
                <span className={styles.text}>{link.text}</span>
              </div>
            </li>))}
          </ul>
        </div>
      </div>
    </div>
  )
};

Sidebar.defaultProps = {
  links: [],
  className: '',
};
