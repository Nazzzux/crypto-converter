import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isDisabled?: boolean;
  fieldError?: string;
  label?: string;
  adornment?: React.ReactNode;
  classes?: {
    input?: string;
    label?: string;
    inputWrapper?: string;
    adornment?: string;
    errorText?: string;
  };
}
