import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Pin, User } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNoticeById } from "../hooks/useNotices";

export default function NoticeDetailPage() {
  const { id } = useParams({ from: "/notices/$id" });
  const { t, language } = useLanguage();
  const { data: notice, isLoading } = useNoticeById(BigInt(id));

  const formatDate = (ts: bigint) =>
    new Date(Number(ts)).toLocaleDateString(
      language === "bn" ? "bn-IN" : "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      },
    );

  const categoryColors: Record<string, string> = {
    Academic: "bg-primary/10 text-primary border-primary/20",
    General: "bg-muted text-muted-foreground border-border",
    Holiday: "bg-accent/15 text-accent-foreground border-accent/25",
    Alert: "bg-destructive/10 text-destructive border-destructive/20",
    Other: "bg-secondary text-secondary-foreground border-border",
  };

  return (
    <div data-ocid="notice_detail.page">
      <section className="bg-primary text-primary-foreground py-8 px-4">
        <div className="mx-auto max-w-3xl">
          <Link to="/notices">
            <Button
              variant="ghost"
              size="sm"
              data-ocid="notice_detail.back_button"
              className="text-primary-foreground hover:bg-primary-foreground/10 mb-3 -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              {t.back} — {t.notices.title}
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-10 px-4 bg-background">
        <div className="mx-auto max-w-3xl">
          {isLoading ? (
            <div className="space-y-4" data-ocid="notice_detail.loading_state">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-40 w-full" />
            </div>
          ) : !notice ? (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="notice_detail.error_state"
            >
              <p>{t.error}</p>
              <Link to="/notices">
                <Button variant="outline" className="mt-4">
                  {t.back}
                </Button>
              </Link>
            </div>
          ) : (
            <article className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${categoryColors[notice.category] ?? categoryColors.Other}`}
                  >
                    {language === "bn"
                      ? t.notices.categories[notice.category]
                      : notice.category}
                  </span>
                  {notice.pinned && (
                    <span className="inline-flex items-center gap-1 text-xs text-gold font-medium">
                      <Pin className="h-3 w-3" />
                      {t.notices.pinned}
                    </span>
                  )}
                </div>

                <h1 className="font-display text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
                  {notice.title}
                </h1>

                <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {t.notices.postedOn}: {formatDate(notice.createdAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {language === "bn" ? "কর্তৃপক্ষ" : "School Authority"}
                  </span>
                </div>
              </div>

              {notice.pinned && (
                <div className="notice-pinned rounded-lg p-1" aria-hidden />
              )}

              <div className="prose prose-sm max-w-none rounded-xl bg-card border border-border p-6">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {notice.content}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <Link to="/notices">
                  <Button
                    variant="outline"
                    data-ocid="notice_detail.back_to_notices_button"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    {t.back}
                  </Button>
                </Link>
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
