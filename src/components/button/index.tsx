import React, { ButtonHTMLAttributes, DetailedHTMLProps, ElementType } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'md' | 'sm';
  theme?: 'primary' | 'secondary' | 'danger';
  outline?: boolean;
  className?: string;
  icon?: ElementType;
}

// Styles
import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  theme = 'primary',
  outline = false,
  icon: Icon,
  className,
  ...props
}) => (
  <button
    className={cx(
      className,
      'button',
      `button__size--${size}`,
      outline ? `button__outline--${theme}` : `button__theme--${theme}`
    )}
    {...props}
  >
    {Icon && <Icon className={cx('icon')} />}
    {props.children}
  </button>
);
