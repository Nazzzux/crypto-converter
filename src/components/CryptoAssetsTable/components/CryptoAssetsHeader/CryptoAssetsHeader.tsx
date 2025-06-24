import { ICryptoColumnNames } from 'components/CryptoAssetsTable/types';
import { TableSection, TableRow, TableItem } from 'components/ui/Avatar/Table';
import { IconButton } from 'components/ui/IconButton';
import { getSortIcon } from 'helpers/getSortIcon';
import { ISortDirections } from 'interfaces/sort';
import { FC } from 'react';
import styles from '../../CryptoAssetsTable.module.scss';
interface ICryptoAssetsTableProps {
  onClick: (name: ICryptoColumnNames) => VoidFunction;
  tableItems: { title: string; name?: ICryptoColumnNames; sortDir?: ISortDirections }[];
}

export const CryptoAssetsHeader: FC<ICryptoAssetsTableProps> = ({ tableItems, onClick }) => {
  return (
    <TableSection isHeader>
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
