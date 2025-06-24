import { FC } from 'react';

import clsx from 'clsx';

import { IIconButtonProps } from './types';

import styles from './IconButton.module.scss';

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
