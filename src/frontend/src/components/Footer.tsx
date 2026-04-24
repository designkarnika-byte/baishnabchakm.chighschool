import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* School identity */}
          <div className="space-y-3">
            <div>
              <p className="font-display text-lg font-semibold leading-tight">
                {t.schoolNameBengali}
              </p>
              <p className="text-xs tracking-widest uppercase opacity-80 mt-0.5">
                {t.schoolNameEnglish}
              </p>
            </div>
            <p className="text-sm opacity-80 italic font-display leading-snug">
              &ldquo;{t.schoolTaglineBengali}&rdquo;
            </p>
            <p className="text-xs opacity-60">{t.established}</p>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider opacity-80">
              {t.contact.title}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 opacity-70 mt-0.5" />
                <span className="opacity-90">{t.contact.addressValue}</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 shrink-0 opacity-70" />
                <a
                  href={`tel:${t.contact.phoneValue.replace(/\s/g, "")}`}
                  className="opacity-90 hover:opacity-100 transition-smooth"
                >
                  {t.contact.phoneValue}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="h-4 w-4 shrink-0 opacity-70" />
                <a
                  href={`mailto:${t.contact.emailValue}`}
                  className="opacity-90 hover:opacity-100 transition-smooth break-all"
                >
                  {t.contact.emailValue}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 opacity-70 mt-0.5" />
                <span className="opacity-90">{t.contact.hoursValue}</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider opacity-80">
              {t.home.quickLinks}
            </h3>
            <ul className="grid grid-cols-2 gap-1.5 text-sm">
              {(
                [
                  { key: "home", href: "/" },
                  { key: "about", href: "/about" },
                  { key: "admissions", href: "/admissions" },
                  { key: "notices", href: "/notices" },
                  { key: "contact", href: "/contact" },
                ] as const
              ).map(({ key, href }) => (
                <li key={key}>
                  <Link
                    to={href}
                    className="opacity-80 hover:opacity-100 hover:underline transition-smooth"
                    data-ocid={`footer.${key}_link`}
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <p>
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
          <p>
            {t.schoolNameEnglish} · {t.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
