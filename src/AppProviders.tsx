import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { flowRight } from 'lodash';

import { ToastProvider } from 'components/ToastProvider';

const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return flowRight([
    n => <QueryClientProvider client={queryClient} children={n} />,
    n => <ToastProvider children={n} />,
  ])(children);
};

export const AppProviders = () => (
  <Providers>
    <Outlet />
  </Providers>
);
