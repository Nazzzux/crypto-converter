import { FC } from 'react';

import clsx from 'clsx';

import { IButtonProps } from '../Button/types';

import styles from './IconButton.module.scss';

interface IIconButtonProps extends Omit<IButtonProps, 'variant' | 'size'> {}

export const IconButton: FC<IIconButtonProps> = ({
  isDisabled = false,
  className,
  children,
  ...props
}) => {
  const buttonStyles = clsx(styles.iconButton, className);

  return (
    <button type="button" disabled={isDisabled} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};
