import { useMemo, useState } from 'react';

import { DEFAULT_SORT_STATE } from 'constants/defaultSortState';
import { useGetAllAssets } from 'services/cryptoAssets/hooks/useGetAllAssets';
import { ICryptoAsset } from 'services/cryptoAssets/types';

import { SORT_DIRECTIONS } from 'interfaces/sort';

import { Button } from 'components/ui/Button';
import { Loader } from 'components/ui/Loader';
import { TableSection, TableWrapper } from 'components/ui/Table';

import { getNextSort } from 'helpers/getNextSort';

import { CryptoAssetsHeader } from './components/CryptoAssetsHeader/CryptoAssetsHeader';
import { CryptoAssetsRow } from './components/CryptoAssetsRow/CryptoAssetsRow';
import { CRYPTO_ASSET_COLUMN_NAMES, ICryptoColumnNames } from './types';

import styles from './CryptoAssetsTable.module.scss';

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
        order: item.name === name ? getNextSort(item.order) : SORT_DIRECTIONS.NONE,
      })),
    );
  };

  const sortedAssets = useMemo(() => {
    const result = data?.pages.flat() ?? [];

    const activeSorts = sortState.filter(({ order }) => order !== SORT_DIRECTIONS.NONE);

    if (!activeSorts.length) return result;

    return result.toSorted((a: ICryptoAsset, b: ICryptoAsset) => {
      for (const { name, order } of activeSorts) {
        let aValue: string | number = '';
        let bValue: string | number = '';

        if (name === CRYPTO_ASSET_COLUMN_NAMES.NAME) {
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
        } else if (name === CRYPTO_ASSET_COLUMN_NAMES.PRICE) {
          aValue = a.current_price;
          bValue = b.current_price;
        }

        if (aValue < bValue) return order === SORT_DIRECTIONS.ASC ? -1 : 1;
        if (aValue > bValue) return order === SORT_DIRECTIONS.ASC ? 1 : -1;
      }

      return 0;
    });
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
