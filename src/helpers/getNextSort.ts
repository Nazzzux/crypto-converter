import { ISortDirections, SORT_DIRECTIONS } from "interfaces/sort";

export const getNextSort = (currentSort: ISortDirections): ISortDirections => {
  const sortMaps = new Map<ISortDirections, ISortDirections>([
    [SORT_DIRECTIONS.ASC, SORT_DIRECTIONS.DESC],
    [SORT_DIRECTIONS.DESC, SORT_DIRECTIONS.NONE],
    [SORT_DIRECTIONS.NONE, SORT_DIRECTIONS.ASC],
  ]);

  return sortMaps.get(currentSort) ?? SORT_DIRECTIONS.NONE;
};
