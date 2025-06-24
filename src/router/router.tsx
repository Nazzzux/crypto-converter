import { BaseLayout } from 'layouts/BaseLayout';
import { AppProviders } from '../AppProviders';
import { createBrowserRouter } from 'react-router-dom';
import { HOME_PATH, TRADE_PATH } from 'constants/paths';
import { HomePage } from 'pages/HomePage';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import { TradePage } from 'pages/TradePage/TradePage';

export const router = createBrowserRouter([
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
]);
