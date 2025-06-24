import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import styles from '../Table.module.scss';

interface ITableSectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  isHeader?: boolean;
}

export const TableSection: FC<ITableSectionProps> = ({ isHeader = false, children, ...props }) => {
  const Component = isHeader ? 'thead' : 'tbody';

  return (
    <Component
      className={clsx(styles.tableSection, props.className, isHeader && styles.header)}
      {...props}
    >
      {children}
    </Component>
  );
};
