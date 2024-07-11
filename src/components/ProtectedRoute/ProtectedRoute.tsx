import { RouteProps, Navigate, Outlet } from "react-router-dom";

export type ProtectedRouteProps = {
  fallbackPath?: string;
  isProtected?: boolean;
} & RouteProps;

export const ProtectedRoute = ({ fallbackPath }: ProtectedRouteProps) => {
  // TODO: Modify this file to add authentication logic
  const isAllowed = () => true;

  return isAllowed() ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: fallbackPath }} />
  );
};

ProtectedRoute.defaultProps = {
  fallbackPath: "/",
};
