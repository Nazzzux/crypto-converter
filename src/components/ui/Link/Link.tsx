import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import styles from './Link.module.scss';

interface ILinkProps extends PropsWithChildren {
  to: string;
}

export const Link: FC<ILinkProps> = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
      {children}
    </NavLink>
  );
};
