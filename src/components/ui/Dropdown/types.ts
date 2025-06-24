import { ReactNode } from 'react';

import { IOptionBase } from 'interfaces/options';

export interface IDropdownProps<T extends IOptionBase> {
  options: T[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  renderOption?: (option: T) => ReactNode;
  renderValue?: (option: T) => ReactNode;
}
