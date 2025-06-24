import { FC } from 'react';

import styles from '../Table.module.scss';
import clsx from 'clsx';

interface ITableItemProps extends React.HTMLAttributes<HTMLTableCellElement> {
  isHeader?: boolean;
}

export const TableItem: FC<ITableItemProps> = ({ isHeader = false, children, ...props }) => {
  const Component = isHeader ? 'th' : 'td';

  return (
    <Component className={clsx(styles.tableItem, props.className)} {...props}>
      {children}
    </Component>
  );
};
