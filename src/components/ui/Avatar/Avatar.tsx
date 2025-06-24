import { FC } from 'react';

import { IAvatarProps } from './types';

import styles from './Avatar.module.scss';

export const Avatar: FC<IAvatarProps> = ({ initials }) => {
  return <div className={styles.avatar}>{initials}</div>;
};
