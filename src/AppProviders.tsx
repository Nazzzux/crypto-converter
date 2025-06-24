import { FC, PropsWithChildren } from 'react';
import { flowRight } from 'lodash';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return flowRight([n => <QueryClientProvider client={queryClient} children={n} />])(children);
};

export const AppProviders = () => (
  <Providers>
    <Outlet />
    <ReactQueryDevtools initialIsOpen />
  </Providers>
)
