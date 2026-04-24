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
  Hash,
  Mail,
  Search,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useStudents } from "../hooks/useStudents";
import type { Student } from "../types";

type SortKey = "name" | "class_" | "section" | "rollNumber";
type SortDir = "asc" | "desc";

const PAGE_SIZE = 30;

const CLASS_ORDER = ["V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

function classRank(c: string) {
  const i = CLASS_ORDER.indexOf(c);
  return i === -1 ? 99 : i;
}

export default function StudentsPage() {
  const { t, language } = useLanguage();
  const { data: students, isLoading } = useStudents();

  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("rollNumber");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [classFilter, setClassFilter] = useState<string>("all");

  const availableClasses = useMemo(() => {
    const classes = Array.from(
      new Set((students ?? []).map((s) => s.class_)),
    ).sort((a, b) => classRank(a) - classRank(b));
    return classes;
  }, [students]);

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
    return (students ?? []).filter(
      (s) =>
        (classFilter === "all" || s.class_ === classFilter) &&
        (q === "" ||
          s.name.toLowerCase().includes(q) ||
          s.nameBengali.includes(search) ||
          s.rollNumber.toLowerCase().includes(q) ||
          s.class_.toLowerCase().includes(q)),
    );
  }, [students, search, classFilter]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "name") {
        cmp = (language === "bn" ? a.nameBengali : a.name).localeCompare(
          language === "bn" ? b.nameBengali : b.name,
        );
      } else if (sortKey === "class_") {
        cmp = classRank(a.class_) - classRank(b.class_);
      } else if (sortKey === "section") {
        cmp = a.section.localeCompare(b.section);
      } else {
        cmp = a.rollNumber.localeCompare(b.rollNumber);
      }
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
      className="flex items-center gap-1 font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200"
      data-ocid={`students.sort_${colKey}`}
    >
      {label}
      <ArrowUpDown
        className={`h-3.5 w-3.5 ${sortKey === colKey ? "opacity-100" : "opacity-50"}`}
      />
    </button>
  );

  return (
    <div data-ocid="students.page">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-1">
            <Users className="h-7 w-7 opacity-80" />
            <h1 className="font-display text-3xl sm:text-4xl font-semibold">
              {t.students.title}
            </h1>
          </div>
          <p className="mt-1 opacity-70 text-sm">{t.schoolNameEnglish}</p>
          {!isLoading && (
            <Badge
              variant="secondary"
              className="mt-3 bg-primary-foreground/20 text-primary-foreground border-0"
            >
              {filtered.length} {language === "bn" ? "জন ছাত্রছাত্রী" : "students"}
            </Badge>
          )}
        </div>
      </section>

      {/* Search + Class Filter */}
      <section className="py-4 px-4 bg-card border-b border-border sticky top-0 z-10 shadow-subtle">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row gap-3">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-9 bg-background"
              placeholder={t.students.searchPlaceholder}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              data-ocid="students.search_input"
            />
          </div>

          {availableClasses.length > 1 && (
            <div className="flex flex-wrap gap-2 items-center">
              <button
                type="button"
                onClick={() => {
                  setClassFilter("all");
                  setPage(1);
                }}
                className={`px-3 py-1.5 text-xs rounded-full border font-medium transition-colors duration-200 ${
                  classFilter === "all"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
                data-ocid="students.filter.tab"
              >
                {language === "bn" ? "সব শ্রেণি" : "All Classes"}
              </button>
              {availableClasses.map((cls) => (
                <button
                  key={cls}
                  type="button"
                  onClick={() => {
                    setClassFilter(cls);
                    setPage(1);
                  }}
                  className={`px-3 py-1.5 text-xs rounded-full border font-medium transition-colors duration-200 ${
                    classFilter === cls
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                  data-ocid={`students.class_filter.${cls}`}
                >
                  {language === "bn" ? `শ্রেণি ${cls}` : `Class ${cls}`}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Table */}
      <section className="py-8 px-4 bg-background min-h-[50vh]">
        <div className="mx-auto max-w-7xl">
          {isLoading ? (
            <div className="space-y-3" data-ocid="students.loading_state">
              {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].map((k) => (
                <Skeleton key={k} className="h-14 w-full rounded-lg" />
              ))}
            </div>
          ) : sorted.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 text-center"
              data-ocid="students.empty_state"
            >
              <Users className="h-14 w-14 text-muted-foreground/30 mb-4" />
              <p className="font-display text-lg text-muted-foreground">
                {t.students.noStudents}
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
                      <th className="text-left px-5 py-3.5">
                        <SortHeader label={t.students.class} colKey="class_" />
                      </th>
                      <th className="text-left px-5 py-3.5 hidden sm:table-cell">
                        <SortHeader
                          label={t.students.section}
                          colKey="section"
                        />
                      </th>
                      <th className="text-left px-5 py-3.5 hidden md:table-cell">
                        <SortHeader
                          label={t.students.roll}
                          colKey="rollNumber"
                        />
                      </th>
                      <th className="text-left px-5 py-3.5 hidden lg:table-cell text-primary-foreground font-semibold">
                        {t.contact.email}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {paginated.map((student, i) => (
                      <tr
                        key={student.id.toString()}
                        onClick={() => setSelectedStudent(student)}
                        onKeyDown={(e) =>
                          (e.key === "Enter" || e.key === " ") &&
                          setSelectedStudent(student)
                        }
                        tabIndex={0}
                        className="bg-card hover:bg-accent/50 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        data-ocid={`students.item.${i + 1}`}
                      >
                        <td className="px-5 py-3.5">
                          <p className="font-medium text-foreground">
                            {student.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {student.nameBengali}
                          </p>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">
                            {language === "bn"
                              ? `শ্রেণি ${student.class_}`
                              : `Class ${student.class_}`}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 hidden sm:table-cell text-muted-foreground">
                          {student.section}
                        </td>
                        <td className="px-5 py-3.5 hidden md:table-cell font-mono text-xs text-muted-foreground">
                          {student.rollNumber}
                        </td>
                        <td className="px-5 py-3.5 hidden lg:table-cell text-muted-foreground text-xs">
                          {student.email || "—"}
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
                  <div className="flex gap-2 items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page === 1}
                      onClick={() => setPage((p) => p - 1)}
                      data-ocid="students.pagination_prev"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground px-2">
                      {page} / {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page === totalPages}
                      onClick={() => setPage((p) => p + 1)}
                      data-ocid="students.pagination_next"
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
        open={!!selectedStudent}
        onOpenChange={(open) => !open && setSelectedStudent(null)}
      >
        <SheetContent
          side="right"
          className="w-full sm:max-w-md overflow-y-auto"
          data-ocid="students.dialog"
        >
          {selectedStudent && (
            <>
              <SheetHeader className="pb-4 border-b border-border">
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary font-display font-bold text-2xl shrink-0">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <SheetTitle className="font-display text-xl text-foreground leading-tight">
                      {selectedStudent.name}
                    </SheetTitle>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {selectedStudent.nameBengali}
                    </p>
                  </div>
                </div>
              </SheetHeader>

              <div className="py-5 space-y-5">
                <StudentDetailRow
                  icon={<Users className="h-4 w-4" />}
                  label={t.students.class}
                  value={
                    language === "bn"
                      ? `শ্রেণি ${selectedStudent.class_}`
                      : `Class ${selectedStudent.class_}`
                  }
                />

                <StudentDetailRow
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  }
                  label={t.students.section}
                  value={selectedStudent.section}
                />

                <StudentDetailRow
                  icon={<Hash className="h-4 w-4" />}
                  label={t.students.roll}
                  value={
                    <span className="font-mono text-sm">
                      {selectedStudent.rollNumber}
                    </span>
                  }
                />

                {selectedStudent.email && (
                  <StudentDetailRow
                    icon={<Mail className="h-4 w-4" />}
                    label={t.contact.email}
                    value={
                      <a
                        href={`mailto:${selectedStudent.email}`}
                        className="text-primary hover:underline break-all text-sm"
                      >
                        {selectedStudent.email}
                      </a>
                    }
                  />
                )}
              </div>

              <div className="pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedStudent(null)}
                  data-ocid="students.close_button"
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

function StudentDetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
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
        <div className="text-foreground text-sm break-words">{value}</div>
      </div>
    </div>
  );
}
