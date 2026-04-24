import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createActor } from "../backend";

interface AuthContextValue {
  isAuthenticated: boolean;
  isAdmin: boolean;
  principal: string | null;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { loginStatus, login, clear, identity, isAuthenticated } =
    useInternetIdentity();
  const { actor, isFetching } = useActor(createActor);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);

  const principal = identity?.getPrincipal().toText() ?? null;

  useEffect(() => {
    if (!isAuthenticated || !actor || isFetching) {
      setIsAdmin(false);
      setAdminChecked(false);
      return;
    }
    let cancelled = false;
    const checkAdmin = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await (actor as any).isAdmin?.();
        if (!cancelled) {
          setIsAdmin(result === true);
          setAdminChecked(true);
        }
      } catch {
        if (!cancelled) {
          setIsAdmin(false);
          setAdminChecked(true);
        }
      }
    };
    checkAdmin();
    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, actor, isFetching]);

  const isLoading =
    loginStatus === "initializing" ||
    (isAuthenticated && !adminChecked && !isFetching);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdmin,
        principal,
        isLoading,
        login,
        logout: clear,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
