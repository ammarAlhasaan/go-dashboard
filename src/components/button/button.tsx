import React, {ReactNode} from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

export type ButtonProps = {
  loader?: ReactNode;
  loading?: boolean;
  activeWhenLoading?: boolean;
  importance?: 'filled' | 'line';
  fullWidth?: boolean;
  color?: 'primary' | "secondary" | "success" | "info" | "warning" | "danger" | "disabled";
  size?: 'sm' | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


export const Button = (
  {
    className,
    importance = 'filled',
    fullWidth = false,
    children,
    color,
    size,
    disabled,
    ...rest
  }: ButtonProps) => {

  return (
    <div className={color}>
      <button
        {...rest}
        className={classNames(styles.Button,
          !disabled ? color : 'disable',
          size,
          {[styles.fullWidth]: fullWidth},
          className
        )}
        data-variation={importance}
      >
        {children}
      </button>
    </div>
  )
};

Button.defaultProps = {
  importance: 'filled',
  color: 'primary',
  size: 'md',
  fullWidth: false
};
