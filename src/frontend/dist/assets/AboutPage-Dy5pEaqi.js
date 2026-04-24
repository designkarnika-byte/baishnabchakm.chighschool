import { a as createLucideIcon, u as useLanguage, j as jsxRuntimeExports, M as MapPin } from "./index-WwsKOO2D.js";
import { B as BookOpen, A as Award } from "./book-open-CXfXrlYj.js";
import { G as GraduationCap } from "./graduation-cap-D2osCjoF.js";
import { U as Users } from "./users-D-y28oUx.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
];
const Building = createLucideIcon("building", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
const FACULTY = [
  {
    nameEn: "Sunil Kumar Mondal",
    nameBn: "সুনীল কুমার মণ্ডল",
    subjectEn: "Headmaster",
    subjectBn: "প্রধান শিক্ষক",
    expEn: "30+ yrs",
    expBn: "৩০+ বছর"
  },
  {
    nameEn: "Anita Roy",
    nameBn: "অনিতা রায়",
    subjectEn: "Mathematics",
    subjectBn: "গণিত",
    expEn: "22 yrs",
    expBn: "২২ বছর"
  },
  {
    nameEn: "Biswanath Ghosh",
    nameBn: "বিশ্বনাথ ঘোষ",
    subjectEn: "Physics & Chemistry",
    subjectBn: "পদার্থবিজ্ঞান ও রসায়ন",
    expEn: "18 yrs",
    expBn: "১৮ বছর"
  },
  {
    nameEn: "Rekha Dutta",
    nameBn: "রেখা দত্ত",
    subjectEn: "Bengali Literature",
    subjectBn: "বাংলা সাহিত্য",
    expEn: "15 yrs",
    expBn: "১৫ বছর"
  },
  {
    nameEn: "Abhijit Sarkar",
    nameBn: "অভিজিৎ সরকার",
    subjectEn: "History & Geography",
    subjectBn: "ইতিহাস ও ভূগোল",
    expEn: "20 yrs",
    expBn: "২০ বছর"
  },
  {
    nameEn: "Puja Banerjee",
    nameBn: "পূজা বন্দ্যোপাধ্যায়",
    subjectEn: "English",
    subjectBn: "ইংরেজি",
    expEn: "12 yrs",
    expBn: "১২ বছর"
  }
];
function AboutPage() {
  const { t, language } = useLanguage();
  const facilities = language === "bn" ? [
    "বিজ্ঞান গবেষণাগার",
    "কম্পিউটার ল্যাব",
    "গ্রন্থাগার",
    "খেলার মাঠ",
    "সভাঘর",
    "মিড-ডে মিল কিচেন"
  ] : [
    "Science Laboratory",
    "Computer Lab",
    "Library",
    "Sports Ground",
    "Assembly Hall",
    "Mid-Day Meal Kitchen"
  ];
  const achievements = language === "bn" ? [
    "২০২৩ সালে মাধ্যমিকে ৯৮% পাশের হার",
    "রাজ্যস্তরের বিজ্ঞান অলিম্পিয়াডে প্রথম",
    "জাতীয় খেলাধুলায় একাধিক পুরস্কার",
    "সেরা বিদ্যালয় পুরস্কার, পশ্চিমবঙ্গ সরকার ২০২২"
  ] : [
    "98% pass rate in Board Examinations 2023",
    "First Prize at State Science Olympiad",
    "Multiple National Level Sports Awards",
    "Best School Award, Government of West Bengal 2022"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-semibold", children: t.about.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 opacity-80", children: t.schoolNameBengali })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-primary" }),
          t.about.history
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: t.about.historyText }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mt-4", children: [
          { label: t.about.affiliatedBoard, value: t.about.boardName },
          { label: t.about.classesOffered, value: t.about.classRange },
          { label: t.about.medium, value: t.about.mediumName },
          {
            label: t.established,
            value: language === "bn" ? "১৯২৮" : "1928"
          }
        ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-lg bg-muted/40 p-3 border border-border",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mt-0.5 text-sm", children: value })
            ]
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-primary" }),
          t.about.mission
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary/5 border border-primary/15 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider mb-1", children: language === "bn" ? "লক্ষ্য" : "Mission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: t.about.missionText })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-accent/10 border border-accent/20 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-accent-foreground uppercase tracking-wider mb-1", children: language === "bn" ? "দৃষ্টিভঙ্গি" : "Vision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: t.about.visionText })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-muted/30 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-5 w-5 text-primary" }),
        t.about.facilities
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: facilities.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-xl bg-card border border-border p-4 text-center shadow-subtle hover:shadow-elevated transition-smooth",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: item })
        },
        item
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-primary" }),
        t.about.achievements
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: achievements.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-3 rounded-lg bg-muted/40 border border-border p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-accent/20 text-accent-foreground text-sm font-bold", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-sm", children: item })
          ]
        },
        item.slice(0, 30)
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-muted/30 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-primary" }),
        language === "bn" ? "শিক্ষক পরিচিতি" : "Faculty Overview"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: FACULTY.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl bg-card border border-border p-5 shadow-subtle hover:shadow-elevated transition-smooth",
          "data-ocid": `about.faculty.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm truncate", children: language === "bn" ? f.nameBn : f.nameEn }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium", children: language === "bn" ? f.subjectBn : f.subjectEn })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3 w-3 text-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language === "bn" ? `অভিজ্ঞতা: ${f.expBn}` : `Experience: ${f.expEn}` })
            ] })
          ]
        },
        f.nameEn
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
        language === "bn" ? "আমাদের অবস্থান" : "Our Location"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 border border-border p-5 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground font-display", children: language === "bn" ? "বৈষ্ণবচক মহেশ চন্দ্র উচ্চ বিদ্যালয়" : "Baishnabchak M.C. High School" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: language === "bn" ? "এম.সি হাই স্কুল, বৈষ্ণবচক, কলকাতা, পশ্চিমবঙ্গ ৭২১১৫৮" : "M.C HIGH SCHOOL, Baishnabchak, Kolkata, West Bengal 721158" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: language === "bn" ? "সময়: " : "Hours: " }),
                language === "bn" ? "সকাল ১০:৪৫ – বিকাল ৩:৩০ (সোম–শুক্র)" : "10:45 AM – 3:30 PM (Mon–Fri)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: language === "bn" ? "ফোন: " : "Phone: " }),
                "+91 9123386590"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://maps.google.com/?q=Baishnabchak+MC+High+School+West+Bengal+721158",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
                language === "bn" ? "Google Maps-এ দেখুন" : "Open in Google Maps"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden border border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            title: language === "bn" ? "বিদ্যালয়ের অবস্থান" : "School Location Map",
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1!2d87.9!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b0000000001%3A0x0!2sBaishnabchak%2C+West+Bengal+721158!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            width: "100%",
            height: "280",
            style: { border: 0 },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold mb-8", children: t.home.schoolValues }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
        {
          icon: BookOpen,
          en: t.home.values.academic,
          bn: t.home.values.academicBn
        },
        {
          icon: Award,
          en: t.home.values.holistic,
          bn: t.home.values.holisticBn
        },
        {
          icon: Users,
          en: t.home.values.community,
          bn: t.home.values.communityBn
        }
      ].map(({ icon: Icon, en: enVal, bn: bnVal }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl bg-primary-foreground/10 p-6 space-y-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8 mx-auto text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: enVal }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 text-sm", children: bnVal })
          ]
        },
        enVal
      )) })
    ] }) })
  ] });
}
export {
  AboutPage as default
};
