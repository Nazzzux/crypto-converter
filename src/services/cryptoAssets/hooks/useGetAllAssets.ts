import { useInfiniteQuery } from '@tanstack/react-query';
import { PAGE_LIMIT, PER_PAGE_LIMIT } from 'constants/perPageLimit';
import { ONE_MINUTE_IN_MS } from 'constants/time';

import { cryptoAssetsQueryKeys } from '../cryptoAssets-qk';
import { CryptoAssetsApi } from '../cryptoAssets.api';

export const useGetAllAssets = () => {
  return useInfiniteQuery({
    queryKey: cryptoAssetsQueryKeys.getAllAssets(),
    queryFn: ({ pageParam = 1 }) => CryptoAssetsApi.getAssets({ pageNum: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasMoreApiPages = lastPage.length === PER_PAGE_LIMIT;
      const loadedCount = allPages.flat().length;

      if (hasMoreApiPages && loadedCount < PAGE_LIMIT) {
        return allPages.length + 1;
      }

      return undefined;
    },
    refetchOnWindowFocus: true,
    staleTime: ONE_MINUTE_IN_MS,
  });
};
