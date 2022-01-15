import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useCurrentUser } from "../../hooks/use-current-user";

export interface PrivateRouteProps {
  element: React.ReactNode | null;
  path: string;
}

export function PrivateRoute({ element, path }: PrivateRouteProps) {
  const user = useCurrentUser();

  return user ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to={{ pathname: "/login" }} />
  );
}
