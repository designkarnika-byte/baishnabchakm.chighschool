import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  ChevronRight,
  Clock,
  MapPin,
  Pin,
  Users,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNotices } from "../hooks/useNotices";

const PRINCIPAL_MESSAGE = {
  en: "At Baishnabchak M.C. High School, we believe that education is not merely the acquisition of knowledge, but the development of a complete human being. Our dedicated faculty and supportive environment nurture each student's unique potential while instilling values of discipline, integrity, and compassion. We are proud to continue our legacy of academic excellence that has shaped generations of leaders and citizens in this community.",
  bn: "বৈষ্ণবচক মহেশ চন্দ্র উচ্চ বিদ্যালয়ে আমরা বিশ্বাস করি শিক্ষা শুধু জ্ঞান অর্জন নয় — একজন সম্পূর্ণ মানুষ গড়ার প্রক্রিয়া। আমাদের নিবেদিতপ্রাণ শিক্ষকমণ্ডলী ও সহায়ক পরিবেশ প্রতিটি শিক্ষার্থীর অনন্য সম্ভাবনাকে পরিপুষ্ট করে, পাশাপাশি শৃঙ্খলা, সততা ও সহমর্মিতার মূল্যবোধ জাগিয়ে তোলে।",
};

const STATS = [
  { en: "Founded", bn: "প্রতিষ্ঠিত", value: "Est. 1928" },
  { en: "Students", bn: "শিক্ষার্থী", value: "500+" },
  { en: "Teachers", bn: "শিক্ষক", value: "20+" },
  { en: "Location", bn: "অবস্থান", value: "Baishnabchak" },
];

