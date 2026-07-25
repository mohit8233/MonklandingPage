import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  // Loading Screen
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>

          <h2 className="text-lg font-semibold text-slate-700">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  // Not Logged In
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Logged In
  return children;
}
