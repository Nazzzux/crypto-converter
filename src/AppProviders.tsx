import { FC, PropsWithChildren } from 'react';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { flowRight } from 'lodash';
import { router } from 'router/router';

import { ToastProvider } from 'components/ToastProvider';

const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return flowRight([
    child => <QueryClientProvider client={queryClient} children={child} />,
    child => <ToastProvider children={child} />,
  ])(children);
};

export const AppProviders = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
