import { a as createLucideIcon, u as useLanguage, r as reactExports, j as jsxRuntimeExports, B as Button, d as Mail } from "./index-WwsKOO2D.js";
import { B as Badge } from "./index-CroJg0T4.js";
import { I as Input } from "./input-C1VjvcCu.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle, A as ArrowUpDown } from "./sheet-B-GeYISQ.js";
import { S as Skeleton } from "./skeleton-BEJ5jy9a.js";
import { u as useStudents } from "./useStudents-B3ods1Sn.js";
import { U as Users } from "./users-D-y28oUx.js";
import { S as Search, C as ChevronLeft } from "./search-BZsdTu_B.js";
import { C as ChevronRight } from "./chevron-right-B7ar-p9d.js";
import "./Combination-D_jrZvLo.js";
import "./useMutation-DcdiYfoy.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode);
const PAGE_SIZE = 30;
const CLASS_ORDER = ["V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
function classRank(c) {
  const i = CLASS_ORDER.indexOf(c);
  return i === -1 ? 99 : i;
}
function StudentsPage() {
  const { t, language } = useLanguage();
  const { data: students, isLoading } = useStudents();
  const [search, setSearch] = reactExports.useState("");
  const [sortKey, setSortKey] = reactExports.useState("rollNumber");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [page, setPage] = reactExports.useState(1);
  const [selectedStudent, setSelectedStudent] = reactExports.useState(null);
  const [classFilter, setClassFilter] = reactExports.useState("all");
  const availableClasses = reactExports.useMemo(() => {
    const classes = Array.from(
      new Set((students ?? []).map((s) => s.class_))
    ).sort((a, b) => classRank(a) - classRank(b));
    return classes;
  }, [students]);
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  };
  const filtered = reactExports.useMemo(() => {
    const q = search.toLowerCase();
    return (students ?? []).filter(
      (s) => (classFilter === "all" || s.class_ === classFilter) && (q === "" || s.name.toLowerCase().includes(q) || s.nameBengali.includes(search) || s.rollNumber.toLowerCase().includes(q) || s.class_.toLowerCase().includes(q))
    );
  }, [students, search, classFilter]);
  const sorted = reactExports.useMemo(() => {
    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "name") {
        cmp = (language === "bn" ? a.nameBengali : a.name).localeCompare(
          language === "bn" ? b.nameBengali : b.name
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
    colKey
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => handleSort(colKey),
      className: "flex items-center gap-1 font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200",
      "data-ocid": `students.sort_${colKey}`,
      children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArrowUpDown,
          {
            className: `h-3.5 w-3.5 ${sortKey === colKey ? "opacity-100" : "opacity-50"}`
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "students.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-7 w-7 opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-semibold", children: t.students.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 opacity-70 text-sm", children: t.schoolNameEnglish }),
      !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "secondary",
          className: "mt-3 bg-primary-foreground/20 text-primary-foreground border-0",
          children: [
            filtered.length,
            " ",
            language === "bn" ? "জন ছাত্রছাত্রী" : "students"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 px-4 bg-card border-b border-border sticky top-0 z-10 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "pl-9 bg-background",
            placeholder: t.students.searchPlaceholder,
            value: search,
            onChange: (e) => {
              setSearch(e.target.value);
              setPage(1);
            },
            "data-ocid": "students.search_input"
          }
        )
      ] }),
      availableClasses.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setClassFilter("all");
              setPage(1);
            },
            className: `px-3 py-1.5 text-xs rounded-full border font-medium transition-colors duration-200 ${classFilter === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"}`,
            "data-ocid": "students.filter.tab",
            children: language === "bn" ? "সব শ্রেণি" : "All Classes"
          }
        ),
        availableClasses.map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setClassFilter(cls);
              setPage(1);
            },
            className: `px-3 py-1.5 text-xs rounded-full border font-medium transition-colors duration-200 ${classFilter === cls ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"}`,
            "data-ocid": `students.class_filter.${cls}`,
            children: language === "bn" ? `শ্রেণি ${cls}` : `Class ${cls}`
          },
          cls
        ))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 px-4 bg-background min-h-[50vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "students.loading_state", children: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full rounded-lg" }, k)) }) : sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "students.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-14 w-14 text-muted-foreground/30 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-muted-foreground", children: t.students.noStudents })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: t.name, colKey: "name" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: t.students.class, colKey: "class_" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: t.students.section,
              colKey: "section"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: t.students.roll,
              colKey: "rollNumber"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5 hidden lg:table-cell text-primary-foreground font-semibold", children: t.contact.email })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: paginated.map((student, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            onClick: () => setSelectedStudent(student),
            onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && setSelectedStudent(student),
            tabIndex: 0,
            className: "bg-card hover:bg-accent/50 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            "data-ocid": `students.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: student.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: student.nameBengali })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium", children: language === "bn" ? `শ্রেণি ${student.class_}` : `Class ${student.class_}` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 hidden sm:table-cell text-muted-foreground", children: student.section }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 hidden md:table-cell font-mono text-xs text-muted-foreground", children: student.rollNumber }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 hidden lg:table-cell text-muted-foreground text-xs", children: student.email || "—" })
            ]
          },
          student.id.toString()
        )) })
      ] }) }),
      totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-5 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: language === "bn" ? `${sorted.length} জনের মধ্যে ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, sorted.length)}` : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, sorted.length)} of ${sorted.length}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              disabled: page === 1,
              onClick: () => setPage((p) => p - 1),
              "data-ocid": "students.pagination_prev",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground px-2", children: [
            page,
            " / ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              disabled: page === totalPages,
              onClick: () => setPage((p) => p + 1),
              "data-ocid": "students.pagination_next",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sheet,
      {
        open: !!selectedStudent,
        onOpenChange: (open) => !open && setSelectedStudent(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SheetContent,
          {
            side: "right",
            className: "w-full sm:max-w-md overflow-y-auto",
            "data-ocid": "students.dialog",
            children: selectedStudent && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary font-display font-bold text-2xl shrink-0", children: selectedStudent.name.charAt(0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display text-xl text-foreground leading-tight", children: selectedStudent.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: selectedStudent.nameBengali })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StudentDetailRow,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
                    label: t.students.class,
                    value: language === "bn" ? `শ্রেণি ${selectedStudent.class_}` : `Class ${selectedStudent.class_}`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StudentDetailRow,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          }
                        )
                      }
                    ),
                    label: t.students.section,
                    value: selectedStudent.section
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StudentDetailRow,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-4 w-4" }),
                    label: t.students.roll,
                    value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm", children: selectedStudent.rollNumber })
                  }
                ),
                selectedStudent.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StudentDetailRow,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                    label: t.contact.email,
                    value: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `mailto:${selectedStudent.email}`,
                        className: "text-primary hover:underline break-all text-sm",
                        children: selectedStudent.email
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "w-full",
                  onClick: () => setSelectedStudent(null),
                  "data-ocid": "students.close_button",
                  children: t.close
                }
              ) })
            ] })
          }
        )
      }
    )
  ] });
}
function StudentDetailRow({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 mt-0.5 text-accent-foreground bg-accent rounded-md p-1.5 h-7 w-7 flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm break-words", children: value })
    ] })
  ] });
}
export {
  StudentsPage as default
};
