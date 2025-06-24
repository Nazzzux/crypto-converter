import { FC } from 'react';
import clsx from 'clsx';
import styles from './Loader.module.scss';

interface ILoaderProps {
  size?: number;
  backdrop?: boolean; 
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({ size = 40, backdrop = false, className }) => {
  return (
    <>
      {backdrop && <div className={styles.backdrop} />}
      <div
        className={clsx(styles.loader, className)}
        style={{ width: size, height: size, borderWidth: size / 8 }}
        aria-label="Loading"
        role="progressbar"
      />
    </>
  );
};
