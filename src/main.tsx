import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { router } from 'router/router.tsx';

import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
