import React, { ButtonHTMLAttributes, DetailedHTMLProps, ElementType } from 'react';
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: 'md' | 'sm';
    theme?: 'primary' | 'secondary' | 'danger';
    outline?: boolean;
    className?: string;
    icon?: ElementType;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
