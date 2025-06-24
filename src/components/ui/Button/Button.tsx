import { FC } from 'react';

import clsx from 'clsx';

import { IButtonProps } from './types';
import { Loader } from '../Loader';

import styles from './Button.module.scss';

export const Button: FC<IButtonProps> = ({
  size = 'small',
  variant = 'primary',
  type = 'button',
  isLoading = false,
  isDisabled = false,
  children,
  className = '',
  ...props
}) => {
  const buttonStyles = clsx(styles.button, className, styles[size], styles[variant]);
  const childStyles = clsx(styles.buttonChild, isLoading && styles.loading);

  return (
    <button type={type} disabled={isDisabled || isLoading} className={buttonStyles} {...props}>
      {isLoading && <Loader size={20} className={styles.loader} />}
      <span className={childStyles}>{children}</span>
    </button>
  );
};
