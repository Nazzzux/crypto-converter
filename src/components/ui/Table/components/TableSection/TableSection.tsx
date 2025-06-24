import { FC, HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from '../Table.module.scss';

interface ITableSectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  isHeader?: boolean;
}

export const TableSection: FC<ITableSectionProps> = ({
  isHeader = false,
  className,
  children,
  ...props
}) => {
  const Component = isHeader ? 'thead' : 'tbody';

  return (
    <Component
      className={clsx(styles.tableSection, className, isHeader && styles.header)}
      {...props}
    >
      {children}
    </Component>
  );
};
