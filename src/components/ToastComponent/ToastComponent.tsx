import { FC } from 'react';

import { IToastComponentProps } from './types';

import styles from './ToastComponent.module.scss';

export const ToastComponent: FC<IToastComponentProps> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};
