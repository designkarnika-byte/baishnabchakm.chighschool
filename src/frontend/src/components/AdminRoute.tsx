import { Loader2, ShieldAlert } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { ProtectedRoute } from "./ProtectedRoute";

interface AdminRouteProps {
  children: React.ReactNode;
}

export function AdminRoute({ children }: AdminRouteProps) {
  const { isAdmin, isLoading, isAuthenticated } = useAuth();
  const { t } = useLanguage();

  useEffect(() => {
    if (!isLoading && isAuthenticated && !isAdmin) {
      toast.error(t.adminRequiredMsg);
    }
  }, [isLoading, isAuthenticated, isAdmin, t.adminRequiredMsg]);

  return (
    <ProtectedRoute>
      {isLoading ? (
        <div
          className="flex min-h-[60vh] items-center justify-center"
          data-ocid="admin.loading_state"
        >
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : !isAdmin ? (
        <div
          className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center"
          data-ocid="admin.error_state"
        >
          <div className="rounded-full bg-destructive/10 p-4">
            <ShieldAlert className="h-10 w-10 text-destructive" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {t.adminRequired}
          </h2>
          <p className="max-w-sm text-muted-foreground">{t.adminRequiredMsg}</p>
        </div>
      ) : (
        <>{children}</>
      )}
    </ProtectedRoute>
  );
}
