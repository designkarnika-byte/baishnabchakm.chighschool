import { u as useLanguage, r as reactExports, j as jsxRuntimeExports, d as Mail, P as Phone, B as Button } from "./index-WwsKOO2D.js";
import { B as Badge } from "./index-CroJg0T4.js";
import { I as Input } from "./input-C1VjvcCu.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle, A as ArrowUpDown } from "./sheet-B-GeYISQ.js";
import { S as Skeleton } from "./skeleton-BEJ5jy9a.js";
import { u as useTeachers } from "./useTeachers-B3Pj5nbE.js";
import { G as GraduationCap } from "./graduation-cap-D2osCjoF.js";
import { S as Search, C as ChevronLeft } from "./search-BZsdTu_B.js";
import { C as ChevronRight } from "./chevron-right-B7ar-p9d.js";
import "./Combination-D_jrZvLo.js";
import "./useMutation-DcdiYfoy.js";
const PAGE_SIZE = 20;
function TeachersPage() {
  const { t, language } = useLanguage();
  const { data: teachers, isLoading } = useTeachers();
  const [search, setSearch] = reactExports.useState("");
  const [sortKey, setSortKey] = reactExports.useState("name");
  const [sortDir, setSortDir] = reactExports.useState("asc");
  const [page, setPage] = reactExports.useState(1);
  const [selectedTeacher, setSelectedTeacher] = reactExports.useState(null);
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
    return (teachers ?? []).filter(
      (tc) => q === "" || tc.name.toLowerCase().includes(q) || tc.nameBengali.includes(search) || tc.subject.toLowerCase().includes(q) || tc.subjectBengali.includes(search)
    );
  }, [teachers, search]);
  const sorted = reactExports.useMemo(() => {
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
    colKey
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => handleSort(colKey),
      className: "flex items-center gap-1 font-semibold text-foreground hover:text-primary transition-colors duration-200",
      "data-ocid": `teachers.sort_${colKey}`,
      children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArrowUpDown,
          {
            className: `h-3.5 w-3.5 ${sortKey === colKey ? "text-primary" : "text-muted-foreground"}`
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "teachers.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-7 w-7 opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-semibold", children: t.teachers.title })
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
            language === "bn" ? "জন শিক্ষক" : "teachers"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 px-4 bg-card border-b border-border sticky top-0 z-10 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-96", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "pl-9 bg-background",
          placeholder: t.teachers.searchPlaceholder,
          value: search,
          onChange: (e) => {
            setSearch(e.target.value);
            setPage(1);
          },
          "data-ocid": "teachers.search_input"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 px-4 bg-background min-h-[50vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "teachers.loading_state", children: ["a", "b", "c", "d", "e", "f", "g", "h"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full rounded-lg" }, k)) }) : sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "teachers.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-14 w-14 text-muted-foreground/30 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-muted-foreground", children: t.teachers.noTeachers })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortHeader, { label: t.name, colKey: "name" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: t.teachers.subject,
              colKey: "subject"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SortHeader,
            {
              label: t.teachers.qualification,
              colKey: "qualification"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3.5 hidden lg:table-cell", children: t.teachers.contact })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: paginated.map((teacher, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            onClick: () => setSelectedTeacher(teacher),
            onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && setSelectedTeacher(teacher),
            tabIndex: 0,
            className: "bg-card hover:bg-accent/50 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            "data-ocid": `teachers.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary font-display font-bold text-sm", children: teacher.name.charAt(0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: teacher.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: teacher.nameBengali })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3.5 hidden sm:table-cell", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: language === "bn" ? teacher.subjectBengali : teacher.subject }),
                language !== "bn" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: teacher.subjectBengali })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 hidden md:table-cell text-muted-foreground", children: teacher.qualification }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 hidden lg:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                teacher.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[180px]", children: teacher.email })
                ] }),
                teacher.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: teacher.phone })
                ] })
              ] }) })
            ]
          },
          teacher.id.toString()
        )) })
      ] }) }),
      totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-5 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: language === "bn" ? `${sorted.length} জনের মধ্যে ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, sorted.length)}` : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, sorted.length)} of ${sorted.length}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              disabled: page === 1,
              onClick: () => setPage((p) => p - 1),
              "data-ocid": "teachers.pagination_prev",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center text-sm px-3 text-muted-foreground", children: [
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
              "data-ocid": "teachers.pagination_next",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sheet,
      {
        open: !!selectedTeacher,
        onOpenChange: (open) => !open && setSelectedTeacher(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SheetContent,
          {
            side: "right",
            className: "w-full sm:max-w-md overflow-y-auto",
            "data-ocid": "teachers.dialog",
            children: selectedTeacher && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary font-display font-bold text-2xl shrink-0", children: selectedTeacher.name.charAt(0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display text-xl text-foreground leading-tight", children: selectedTeacher.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: selectedTeacher.nameBengali })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DetailRow,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4" }),
                    label: t.teachers.subject,
                    value: selectedTeacher.subject,
                    valueBn: selectedTeacher.subjectBengali
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DetailRow,
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
                            d: "M9 12l2 2 4-4M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          }
                        )
                      }
                    ),
                    label: t.teachers.qualification,
                    value: selectedTeacher.qualification
                  }
                ),
                selectedTeacher.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DetailRow,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                    label: t.contact.email,
                    value: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `mailto:${selectedTeacher.email}`,
                        className: "text-primary hover:underline break-all",
                        children: selectedTeacher.email
                      }
                    )
                  }
                ),
                selectedTeacher.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DetailRow,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                    label: t.contact.phone,
                    value: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `tel:${selectedTeacher.phone}`,
                        className: "text-primary hover:underline",
                        children: selectedTeacher.phone
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
                  onClick: () => setSelectedTeacher(null),
                  "data-ocid": "teachers.close_button",
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
function DetailRow({
  icon,
  label,
  value,
  valueBn
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 mt-0.5 text-accent-foreground bg-accent rounded-md p-1.5 h-7 w-7 flex items-center justify-center", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm break-words", children: value }),
      valueBn && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: valueBn })
    ] })
  ] });
}
export {
  TeachersPage as default
};
