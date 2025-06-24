import * as t from './types';
import { cryptoAssetsApi } from '../controllers/cryptoAssets/client';
import { PER_PAGE_LIMIT } from 'constants/perPageLimit';

export const CryptoAssetsApi = {
  // id and price
  getAssets: async ({ pageNum }: t.IGetAllUsersParams): Promise<t.ICryptoAsset[]> => {
    const { data } = await cryptoAssetsApi.get<t.ICryptoAsset[]>('', {
      params: {
        vs_currency: 'usd',
        page: pageNum,
        per_page: PER_PAGE_LIMIT,
      },
    });
    return data;
  },
};
