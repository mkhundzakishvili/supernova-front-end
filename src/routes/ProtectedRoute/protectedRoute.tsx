import { Navigate } from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

export const ProtectedRoute = ({ children }:any) => {
  const { token }:any = useAuth();
  if (!token) {
    // user iiiiiis not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};