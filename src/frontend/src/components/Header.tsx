import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

const NAV_ITEMS = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "admissions" as const, href: "/admissions" },
  { key: "notices" as const, href: "/notices" },
  { key: "contact" as const, href: "/contact" },
];

const AUTH_NAV_ITEMS = [
  { key: "teachers" as const, href: "/teachers" },
  { key: "students" as const, href: "/students" },
];

export function Header() {
  const { t, toggleLanguage } = useLanguage();
  const { isAuthenticated, isAdmin, login, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const allNavItems = [
    ...NAV_ITEMS,
    ...(isAuthenticated ? AUTH_NAV_ITEMS : []),
    ...(isAdmin ? [{ key: "admin" as const, href: "/admin" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
      {/* Top brand bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="min-w-0">
            <Link to="/" className="block hover:opacity-90 transition-smooth">
              <p className="font-display text-sm font-semibold leading-tight tracking-wide truncate">
                {t.schoolNameBengali}
              </p>
              <p className="text-xs tracking-widest uppercase opacity-85 truncate">
                {t.schoolNameEnglish}
              </p>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3 ml-4 shrink-0">
            <button
              type="button"
              onClick={toggleLanguage}
              data-ocid="header.lang_toggle"
              className="rounded border border-primary-foreground/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider hover:bg-primary-foreground/10 transition-smooth"
              aria-label="Toggle language"
            >
              {t.langToggle}
            </button>

            {isAuthenticated ? (
              <Button
                size="sm"
                variant="outline"
                onClick={logout}
                data-ocid="header.logout_button"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent text-xs"
              >
                {t.logout}
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={login}
                data-ocid="header.login_button"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs font-semibold"
              >
                {t.login}
              </Button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden ml-2 shrink-0 p-1 rounded hover:bg-primary-foreground/10 transition-smooth"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="header.mobile_menu_toggle"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block bg-card" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center gap-1 py-1.5">
            {allNavItems.map(({ key, href }) => (
              <li key={key}>
                <Link
                  to={href}
                  data-ocid={`nav.${key}_link`}
                  className="block rounded px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:font-semibold [&.active]:border-b-2 [&.active]:border-primary"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-card border-t border-border"
          aria-label="Mobile navigation"
          data-ocid="header.mobile_nav"
        >
          <ul className="divide-y divide-border">
            {allNavItems.map(({ key, href }) => (
              <li key={key}>
                <Link
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`mobile_nav.${key}_link`}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-smooth"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 px-4 py-3 border-t border-border">
            <button
              type="button"
              onClick={toggleLanguage}
              data-ocid="mobile_header.lang_toggle"
              className="rounded border border-border px-2.5 py-1 text-xs font-semibold uppercase tracking-wider hover:bg-muted transition-smooth"
            >
              {t.langToggle}
            </button>
            {isAuthenticated ? (
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                data-ocid="mobile_header.logout_button"
              >
                {t.logout}
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={() => {
                  login();
                  setMobileOpen(false);
                }}
                data-ocid="mobile_header.login_button"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {t.login}
              </Button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
