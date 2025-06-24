import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        newestOnTop
        closeOnClick
        pauseOnHover
        hideProgressBar={false}
        limit={3}
        position="bottom-right"
        autoClose={4000}
        theme="colored"
      />
    </>
  );
};
