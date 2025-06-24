import { useState } from 'react';

import { CRYPTO_ACTIONS_OPTIONS } from 'constants/cryptoActionsOptions';
import { ICryptoAsset } from 'services/cryptoAssets/types';

import { TableItem, TableRow } from 'components/ui/Avatar/Table';
import { Button } from 'components/ui/Button';
import { Dropdown } from 'components/ui/Dropdown';

import { formatCurrency } from 'helpers/formatCurrency';

import styles from '../../CryptoAssetsTable.module.scss';

export const CryptoAssetsRow = ({ name, image, current_price }: ICryptoAsset) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleClick = () => setIsDropdownVisible(prevState => !prevState);

  return (
    <TableRow>
      <TableItem className={styles.tableItemIcon}>
        <img className={styles.icon} src={image} alt={name} />
      </TableItem>
      <TableItem>{name}</TableItem>
      <TableItem>{formatCurrency(current_price)}</TableItem>
      <TableItem>
        {isDropdownVisible ? (
          <Dropdown
            options={CRYPTO_ACTIONS_OPTIONS}
            defaultValue={CRYPTO_ACTIONS_OPTIONS[0].value}
          />
        ) : (
          <Button size="small" onClick={handleClick} className={styles.detailsButton}>
            Show
          </Button>
        )}
      </TableItem>
    </TableRow>
  );
};
