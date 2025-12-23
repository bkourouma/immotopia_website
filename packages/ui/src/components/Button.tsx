import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import React from 'react';

export interface ButtonProps extends AntButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <AntButton {...props}>{children}</AntButton>;
};

