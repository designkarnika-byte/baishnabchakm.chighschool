import { j as jsxRuntimeExports, c as cn, u as useLanguage, L as Link, B as Button, C as Clock, M as MapPin } from "./index-WwsKOO2D.js";
import { S as Skeleton } from "./skeleton-BEJ5jy9a.js";
import { u as useNotices, P as Pin } from "./useNotices-BEp5IRvM.js";
import { B as BookOpen, A as Award } from "./book-open-CXfXrlYj.js";
import { U as Users } from "./users-D-y28oUx.js";
import { C as ChevronRight } from "./chevron-right-B7ar-p9d.js";
import "./useMutation-DcdiYfoy.js";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const PRINCIPAL_MESSAGE = {
  en: "At Baishnabchak M.C. High School, we believe that education is not merely the acquisition of knowledge, but the development of a complete human being. Our dedicated faculty and supportive environment nurture each student's unique potential while instilling values of discipline, integrity, and compassion. We are proud to continue our legacy of academic excellence that has shaped generations of leaders and citizens in this community.",
  bn: "বৈষ্ণবচক মহেশ চন্দ্র উচ্চ বিদ্যালয়ে আমরা বিশ্বাস করি শিক্ষা শুধু জ্ঞান অর্জন নয় — একজন সম্পূর্ণ মানুষ গড়ার প্রক্রিয়া। আমাদের নিবেদিতপ্রাণ শিক্ষকমণ্ডলী ও সহায়ক পরিবেশ প্রতিটি শিক্ষার্থীর অনন্য সম্ভাবনাকে পরিপুষ্ট করে, পাশাপাশি শৃঙ্খলা, সততা ও সহমর্মিতার মূল্যবোধ জাগিয়ে তোলে।"
};
const STATS = [
  { en: "Founded", bn: "প্রতিষ্ঠিত", value: "Est. 1928" },
  { en: "Students", bn: "শিক্ষার্থী", value: "500+" },
  { en: "Teachers", bn: "শিক্ষক", value: "20+" },
  { en: "Location", bn: "অবস্থান", value: "Baishnabchak" }
];
const VALUES = [
  {
    icon: BookOpen,
    en: "Academic Excellence",
    bn: "শিক্ষায় উৎকর্ষ"
  },
  {
    icon: Award,
    en: "Holistic Growth",
    bn: "সামগ্রিক বিকাশ"
  },
  {
    icon: Users,
    en: "Community Engagement",
    bn: "সমাজবদ্ধতা"
  }
];
const CATEGORY_COLORS = {
  Academic: "bg-primary/10 text-primary border-primary/20",
  General: "bg-muted text-muted-foreground border-border",
  Holiday: "bg-accent/15 text-accent-foreground border-accent/25",
  Alert: "bg-destructive/10 text-destructive border-destructive/20",
  Other: "bg-secondary text-secondary-foreground border-border"
};
function CategoryBadge({ category }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[category] ?? CATEGORY_COLORS.Other}`,
      children: category
    }
  );
}
function NoticeSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "home.notices_loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-lg" }, i)) });
}
function HomePage() {
  const { t, language } = useLanguage();
  const { data: notices, isLoading } = useNotices();
  const pinnedNotices = (notices == null ? void 0 : notices.filter((n) => n.pinned).slice(0, 3)) ?? [];
  const latestNotices = (notices == null ? void 0 : notices.filter((n) => !n.pinned).slice(0, 5)) ?? [];
  const formatDate = (ts) => new Date(Number(ts)).toLocaleDateString(
    language === "bn" ? "bn-IN" : "en-IN",
    { day: "numeric", month: "short", year: "numeric" }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center space-y-5 entrance-slide-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest opacity-70 font-semibold", children: t.established }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl font-semibold leading-tight text-balance", children: t.schoolNameBengali }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl sm:text-2xl opacity-90 font-medium tracking-wide", children: t.schoolNameEnglish }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg sm:text-xl opacity-75 italic", children: t.schoolTaglineBengali }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70 max-w-xl mx-auto", children: t.home.heroSubtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3 pt-2", children: VALUES.map(({ icon: Icon, en: enVal, bn: bnVal }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm entrance-slide-up",
          style: { animationDelay: `${i * 0.1}s` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-gold shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: language === "bn" ? bnVal : enVal })
          ]
        },
        enVal
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center flex-wrap pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notices", "data-ocid": "home.notices_cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-elevated", children: t.home.pinnedNotices }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", "data-ocid": "home.admissions_cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent",
            children: t.admissions.applyNow
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-teal-deep text-primary-foreground py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: STATS.map(({ en: enLabel, bn: bnLabel, value }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center entrance-slide-up",
        style: { animationDelay: `${i * 0.07}s` },
        "data-ocid": `home.stat.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-gold", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80 mt-0.5", children: language === "bn" ? bnLabel : enLabel })
        ]
      },
      enLabel
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.pinned_notices.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-4 w-4 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-semibold text-foreground", children: [
              t.home.pinnedNotices,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm font-normal opacity-55", children: [
                "(",
                language === "bn" ? "বিজ্ঞপ্তি" : "Notices",
                ")"
              ] })
            ] })
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(NoticeSkeleton, {}) : pinnedNotices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm text-muted-foreground",
              "data-ocid": "home.pinned_notices.empty_state",
              children: t.notices.noNotices
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pinnedNotices.map((notice, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/notices/$id",
              params: { id: notice.id.toString() },
              "data-ocid": `home.pinned_notice.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notice-pinned rounded-lg p-4 hover:shadow-elevated transition-smooth group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: notice.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatDate(notice.createdAt) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-1", children: notice.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mt-0.5", children: notice.content }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-gold font-medium mt-2 group-hover:underline", children: [
                  t.notices.readMore,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
                ] })
              ] }) }) })
            },
            notice.id.toString()
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.latest_notices.section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: t.home.latestNotices }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/notices",
                "data-ocid": "home.view_all_notices_link",
                className: "text-sm text-primary hover:underline transition-smooth flex items-center gap-1",
                children: [
                  t.home.viewAll,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full rounded-lg" }, i)) }) : latestNotices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm text-muted-foreground",
              "data-ocid": "home.latest_notices.empty_state",
              children: t.notices.noNotices
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: latestNotices.map((notice, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/notices/$id",
              params: { id: notice.id.toString() },
              "data-ocid": `home.latest_notice.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hover:shadow-elevated transition-smooth group cursor-pointer h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: notice.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatDate(notice.createdAt) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2 flex-1", children: notice.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-1.5", children: notice.content }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-primary font-medium mt-3 group-hover:underline", children: [
                  t.notices.readMore,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" })
                ] })
              ] }) })
            },
            notice.id.toString()
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-5 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold mb-3 text-foreground", children: t.home.principalMessage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-6", children: language === "bn" ? PRINCIPAL_MESSAGE.bn : PRINCIPAL_MESSAGE.en }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-3 text-foreground", children: language === "bn" ? "— প্রধান শিক্ষক" : "— The Principal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: t.schoolNameEnglish })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-xl p-5 border border-border",
            "data-ocid": "home.operating_hours.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-gold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold text-foreground", children: language === "bn" ? "বিদ্যালয়ের সময়" : "School Hours" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: language === "bn" ? "সোম–বৃহস্পতি" : "Mon–Thu" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "10:45 AM – 4:00 PM" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: language === "bn" ? "শুক্রবার" : "Friday" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "10:45 AM – 3:30 PM" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: language === "bn" ? "রবিবার" : "Sunday" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive font-medium", children: language === "bn" ? "বন্ধ" : "Closed" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 mt-4 pt-4 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-gold shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Baishnabchak, Kolkata, West Bengal 721158" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
          {
            num: "Est. 1928",
            label: language === "bn" ? "প্রতিষ্ঠা সাল" : "Est. Year"
          },
          {
            num: "500+",
            label: language === "bn" ? "শিক্ষার্থী" : "Students"
          },
          {
            num: "20+",
            label: language === "bn" ? "শিক্ষক" : "Teachers"
          },
          {
            num: "98%",
            label: language === "bn" ? "পাশের হার" : "Pass Rate"
          }
        ].map(({ num, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card rounded-lg p-3 text-center border border-border",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-primary", children: num }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label })
            ]
          },
          label
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-10 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: language === "bn" ? "আজই যোগ দিন আমাদের সাথে" : "Join Our School Community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: language === "bn" ? "ভর্তির তথ্য ও যোগাযোগের জন্য আমাদের সাথে যোগাযোগ করুন।" : "Get in touch to learn about admissions and everything our school offers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "home.bottom_admissions_cta",
            className: "bg-primary",
            children: t.admissions.title
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", "data-ocid": "home.contact_cta", children: t.contact.title }) })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as default
};
