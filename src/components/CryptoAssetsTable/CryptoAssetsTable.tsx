import { TableWrapper, TableSection } from 'components/ui/Avatar/Table';
import { Loader } from 'components/ui/Loader';
import { useGetAllAssets } from 'services/cryptoAssets/hooks/useGetAllAssets';

import styles from './CryptoAssetsTable.module.scss';
import { Button } from 'components/ui/Button';
import { CryptoAssetsHeader } from './components/CryptoAssetsHeader/CryptoAssetsHeader';
import { CryptoAssetsRow } from './components/CryptoAssetsRow/CryptoAssetsRow';
import { ISortDirections, SORT_DIRECTIONS } from 'interfaces/sort';
import { CRYPTO_ASSET_COLUMN_NAMES, ICryptoColumnNames } from './types';
import { useMemo, useState } from 'react';
import { getNextSort } from 'helpers/getNextSort';
import { ICryptoAsset } from 'services/cryptoAssets/types';

const DEFAULT_SORT_STATE: { name: ICryptoColumnNames; order: ISortDirections }[] = [
  { name: CRYPTO_ASSET_COLUMN_NAMES.NAME, order: SORT_DIRECTIONS.NONE },
  { name: CRYPTO_ASSET_COLUMN_NAMES.PRICE, order: SORT_DIRECTIONS.NONE },
];

export const CryptoAssetsTable = () => {
  const [sortState, setSortState] = useState(() => DEFAULT_SORT_STATE);
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error, hasNextPage } =
    useGetAllAssets();

  const getSortDirection = (name: ICryptoColumnNames) =>
    sortState.find(item => item.name === name)?.order;

  const ASSETS_TABLE_HEAD = [
    { title: 'Icon' },
    {
      title: 'Name',
      sortDir: getSortDirection(CRYPTO_ASSET_COLUMN_NAMES.NAME),
      name: CRYPTO_ASSET_COLUMN_NAMES.NAME,
    },
    {
      title: 'Price, $',
      sortDir: getSortDirection(CRYPTO_ASSET_COLUMN_NAMES.PRICE),
      name: CRYPTO_ASSET_COLUMN_NAMES.PRICE,
    },
    { title: 'Details' },
  ];

  const handleSort = (name: ICryptoColumnNames) => () => {
    setSortState(prevState =>
      prevState.map(item => ({
        ...item,
        order: item.name === name ? getNextSort(item.order) : item.order,
      })),
    );
  };

  const sortedAssets = useMemo(() => {
    let result = data?.pages.flat() ?? [];

    for (const { name, order } of sortState) {
      if (order === SORT_DIRECTIONS.NONE) continue;

      result = result.toSorted((a: ICryptoAsset, b: ICryptoAsset) => {
        let aValue: string | number = '';
        let bValue: string | number = '';

        if (name === CRYPTO_ASSET_COLUMN_NAMES.NAME) {
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
        }

        if (name === CRYPTO_ASSET_COLUMN_NAMES.PRICE) {
          aValue = a.current_price;
          bValue = b.current_price;
        }

        if (aValue < bValue) return order === SORT_DIRECTIONS.ASC ? -1 : 1;
        if (aValue > bValue) return order === SORT_DIRECTIONS.ASC ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, sortState]);

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader size={60} />
      </div>
    );
  }

  if (error) {
    return <div className={styles.error}>Error loading data: {error.message}</div>;
  }

  if (!data || data.pages.flat().length === 0) {
    return <div className={styles.noData}>No data available</div>;
  }

  return (
    <>
      <TableWrapper>
        <CryptoAssetsHeader tableItems={ASSETS_TABLE_HEAD} onClick={handleSort} />
        <TableSection>
          {sortedAssets.flat().map((item: ICryptoAsset) => (
            <CryptoAssetsRow key={item.id} {...item} />
          ))}
        </TableSection>
      </TableWrapper>
      {hasNextPage && (
        <Button
          className={styles.loadMoreButton}
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Load More
        </Button>
      )}
    </>
  );
};
