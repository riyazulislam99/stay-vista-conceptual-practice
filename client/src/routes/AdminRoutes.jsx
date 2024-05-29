import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;

  if (role === "admin") return children;

  return <Navigate to="/dashboard" />;
};

export default AdminRoutes;