const VALUES = [
  {
    icon: BookOpen,
    en: "Academic Excellence",
    bn: "শিক্ষায় উৎকর্ষ",
  },
  {
    icon: Award,
    en: "Holistic Growth",
    bn: "সামগ্রিক বিকাশ",
  },
  {
    icon: Users,
    en: "Community Engagement",
    bn: "সমাজবদ্ধতা",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Academic: "bg-primary/10 text-primary border-primary/20",
  General: "bg-muted text-muted-foreground border-border",
  Holiday: "bg-accent/15 text-accent-foreground border-accent/25",
  Alert: "bg-destructive/10 text-destructive border-destructive/20",
  Other: "bg-secondary text-secondary-foreground border-border",
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[category] ?? CATEGORY_COLORS.Other}`}
    >
      {category}
    </span>
  );
}

function NoticeSkeleton() {
  return (
    <div className="space-y-3" data-ocid="home.notices_loading_state">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-20 w-full rounded-lg" />
      ))}
    </div>
  );
}

export default function HomePage() {
  const { t, language } = useLanguage();
  const { data: notices, isLoading } = useNotices();

  const pinnedNotices = notices?.filter((n) => n.pinned).slice(0, 3) ?? [];
  const latestNotices = notices?.filter((n) => !n.pinned).slice(0, 5) ?? [];

  const formatDate = (ts: bigint) =>
    new Date(Number(ts)).toLocaleDateString(
      language === "bn" ? "bn-IN" : "en-IN",
      { day: "numeric", month: "short", year: "numeric" },
    );

  return (
    <div data-ocid="home.page">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground py-14 px-4">
        <div className="mx-auto max-w-5xl text-center space-y-5 entrance-slide-up">
          <p className="text-xs uppercase tracking-widest opacity-70 font-semibold">
            {t.established}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-tight text-balance">
            {t.schoolNameBengali}
          </h1>
          <p className="font-display text-xl sm:text-2xl opacity-90 font-medium tracking-wide">
            {t.schoolNameEnglish}
          </p>
          <p className="font-display text-lg sm:text-xl opacity-75 italic">
            {t.schoolTaglineBengali}
          </p>
          <p className="text-sm opacity-70 max-w-xl mx-auto">
            {t.home.heroSubtitle}
          </p>

          {/* Values row */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {VALUES.map(({ icon: Icon, en: enVal, bn: bnVal }, i) => (
              <div
                key={enVal}
                className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm entrance-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon className="h-4 w-4 text-gold shrink-0" />
                <span className="font-medium">
                  {language === "bn" ? bnVal : enVal}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3 justify-center flex-wrap pt-2">
            <Link to="/notices" data-ocid="home.notices_cta">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elevated">
                {t.home.pinnedNotices}
              </Button>
            </Link>
            <Link to="/admissions" data-ocid="home.admissions_cta">
              <Button
                variant="outline"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                {t.admissions.applyNow}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Bar ──────────────────────────────────────── */}
      <section className="bg-teal-deep text-primary-foreground py-4 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(({ en: enLabel, bn: bnLabel, value }, i) => (
              <div
                key={enLabel}
                className="text-center entrance-slide-up"
                style={{ animationDelay: `${i * 0.07}s` }}
                data-ocid={`home.stat.item.${i + 1}`}
              >
                <p className="font-display text-2xl font-bold text-gold">
                  {value}
                </p>
                <p className="text-xs opacity-80 mt-0.5">
                  {language === "bn" ? bnLabel : enLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-background">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Notices */}
          <div className="lg:col-span-2 space-y-10">
            {/* Pinned Notices */}
            <div data-ocid="home.pinned_notices.section">
              <div className="flex items-center gap-2 mb-5">
                <Pin className="h-4 w-4 text-gold" />
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {t.home.pinnedNotices}
                  <span className="ml-2 text-sm font-normal opacity-55">
                    ({language === "bn" ? "বিজ্ঞপ্তি" : "Notices"})
                  </span>
                </h2>
              </div>

              {isLoading ? (
                <NoticeSkeleton />
              ) : pinnedNotices.length === 0 ? (
                <p
                  className="text-sm text-muted-foreground"
                  data-ocid="home.pinned_notices.empty_state"
                >
                  {t.notices.noNotices}
                </p>
              ) : (
                <div className="space-y-3">
                  {pinnedNotices.map((notice, i) => (
                    <Link
                      to="/notices/$id"
                      params={{ id: notice.id.toString() }}
                      key={notice.id.toString()}
                      data-ocid={`home.pinned_notice.item.${i + 1}`}
                    >
                      <div className="notice-pinned rounded-lg p-4 hover:shadow-elevated transition-smooth group cursor-pointer">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <CategoryBadge category={notice.category} />
                              <span className="text-xs text-muted-foreground">
                                {formatDate(notice.createdAt)}
                              </span>
                            </div>
                            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-1">
                              {notice.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
                              {notice.content}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs text-gold font-medium mt-2 group-hover:underline">
                              {t.notices.readMore}
                              <ChevronRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Latest Notices Grid */}
            <div data-ocid="home.latest_notices.section">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {t.home.latestNotices}
                </h2>
                <Link
                  to="/notices"
                  data-ocid="home.view_all_notices_link"
                  className="text-sm text-primary hover:underline transition-smooth flex items-center gap-1"
                >
                  {t.home.viewAll}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-32 w-full rounded-lg" />
                  ))}
                </div>
              ) : latestNotices.length === 0 ? (
                <p
                  className="text-sm text-muted-foreground"
                  data-ocid="home.latest_notices.empty_state"
                >
                  {t.notices.noNotices}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {latestNotices.map((notice, i) => (
                    <Link
                      to="/notices/$id"
                      params={{ id: notice.id.toString() }}
                      key={notice.id.toString()}
                      data-ocid={`home.latest_notice.item.${i + 1}`}
                    >
                      <Card className="hover:shadow-elevated transition-smooth group cursor-pointer h-full">
                        <CardContent className="p-4 flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <CategoryBadge category={notice.category} />
                            <span className="text-xs text-muted-foreground">
                              {formatDate(notice.createdAt)}
                            </span>
                          </div>
                          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2 flex-1">
                            {notice.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5">
                            {notice.content}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-3 group-hover:underline">
                            {t.notices.readMore}
                            <ChevronRight className="h-3 w-3" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-5">
            {/* Principal's Message */}
            <div className="bg-muted/40 rounded-xl p-5 border border-border">
              <h2 className="font-display text-base font-semibold mb-3 text-foreground">
                {t.home.principalMessage}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                {language === "bn"
                  ? PRINCIPAL_MESSAGE.bn
                  : PRINCIPAL_MESSAGE.en}
              </p>
              <p className="text-sm font-semibold mt-3 text-foreground">
                {language === "bn" ? "— প্রধান শিক্ষক" : "— The Principal"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t.schoolNameEnglish}
              </p>
            </div>

            {/* Operating Hours */}
            <div
              className="bg-card rounded-xl p-5 border border-border"
              data-ocid="home.operating_hours.card"
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-gold" />
                <h3 className="font-display text-base font-semibold text-foreground">
                  {language === "bn" ? "বিদ্যালয়ের সময়" : "School Hours"}
                </h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "bn" ? "সোম–বৃহস্পতি" : "Mon–Thu"}
                  </span>
                  <span className="font-medium text-foreground">
                    10:45 AM – 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "bn" ? "শুক্রবার" : "Friday"}
                  </span>
                  <span className="font-medium text-foreground">
                    10:45 AM – 3:30 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "bn" ? "রবিবার" : "Sunday"}
                  </span>
                  <span className="text-destructive font-medium">
                    {language === "bn" ? "বন্ধ" : "Closed"}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-1.5 mt-4 pt-4 border-t border-border">
                <MapPin className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  Baishnabchak, Kolkata, West Bengal 721158
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  num: "Est. 1928",
                  label: language === "bn" ? "প্রতিষ্ঠা সাল" : "Est. Year",
                },
                {
                  num: "500+",
                  label: language === "bn" ? "শিক্ষার্থী" : "Students",
                },
                {
                  num: "20+",
                  label: language === "bn" ? "শিক্ষক" : "Teachers",
                },
                {
                  num: "98%",
                  label: language === "bn" ? "পাশের হার" : "Pass Rate",
                },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-card rounded-lg p-3 text-center border border-border"
                >
                  <p className="font-display text-xl font-bold text-primary">
                    {num}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="bg-muted/40 border-t border-border py-10 px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {language === "bn"
              ? "আজই যোগ দিন আমাদের সাথে"
              : "Join Our School Community"}
          </h2>
          <p className="text-muted-foreground text-sm">
            {language === "bn"
              ? "ভর্তির তথ্য ও যোগাযোগের জন্য আমাদের সাথে যোগাযোগ করুন।"
              : "Get in touch to learn about admissions and everything our school offers."}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/admissions">
              <Button
                data-ocid="home.bottom_admissions_cta"
                className="bg-primary"
              >
                {t.admissions.title}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" data-ocid="home.contact_cta">
                {t.contact.title}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
