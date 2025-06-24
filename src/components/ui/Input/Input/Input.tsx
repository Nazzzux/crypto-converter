import { FC } from 'react';

import clsx from 'clsx';

import { IInputProps } from './types';

import styles from './Input.module.scss';

export const Input: FC<IInputProps> = ({
  isDisabled = false,
  name,
  fieldError = '',
  label = '',
  className,
  adornment,
  classes,
  ...props
}) => {
  const inputStyles = clsx(styles.input, classes?.input, {
    [styles.disabled]: isDisabled,
    [styles.error]: fieldError,
  });

  return (
    <label htmlFor={name} className={clsx(styles.label, className)}>
      <span className={classes?.label}>{label}</span>
      <div className={styles.inputWrapper}>
        <input className={inputStyles} id={name} name={name} disabled={isDisabled} {...props} />
        {adornment && <span className={styles.adornment}>{adornment}</span>}
      </div>
      {fieldError && <span className={styles.errorText}>{fieldError}</span>}
    </label>
  );
};
