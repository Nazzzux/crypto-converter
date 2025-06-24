import { useState } from 'react';

import { ICryptoAsset } from 'services/cryptoAssets/types';

import { TableItem, TableRow } from 'components/ui/Avatar/Table';
import { Button } from 'components/ui/Button';
import { Dropdown } from 'components/ui/Dropdown';

import styles from '../../CryptoAssetsTable.module.scss';

const OPTIONS = [
  { value: 'sell', label: 'Buy' },
  { value: 'buy', label: 'Sell' },
];

export const CryptoAssetsRow = ({ name, image, current_price }: ICryptoAsset) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const clickHandler = () => setIsDropdownVisible(prevState => !prevState);

  return (
    <TableRow>
      <TableItem className={styles.tableItemIcon}>
        <img className={styles.icon} src={image} alt={name} />
      </TableItem>
      <TableItem>{name}</TableItem>
      <TableItem>{current_price.toFixed(2)}</TableItem>
      <TableItem>
        {isDropdownVisible ? (
          <Dropdown options={OPTIONS} defaultValue={OPTIONS[0].value} />
        ) : (
          <Button size="small" onClick={clickHandler} className={styles.detailsButton}>
            Show
          </Button>
        )}
      </TableItem>
    </TableRow>
  );
};
