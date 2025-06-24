import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'text';
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}
