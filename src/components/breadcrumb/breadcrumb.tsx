import React from 'react';
import classNames from 'classnames';

import styles from './breadcrumb.module.scss';

export type BreadcrumbLinkProps = {
  text: string,
  link: string,
  onClick?: Function,
  active: boolean,
};
export type BreadcrumbProps = {
  links: BreadcrumbLinkProps[],
  className?: string
};


export const Breadcrumb = ({links, className}: BreadcrumbProps) => {

  return (
    <div className={classNames(styles.Breadcrumb, className)}>

      <div className={classNames('d-flex')}>

        <div className={styles.links}>
          <ul>
            {links?.map((link, index) => (<li key={link.text}>
              <a href="#"className={classNames(styles.sideLink, {[styles.active]: index === links?.length - 1})}>
                <span className={classNames(styles.text, 'pmd')}>{link.text}</span>
                {index !== links?.length - 1 && <span>/</span>}
              </a>
            </li>))}
          </ul>
        </div>
      </div>
    </div>
  )
};

Breadcrumb.defaultProps = {
  links: [],
  className: '',
};
