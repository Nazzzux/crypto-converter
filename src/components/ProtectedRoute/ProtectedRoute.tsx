import { HOME_PATH } from "constants/paths";
import { FC, PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUser, useUserStore } from "store/useUserStore";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
const userData = useUserStore(getUser);

if (!userData) {
  return <Navigate to={HOME_PATH} replace />;
}

  return <>{children ?? <Outlet />}</>
};
