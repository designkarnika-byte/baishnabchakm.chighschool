import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Mail,
  Phone,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTeachers } from "../hooks/useTeachers";
import type { Teacher } from "../types";

type SortKey = "name" | "subject" | "qualification";
type SortDir = "asc" | "desc";

const PAGE_SIZE = 20;

export default function TeachersPage() {
  const { t, language } = useLanguage();
  const { data: teachers, isLoading } = useTeachers();

  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return (teachers ?? []).filter(
      (tc) =>
        q === "" ||
        tc.name.toLowerCase().includes(q) ||
        tc.nameBengali.includes(search) ||
        tc.subject.toLowerCase().includes(q) ||
        tc.subjectBengali.includes(search),
    );
  }, [teachers, search]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let valA = "";
      let valB = "";
      if (sortKey === "name") {
        valA = language === "bn" ? a.nameBengali : a.name;
        valB = language === "bn" ? b.nameBengali : b.name;
      } else if (sortKey === "subject") {
        valA = language === "bn" ? a.subjectBengali : a.subject;
        valB = language === "bn" ? b.subjectBengali : b.subject;
      } else {
        valA = a.qualification;
        valB = b.qualification;
      }
      const cmp = valA.localeCompare(valB);
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir, language]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const SortHeader = ({
    label,
    colKey,
  }: {
    label: string;
    colKey: SortKey;
  }) => (
    <button
      type="button"
      onClick={() => handleSort(colKey)}
      className="flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors duration-200"
      data-ocid={`teachers.sort_${colKey}`}
    >
      {label}
      <ArrowUpDown
        className={`h-3.5 w-3.5 ${sortKey === colKey ? "text-primary" : "text-muted-foreground"}`}
      />
    </button>
  );

  return (
    <div data-ocid="teachers.page">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-1">
            <GraduationCap className="h-7 w-7 opacity-80" />
            <h1 className="font-display text-3xl sm:text-4xl font-semibold">
              {t.teachers.title}
            </h1>
          </div>
          <p className="mt-1 opacity-70 text-sm">{t.schoolNameEnglish}</p>
          {!isLoading && (
            <Badge
              variant="secondary"
              className="mt-3 bg-primary-foreground/20 text-primary-foreground border-0"
            >
              {filtered.length} {language === "bn" ? "জন শিক্ষক" : "teachers"}
            </Badge>
          )}
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-4 px-4 bg-card border-b border-border sticky top-0 z-10 shadow-subtle">
        <div className="mx-auto max-w-7xl">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-9 bg-background"
              placeholder={t.teachers.searchPlaceholder}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              data-ocid="teachers.search_input"
            />
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-8 px-4 bg-background min-h-[50vh]">
        <div className="mx-auto max-w-7xl">
          {isLoading ? (
            <div className="space-y-3" data-ocid="teachers.loading_state">
              {["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => (
                <Skeleton key={k} className="h-14 w-full rounded-lg" />
              ))}
            </div>
          ) : sorted.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 text-center"
              data-ocid="teachers.empty_state"
            >
              <GraduationCap className="h-14 w-14 text-muted-foreground/30 mb-4" />
              <p className="font-display text-lg text-muted-foreground">
                {t.teachers.noTeachers}
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-xl border border-border shadow-subtle">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left px-5 py-3.5">
                        <SortHeader label={t.name} colKey="name" />
                      </th>
                      <th className="text-left px-5 py-3.5 hidden sm:table-cell">
                        <SortHeader
                          label={t.teachers.subject}
                          colKey="subject"
                        />
                      </th>
                      <th className="text-left px-5 py-3.5 hidden md:table-cell">
                        <SortHeader
                          label={t.teachers.qualification}
                          colKey="qualification"
                        />
                      </th>
                      <th className="text-left px-5 py-3.5 hidden lg:table-cell">
                        {t.teachers.contact}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {paginated.map((teacher, i) => (
                      <tr
                        key={teacher.id.toString()}
                        onClick={() => setSelectedTeacher(teacher)}
                        onKeyDown={(e) =>
                          (e.key === "Enter" || e.key === " ") &&
                          setSelectedTeacher(teacher)
                        }
                        tabIndex={0}
                        className="bg-card hover:bg-accent/50 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        data-ocid={`teachers.item.${i + 1}`}
                      >
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary font-display font-bold text-sm">
                              {teacher.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-foreground truncate">
                                {teacher.name}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {teacher.nameBengali}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3.5 hidden sm:table-cell">
                          <p className="text-foreground">
                            {language === "bn"
                              ? teacher.subjectBengali
                              : teacher.subject}
                          </p>
                          {language !== "bn" && (
                            <p className="text-xs text-muted-foreground">
                              {teacher.subjectBengali}
                            </p>
                          )}
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell text-muted-foreground">
                          {teacher.qualification}
                        </td>
                        <td className="px-5 py-3.5 hidden lg:table-cell">
                          <div className="space-y-1">
                            {teacher.email && (
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Mail className="h-3 w-3 shrink-0" />
                                <span className="truncate max-w-[180px]">
                                  {teacher.email}
                                </span>
                              </div>
                            )}
                            {teacher.phone && (
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Phone className="h-3 w-3 shrink-0" />
                                <span>{teacher.phone}</span>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-5 px-1">
                  <p className="text-sm text-muted-foreground">
                    {language === "bn"
                      ? `${sorted.length} জনের মধ্যে ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, sorted.length)}`
                      : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, sorted.length)} of ${sorted.length}`}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page === 1}
                      onClick={() => setPage((p) => p - 1)}
                      data-ocid="teachers.pagination_prev"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="flex items-center text-sm px-3 text-muted-foreground">
                      {page} / {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page === totalPages}
                      onClick={() => setPage((p) => p + 1)}
                      data-ocid="teachers.pagination_next"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Detail Sheet */}
      <Sheet
        open={!!selectedTeacher}
        onOpenChange={(open) => !open && setSelectedTeacher(null)}
      >
        <SheetContent
          side="right"
          className="w-full sm:max-w-md overflow-y-auto"
          data-ocid="teachers.dialog"
        >
          {selectedTeacher && (
            <>
              <SheetHeader className="pb-4 border-b border-border">
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary font-display font-bold text-2xl shrink-0">
                    {selectedTeacher.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <SheetTitle className="font-display text-xl text-foreground leading-tight">
                      {selectedTeacher.name}
                    </SheetTitle>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {selectedTeacher.nameBengali}
                    </p>
                  </div>
                </div>
              </SheetHeader>

              <div className="py-5 space-y-5">
                {/* Subject */}
                <DetailRow
                  icon={<GraduationCap className="h-4 w-4" />}
                  label={t.teachers.subject}
                  value={selectedTeacher.subject}
                  valueBn={selectedTeacher.subjectBengali}
                />

                {/* Qualification */}
                <DetailRow
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  label={t.teachers.qualification}
                  value={selectedTeacher.qualification}
                />

                {/* Email */}
                {selectedTeacher.email && (
                  <DetailRow
                    icon={<Mail className="h-4 w-4" />}
                    label={t.contact.email}
                    value={
                      <a
                        href={`mailto:${selectedTeacher.email}`}
                        className="text-primary hover:underline break-all"
                      >
                        {selectedTeacher.email}
                      </a>
                    }
                  />
                )}

                {/* Phone */}
                {selectedTeacher.phone && (
                  <DetailRow
                    icon={<Phone className="h-4 w-4" />}
                    label={t.contact.phone}
                    value={
                      <a
                        href={`tel:${selectedTeacher.phone}`}
                        className="text-primary hover:underline"
                      >
                        {selectedTeacher.phone}
                      </a>
                    }
                  />
                )}
              </div>

              <div className="pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedTeacher(null)}
                  data-ocid="teachers.close_button"
                >
                  {t.close}
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
  valueBn,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  valueBn?: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 mt-0.5 text-accent-foreground bg-accent rounded-md p-1.5 h-7 w-7 flex items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
          {label}
        </p>
        <p className="text-foreground text-sm break-words">{value}</p>
        {valueBn && (
          <p className="text-xs text-muted-foreground mt-0.5">{valueBn}</p>
        )}
      </div>
    </div>
  );
}
