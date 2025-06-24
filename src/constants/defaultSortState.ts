import { ISortDirections, SORT_DIRECTIONS } from 'interfaces/sort';

import { CRYPTO_ASSET_COLUMN_NAMES, ICryptoColumnNames } from 'components/CryptoAssetsTable/types';

export const DEFAULT_SORT_STATE: { name: ICryptoColumnNames; order: ISortDirections }[] = [
  { name: CRYPTO_ASSET_COLUMN_NAMES.NAME, order: SORT_DIRECTIONS.NONE },
  { name: CRYPTO_ASSET_COLUMN_NAMES.PRICE, order: SORT_DIRECTIONS.NONE },
];
