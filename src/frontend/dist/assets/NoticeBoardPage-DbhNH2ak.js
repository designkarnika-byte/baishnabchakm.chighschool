import { u as useLanguage, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button } from "./index-WwsKOO2D.js";
import { I as Input } from "./input-C1VjvcCu.js";
import { S as Skeleton } from "./skeleton-BEJ5jy9a.js";
import { u as useNotices, P as Pin } from "./useNotices-BEp5IRvM.js";
import { S as Search, C as ChevronLeft } from "./search-BZsdTu_B.js";
import { C as ChevronRight } from "./chevron-right-B7ar-p9d.js";
import "./useMutation-DcdiYfoy.js";
const PAGE_SIZE = 10;
function CategoryBadge({
  category,
  lang
}) {
  const { t } = useLanguage();
  const colors = {
    Academic: "bg-primary/10 text-primary border-primary/20",
    General: "bg-muted text-muted-foreground border-border",
    Holiday: "bg-accent/15 text-accent-foreground border-accent/25",
    Alert: "bg-destructive/10 text-destructive border-destructive/20",
    Other: "bg-secondary text-secondary-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${colors[category]}`,
      children: lang === "bn" ? t.notices.categories[category] : category
    }
  );
}
function NoticeBoardPage() {
  const { t, language } = useLanguage();
  const { data: notices, isLoading } = useNotices();
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState(
    "all"
  );
  const [page, setPage] = reactExports.useState(1);
  const categories = [
    "all",
    "Academic",
    "General",
    "Holiday",
    "Alert",
    "Other"
  ];
  const filtered = (notices == null ? void 0 : notices.filter((n) => {
    const matchSearch = search === "" || n.title.toLowerCase().includes(search.toLowerCase()) || n.content.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "all" || n.category === activeCategory;
    return matchSearch && matchCat;
  })) ?? [];
  const pinned = filtered.filter((n) => n.pinned);
  const unpinned = filtered.filter((n) => !n.pinned);
  const totalPages = Math.max(1, Math.ceil(unpinned.length / PAGE_SIZE));
  const pagedUnpinned = unpinned.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
  const handleSearchChange = (v) => {
    setSearch(v);
    setPage(1);
  };
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };
  const formatDate = (ts) => new Date(Number(ts)).toLocaleDateString(
    language === "bn" ? "bn-IN" : "en-IN",
    { day: "numeric", month: "short", year: "numeric" }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "notices.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-semibold", children: t.notices.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 opacity-80 text-sm", children: language === "bn" ? "সর্বশেষ নোটিশ ও ঘোষণাসমূহ" : "Latest school announcements and notices" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 px-4 bg-card border-b border-border sticky top-0 z-10 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex flex-col sm:flex-row gap-3 items-start sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-72", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "pl-9",
            placeholder: language === "bn" ? "বিজ্ঞপ্তি খুঁজুন..." : "Search notices...",
            value: search,
            onChange: (e) => handleSearchChange(e.target.value),
            "data-ocid": "notices.search_input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => handleCategoryChange(cat),
          "data-ocid": `notices.filter.${cat}_tab`,
          className: `rounded-full px-3 py-1 text-xs font-medium border transition-smooth ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"}`,
          children: cat === "all" ? t.notices.categories.all : language === "bn" ? t.notices.categories[cat] : cat
        },
        cat
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-10", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "notices.loading_state", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full rounded-lg" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      pinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold text-foreground flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-4 w-4 text-gold" }),
          t.notices.pinned
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pinned.map((notice, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/notices/$id",
            params: { id: notice.id.toString() },
            "data-ocid": `notices.pinned.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notice-pinned rounded-lg p-5 hover:shadow-elevated transition-smooth group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CategoryBadge,
                    {
                      category: notice.category,
                      lang: language
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    t.notices.postedOn,
                    ":",
                    " ",
                    formatDate(notice.createdAt)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-smooth", children: notice.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: notice.content })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-smooth" })
            ] }) })
          },
          notice.id.toString()
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-foreground", children: t.notices.all }),
          unpinned.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: language === "bn" ? `মোট ${unpinned.length}টি বিজ্ঞপ্তি` : `${unpinned.length} notice${unpinned.length !== 1 ? "s" : ""}` })
        ] }),
        unpinned.length === 0 && pinned.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16 text-muted-foreground",
            "data-ocid": "notices.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-10 w-10 mx-auto mb-3 opacity-20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: t.notices.noNotices }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1 opacity-60", children: language === "bn" ? "এই মুহূর্তে কোনো বিজ্ঞপ্তি নেই" : "Check back later for updates" })
            ]
          }
        ) : unpinned.length === 0 ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pagedUnpinned.map((notice, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/notices/$id",
              params: { id: notice.id.toString() },
              "data-ocid": `notices.item.${(page - 1) * PAGE_SIZE + i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border bg-card p-5 hover:shadow-elevated transition-smooth group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CategoryBadge,
                      {
                        category: notice.category,
                        lang: language
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                      t.notices.postedOn,
                      ":",
                      " ",
                      formatDate(notice.createdAt)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-smooth", children: notice.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: notice.content })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-smooth" })
              ] }) })
            },
            notice.id.toString()
          )) }),
          totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-center gap-3 mt-8",
              "data-ocid": "notices.pagination",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setPage((p) => Math.max(1, p - 1)),
                    disabled: page === 1,
                    "data-ocid": "notices.pagination_prev",
                    "aria-label": language === "bn" ? "আগের পাতা" : "Previous page",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
                      language === "bn" ? "আগে" : "Prev"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: language === "bn" ? `পাতা ${page} / ${totalPages}` : `Page ${page} of ${totalPages}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
                    disabled: page === totalPages,
                    "data-ocid": "notices.pagination_next",
                    "aria-label": language === "bn" ? "পরের পাতা" : "Next page",
                    children: [
                      language === "bn" ? "পরে" : "Next",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  NoticeBoardPage as default
};
