import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem("modelcorp_session");
    if (!session) {
      navigate("/login");
    }
  }, [navigate]);

  const session = localStorage.getItem("modelcorp_session");
  
  if (!session) {
    return null;
  }

  return <>{children}</>;
}
