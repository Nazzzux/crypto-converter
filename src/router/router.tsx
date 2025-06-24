import { createBrowserRouter } from 'react-router-dom';

import { HOME_PATH, TRADE_PATH } from 'constants/paths';
import { BaseLayout } from 'layouts/BaseLayout';

import { HomePage } from 'pages/HomePage';
import { TradePage } from 'pages/TradePage/TradePage';

import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';

import { AppProviders } from '../AppProviders';

export const router = createBrowserRouter(
  [
    {
      element: <AppProviders />,
      children: [
        {
          element: <BaseLayout />,
          children: [
            {
              element: <HomePage />,
              path: HOME_PATH,
            },
            {
              element: (
                <ProtectedRoute>
                  <TradePage />
                </ProtectedRoute>
              ),
              path: TRADE_PATH,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/crypto-converter',
  },
);
