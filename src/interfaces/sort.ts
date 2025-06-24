export const SORT_DIRECTIONS = {
  ASC: 'ASC',
  DESC: 'DESC',
  NONE: 'NONE',
} as const;

export type ISortDirections = (typeof SORT_DIRECTIONS)[keyof typeof SORT_DIRECTIONS];
