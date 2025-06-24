import { IButtonProps } from '../Button/types';

export interface IIconButtonProps extends Omit<IButtonProps, 'variant' | 'size'> {}
