import { JSX } from 'react';

import { ReactComponent as SortAscendingIcon } from 'assets/icons/SortAscendingIcon.svg';
import { ReactComponent as SortDescendingIcon } from 'assets/icons/SortDescendingIcon.svg';
import { ReactComponent as SortIcon } from 'assets/icons/SortIcon.svg';

import { ISortDirections, SORT_DIRECTIONS } from 'interfaces/sort';

export const getSortIcon = (sortDirection: ISortDirections) => {
  const iconMap = new Map<ISortDirections, JSX.Element>([
    [SORT_DIRECTIONS.ASC, <SortAscendingIcon />],
    [SORT_DIRECTIONS.DESC, <SortDescendingIcon />],
  ]);

  return iconMap.get(sortDirection) ?? <SortIcon />;
};
