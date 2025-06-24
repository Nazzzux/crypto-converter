import { useInfiniteQuery } from '@tanstack/react-query';
import { CryptoAssetsApi } from '../cryptoAssets.api';
import { cryptoAssetsQueryKeys } from '../cryptoAssets-qk';
import { PAGE_LIMIT, PER_PAGE_LIMIT } from 'constants/perPageLimit';

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
    staleTime: 1000 * 60,
  });
};
