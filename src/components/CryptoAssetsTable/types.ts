export const CRYPTO_ASSET_COLUMN_NAMES = {
  NAME: 'name',
  PRICE: 'price',
} as const;

export type ICryptoColumnNames =
  (typeof CRYPTO_ASSET_COLUMN_NAMES)[keyof typeof CRYPTO_ASSET_COLUMN_NAMES];
