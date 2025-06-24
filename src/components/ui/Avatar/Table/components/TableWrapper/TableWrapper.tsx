import { FC, HTMLAttributes } from 'react';

import styles from '../Table.module.scss';
import clsx from 'clsx';

interface ITableWrapperProps extends HTMLAttributes<HTMLTableElement> {}

export const TableWrapper: FC<ITableWrapperProps> = ({ children, ...props }) => {
  return (
    <div className={clsx(styles.tableWrapper, props.className)}>
      <table className={styles.table} {...props}>
        {children}
      </table>
    </div>
  );
};
