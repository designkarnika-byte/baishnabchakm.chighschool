import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pin, Search } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNotices } from "../hooks/useNotices";
import type { NoticeCategory } from "../types";

const PAGE_SIZE = 10;

function CategoryBadge({
  category,
  lang,
}: { category: NoticeCategory; lang: "en" | "bn" }) {
  const { t } = useLanguage();
  const colors: Record<NoticeCategory, string> = {
    Academic: "bg-primary/10 text-primary border-primary/20",
    General: "bg-muted text-muted-foreground border-border",
    Holiday: "bg-accent/15 text-accent-foreground border-accent/25",
    Alert: "bg-destructive/10 text-destructive border-destructive/20",
    Other: "bg-secondary text-secondary-foreground border-border",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${colors[category]}`}
    >
      {lang === "bn" ? t.notices.categories[category] : category}
    </span>
  );
}

export default function NoticeBoardPage() {
  const { t, language } = useLanguage();
  const { data: notices, isLoading } = useNotices();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<NoticeCategory | "all">(
    "all",
  );
  const [page, setPage] = useState(1);

  const categories: Array<NoticeCategory | "all"> = [
    "all",
    "Academic",
    "General",
    "Holiday",
    "Alert",
    "Other",
  ];

  const filtered =
    notices?.filter((n) => {
      const matchSearch =
        search === "" ||
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.content.toLowerCase().includes(search.toLowerCase());
      const matchCat =
        activeCategory === "all" || n.category === activeCategory;
      return matchSearch && matchCat;
    }) ?? [];

  const pinned = filtered.filter((n) => n.pinned);
  const unpinned = filtered.filter((n) => !n.pinned);

  // Paginate unpinned notices
  const totalPages = Math.max(1, Math.ceil(unpinned.length / PAGE_SIZE));
  const pagedUnpinned = unpinned.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const handleSearchChange = (v: string) => {
    setSearch(v);
    setPage(1);
  };
  const handleCategoryChange = (cat: NoticeCategory | "all") => {
    setActiveCategory(cat);
    setPage(1);
  };

  const formatDate = (ts: bigint) =>
    new Date(Number(ts)).toLocaleDateString(
      language === "bn" ? "bn-IN" : "en-IN",
      { day: "numeric", month: "short", year: "numeric" },
    );

  return (
    <div data-ocid="notices.page">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold">
            {t.notices.title}
          </h1>
          <p className="mt-2 opacity-80 text-sm">
            {language === "bn"
              ? "সর্বশেষ নোটিশ ও ঘোষণাসমূহ"
              : "Latest school announcements and notices"}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 bg-card border-b border-border sticky top-0 z-10 shadow-subtle">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder={
                language === "bn" ? "বিজ্ঞপ্তি খুঁজুন..." : "Search notices..."
              }
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              data-ocid="notices.search_input"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                data-ocid={`notices.filter.${cat}_tab`}
                className={`rounded-full px-3 py-1 text-xs font-medium border transition-smooth ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat === "all"
                  ? t.notices.categories.all
                  : language === "bn"
                    ? t.notices.categories[cat]
                    : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="mx-auto max-w-7xl space-y-10">
          {isLoading ? (
            <div className="space-y-4" data-ocid="notices.loading_state">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-24 w-full rounded-lg" />
              ))}
            </div>
          ) : (
            <>
              {/* Pinned notices */}
              {pinned.length > 0 && (
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                    <Pin className="h-4 w-4 text-gold" />
                    {t.notices.pinned}
                  </h2>
                  <div className="space-y-3">
                    {pinned.map((notice, i) => (
                      <Link
                        to="/notices/$id"
                        params={{ id: notice.id.toString() }}
                        key={notice.id.toString()}
                        data-ocid={`notices.pinned.item.${i + 1}`}
                      >
                        <div className="notice-pinned rounded-lg p-5 hover:shadow-elevated transition-smooth group cursor-pointer">
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0 space-y-1.5">
                              <div className="flex items-center gap-2 flex-wrap">
                                <CategoryBadge
                                  category={notice.category}
                                  lang={language}
                                />
                                <span className="text-xs text-muted-foreground">
                                  {t.notices.postedOn}:{" "}
                                  {formatDate(notice.createdAt)}
                                </span>
                              </div>
                              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-smooth">
                                {notice.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {notice.content}
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-smooth" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* All notices with pagination */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    {t.notices.all}
                  </h2>
                  {unpinned.length > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {language === "bn"
                        ? `মোট ${unpinned.length}টি বিজ্ঞপ্তি`
                        : `${unpinned.length} notice${unpinned.length !== 1 ? "s" : ""}`}
                    </span>
                  )}
                </div>

                {unpinned.length === 0 && pinned.length === 0 ? (
                  <div
                    className="text-center py-16 text-muted-foreground"
                    data-ocid="notices.empty_state"
                  >
                    <Pin className="h-10 w-10 mx-auto mb-3 opacity-20" />
                    <p className="font-medium">{t.notices.noNotices}</p>
                    <p className="text-xs mt-1 opacity-60">
                      {language === "bn"
                        ? "এই মুহূর্তে কোনো বিজ্ঞপ্তি নেই"
                        : "Check back later for updates"}
                    </p>
                  </div>
                ) : unpinned.length === 0 ? null : (
                  <>
                    <div className="space-y-3">
                      {pagedUnpinned.map((notice, i) => (
                        <Link
                          to="/notices/$id"
                          params={{ id: notice.id.toString() }}
                          key={notice.id.toString()}
                          data-ocid={`notices.item.${(page - 1) * PAGE_SIZE + i + 1}`}
                        >
                          <div className="rounded-lg border border-border bg-card p-5 hover:shadow-elevated transition-smooth group cursor-pointer">
                            <div className="flex items-start justify-between gap-4">
                              <div className="min-w-0 space-y-1.5">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <CategoryBadge
                                    category={notice.category}
                                    lang={language}
                                  />
                                  <span className="text-xs text-muted-foreground">
                                    {t.notices.postedOn}:{" "}
                                    {formatDate(notice.createdAt)}
                                  </span>
                                </div>
                                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-smooth">
                                  {notice.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {notice.content}
                                </p>
                              </div>
                              <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-smooth" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div
                        className="flex items-center justify-center gap-3 mt-8"
                        data-ocid="notices.pagination"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          disabled={page === 1}
                          data-ocid="notices.pagination_prev"
                          aria-label={
                            language === "bn" ? "আগের পাতা" : "Previous page"
                          }
                        >
                          <ChevronLeft className="h-4 w-4" />
                          {language === "bn" ? "আগে" : "Prev"}
                        </Button>
                        <span className="text-sm text-muted-foreground">
                          {language === "bn"
                            ? `পাতা ${page} / ${totalPages}`
                            : `Page ${page} of ${totalPages}`}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setPage((p) => Math.min(totalPages, p + 1))
                          }
                          disabled={page === totalPages}
                          data-ocid="notices.pagination_next"
                          aria-label={
                            language === "bn" ? "পরের পাতা" : "Next page"
                          }
                        >
                          {language === "bn" ? "পরে" : "Next"}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
