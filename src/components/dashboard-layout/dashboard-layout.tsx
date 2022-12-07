import React from 'react';
import classNames from 'classnames';

import styles from './dashboard-layout.module.scss';
import {Sidebar} from "../sidebar";
import {SidebarLinkProps} from "../sidebar/sidebar";
import {Accounting, Crm, Home, Insurance, Marketing, Subscription, Tfo, UserManagement, Users} from "../icons";
import {Breadcrumb} from "../breadcrumb";
import {BreadcrumbLinkProps} from "../breadcrumb/breadcrumb";
import {useWindowSize} from "../../hooks/useWindowSize";
import {Header} from "../header";

export type DashboardLayoutProps = {
  className?: string
  children: any
};


export const DashboardLayout = ({className, children}: DashboardLayoutProps) => {
  const links: SidebarLinkProps[] = [
    {text: 'Home', icon: <Home/>, link: '', onClick: () => console.log('Home'), active: false},
    {text: 'CRM', icon: <Crm/>, link: '', onClick: () => console.log('CRM'), active: false},
    {text: 'Subscriptions', icon: <Subscription/>, link: '', onClick: () => console.log('Subscriptions'), active: false},
    {text: 'Partners', icon: <Users/>, link: '', onClick: () => console.log('Partners'), active: false},
    {text: 'TFO', icon: <Tfo/>, link: '', onClick: () => console.log('TFO'), active: true},
    {text: 'Inventory', icon: <Insurance/>, link: '', onClick: () => console.log('Inventory'), active: false},
    {text: 'Finance', icon: <Accounting/>, link: '', onClick: () => console.log('Finance'), active: false},
    {text: 'Marketing', icon: <Marketing/>, link: '', onClick: () => console.log('Marketing'), active: false},
    {text: 'User Management', icon: <UserManagement/>, link: '', onClick: () => console.log('User Management'), active: false},
  ]
  const breadcrumbLinks: BreadcrumbLinkProps[] = [
    {text: 'Home', link: '', onClick: () => console.log('Home'), active: true},
    {text: 'CRM', link: '', onClick: () => console.log('CRM'), active: false},
    {text: 'Subscriptions', link: '', onClick: () => console.log('Subscriptions'), active: false},

  ]
  const [width] = useWindowSize();
  return (
    <div className={classNames(styles.DashboardLayout)}>
      <Sidebar links={links}/>
      <div className={classNames(styles.content, className, {[styles.sm]: width < 1433})}>
        <div className="row mx-0 my-4">
          <div className="col-md-6 d-flex justify-content-start align-items-center  order-1 order-md-0">
            <Breadcrumb links={breadcrumbLinks}/>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center order-0 order-md-1">
            <Header/>
          </div>
        </div>
        <div className={classNames(styles.wrapper, 'p-3')}>
          {children}
        </div>
      </div>
    </div>
  )
};

DashboardLayout.defaultProps = {
  className: '',
};
