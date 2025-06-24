import { ISortDirections } from 'interfaces/sort';

import { ICryptoColumnNames } from 'components/CryptoAssetsTable/types';

export interface ICryptoAssetsTableProps {
  onClick: (name: ICryptoColumnNames) => VoidFunction;
  tableItems: { title: string; name?: ICryptoColumnNames; sortDir?: ISortDirections }[];
}
