import { ButtonHTMLAttributes } from 'react';

import { TagButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <TagButton
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}