import { FC } from 'react';

import styles from './Avatar.module.scss';

interface IAvatarProps {
  initials: string;
}

export const Avatar: FC<IAvatarProps> = ({ initials }) => {
  return <div className={styles.avatar}>{initials}</div>;
};
