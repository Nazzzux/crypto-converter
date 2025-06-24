import { FC } from 'react';

import { IconButton } from 'components/ui/IconButton';
import { TableItem, TableRow, TableSection } from 'components/ui/Table';

import { getSortIcon } from 'helpers/getSortIcon';

import { ICryptoAssetsTableProps } from './types';
import styles from '../../CryptoAssetsTable.module.scss';

export const CryptoAssetsHeader: FC<ICryptoAssetsTableProps> = ({ tableItems, onClick }) => {
  return (
    <TableSection isHeader className={styles.tableHeader}>
      <TableRow>
        {tableItems.map(({ title, sortDir, name }) => (
          <TableItem className={styles.tableHeaderItem} isHeader key={title}>
            <div className={styles.headerItemWrapper}>
              {title}
              {sortDir && name && (
                <IconButton onClick={onClick(name)}>{getSortIcon(sortDir)}</IconButton>
              )}
            </div>
          </TableItem>
        ))}
      </TableRow>
    </TableSection>
  );
};
