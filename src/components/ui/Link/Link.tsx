import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { ILinkProps } from './types';

import styles from './Link.module.scss';

export const Link: FC<ILinkProps> = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
      {children}
    </NavLink>
  );
};
