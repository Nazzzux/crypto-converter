import { FC, HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from '../Table.module.scss';

interface ITableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export const TableRow: FC<ITableRowProps> = ({ children, ...props }) => {
  return (
    <tr className={clsx(styles.tableRow, props.className)} {...props}>
      {children}
    </tr>
  );
};
