import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, login } = useAuth();
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div
        className="flex min-h-[60vh] items-center justify-center"
        data-ocid="protected.loading_state"
      >
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center"
        data-ocid="protected.error_state"
      >
        <div className="rounded-full bg-muted p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {t.loginRequired}
        </h2>
        <p className="max-w-sm text-muted-foreground">{t.loginRequiredMsg}</p>
        <Button
          onClick={login}
          data-ocid="protected.login_button"
          className="mt-2"
        >
          {t.loginWithII}
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
