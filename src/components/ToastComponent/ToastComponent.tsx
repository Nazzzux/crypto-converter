import { FC } from 'react';

import styles from './ToastComponent.module.scss';

interface IToastComponentProps {
  text: string;
}

export const ToastComponent: FC<IToastComponentProps> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};
