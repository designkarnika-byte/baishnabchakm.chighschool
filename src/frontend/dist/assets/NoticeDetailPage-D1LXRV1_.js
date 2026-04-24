import { a as createLucideIcon, g as useParams, u as useLanguage, j as jsxRuntimeExports, L as Link, B as Button } from "./index-WwsKOO2D.js";
import { S as Skeleton } from "./skeleton-BEJ5jy9a.js";
import { a as useNoticeById, P as Pin } from "./useNotices-BEp5IRvM.js";
import "./useMutation-DcdiYfoy.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function NoticeDetailPage() {
  const { id } = useParams({ from: "/notices/$id" });
  const { t, language } = useLanguage();
  const { data: notice, isLoading } = useNoticeById(BigInt(id));
  const formatDate = (ts) => new Date(Number(ts)).toLocaleDateString(
    language === "bn" ? "bn-IN" : "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );
  const categoryColors = {
    Academic: "bg-primary/10 text-primary border-primary/20",
    General: "bg-muted text-muted-foreground border-border",
    Holiday: "bg-accent/15 text-accent-foreground border-accent/25",
    Alert: "bg-destructive/10 text-destructive border-destructive/20",
    Other: "bg-secondary text-secondary-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "notice_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notices", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "ghost",
        size: "sm",
        "data-ocid": "notice_detail.back_button",
        className: "text-primary-foreground hover:bg-primary-foreground/10 mb-3 -ml-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }),
          t.back,
          " — ",
          t.notices.title
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "notice_detail.loading_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full" })
    ] }) : !notice ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-20 text-muted-foreground",
        "data-ocid": "notice_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t.error }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notices", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "mt-4", children: t.back }) })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${categoryColors[notice.category] ?? categoryColors.Other}`,
              children: language === "bn" ? t.notices.categories[notice.category] : notice.category
            }
          ),
          notice.pinned && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-gold font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-3 w-3" }),
            t.notices.pinned
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground leading-tight", children: notice.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
            t.notices.postedOn,
            ": ",
            formatDate(notice.createdAt)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3" }),
            language === "bn" ? "কর্তৃপক্ষ" : "School Authority"
          ] })
        ] })
      ] }),
      notice.pinned && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "notice-pinned rounded-lg p-1", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-sm max-w-none rounded-xl bg-card border border-border p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed whitespace-pre-wrap", children: notice.content }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/notices", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          "data-ocid": "notice_detail.back_to_notices_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }),
            t.back
          ]
        }
      ) }) })
    ] }) }) })
  ] });
}
export {
  NoticeDetailPage as default
};
