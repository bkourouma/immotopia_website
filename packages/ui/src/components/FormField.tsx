import { Form, Input, FormItemProps } from 'antd';
import React from 'react';

export interface FormFieldProps extends FormItemProps {
  name: string;
  label: string;
  required?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  required = false,
  type = 'text',
  placeholder,
  ...props
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        { required, message: `${label} est requis` },
        ...(type === 'email' ? [{ type: 'email' as const, message: 'Email invalide' }] : []),
      ]}
      {...props}
    >
      <Input type={type} placeholder={placeholder} />
    </Form.Item>
  );
};

