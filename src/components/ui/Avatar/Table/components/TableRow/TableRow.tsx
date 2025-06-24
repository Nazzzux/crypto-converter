import { FC, HTMLAttributes } from 'react';
import styles from '../Table.module.scss';
import clsx from 'clsx';

interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export const TableRow: FC<ITableRowProps> = ({ children, ...props }) => {
  return (
    <tr className={clsx(styles.tableRow, props.className)} {...props}>
      {children}
    </tr>
  );
};
