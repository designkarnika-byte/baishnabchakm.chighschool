import { a as createLucideIcon, u as useLanguage, r as reactExports, j as jsxRuntimeExports, B as Button, L as Link, b as ue } from "./index-WwsKOO2D.js";
import { I as Input } from "./input-C1VjvcCu.js";
import { L as Label, T as Textarea } from "./textarea-C7aGJvmg.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-DUvy5ESt.js";
import { u as useSubmitContactMessage, S as Send } from "./useContact-Bgqiamyt.js";
import { G as GraduationCap } from "./graduation-cap-D2osCjoF.js";
import "./Combination-D_jrZvLo.js";
import "./useMutation-DcdiYfoy.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode);
const CLASSES = ["V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
const IMPORTANT_DATES_EN = [
  { label: "Form Distribution", date: "1st January 2024" },
  { label: "Last Date for Submission", date: "31st March 2024" },
  { label: "Entrance Assessment", date: "10th April 2024" },
  { label: "Result Announcement", date: "20th April 2024" },
  { label: "Enrollment Deadline", date: "30th April 2024" }
];
const IMPORTANT_DATES_BN = [
  { label: "ফর্ম বিতরণ", date: "১লা জানুয়ারি ২০২৪" },
  { label: "জমার শেষ তারিখ", date: "৩১শে মার্চ ২০২৪" },
  { label: "ভর্তি পরীক্ষা", date: "১০ই এপ্রিল ২০২৪" },
  { label: "ফলাফল ঘোষণা", date: "২০শে এপ্রিল ২০২৪" },
  { label: "নথিভুক্তির শেষ তারিখ", date: "৩০শে এপ্রিল ২০২৪" }
];
const ELIGIBILITY_EN = [
  "Candidate must have passed the previous class examination",
  "Age limit: 10–14 years for Class V–VIII, 14–17 years for Class IX–XII",
  "Students from recognized boards/schools are eligible",
  "No prior attendance at disqualified institutions"
];
const ELIGIBILITY_BN = [
  "প্রার্থীকে আগের শ্রেণির পরীক্ষায় উত্তীর্ণ হতে হবে",
  "বয়সসীমা: পঞ্চম–অষ্টম শ্রেণির জন্য ১০–১৪ বছর, নবম–দ্বাদশ শ্রেণির জন্য ১৪–১৭ বছর",
  "স্বীকৃত বোর্ড/বিদ্যালয়ের ছাত্রছাত্রীরা যোগ্য",
  "অযোগ্য প্রতিষ্ঠানে পূর্ববর্তী উপস্থিতি নেই"
];
function AdmissionsPage() {
  const { t, language } = useLanguage();
  const { mutateAsync, isPending } = useSubmitContactMessage();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    classApplying: "",
    message: ""
  });
  const [sent, setSent] = reactExports.useState(false);
  const importantDates = language === "bn" ? IMPORTANT_DATES_BN : IMPORTANT_DATES_EN;
  const eligibility = language === "bn" ? ELIGIBILITY_BN : ELIGIBILITY_EN;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const msg = `Class Applying: ${form.classApplying}
Phone: ${form.phone}

${form.message}`;
      await mutateAsync({ name: form.name, email: form.email, message: msg });
      ue.success(
        language === "bn" ? "আবেদন সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।" : "Enquiry submitted! We will get back to you soon."
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        classApplying: "",
        message: ""
      });
      setSent(true);
    } catch {
      ue.error(t.admin.error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "admissions.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-semibold", children: t.admissions.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 opacity-80", children: language === "bn" ? "২০২৪-২৫ শিক্ষাবর্ষের জন্য ভর্তি চলছে" : "Admissions open for Academic Year 2024-25" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-primary" }),
          t.admissions.process
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: t.admissions.processSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start gap-4",
            "data-ocid": `admissions.step.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground pt-1", children: step })
            ]
          },
          step.slice(0, 20)
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-primary" }),
          t.admissions.documents
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: t.admissions.documentsRequired.map((doc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 rounded-lg bg-card border border-border p-3",
            "data-ocid": `admissions.document.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: doc })
            ]
          },
          doc.slice(0, 20)
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-muted/30 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: t.admissions.eligibility }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: eligibility.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start gap-3 rounded-lg bg-card border border-border p-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent-foreground shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: item })
            ]
          },
          item.slice(0, 30)
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: language === "bn" ? "গুরুত্বপূর্ণ তারিখ" : "Important Dates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-card border border-border overflow-hidden shadow-subtle", children: importantDates.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between px-5 py-3 text-sm ${idx < importantDates.length - 1 ? "border-b border-border" : ""}`,
            "data-ocid": `admissions.date.item.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: item.date })
            ]
          },
          item.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-primary/5 border border-primary/15 p-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground mb-1", children: language === "bn" ? "অফিসের সময়" : "Office Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: language === "bn" ? "সকাল ১০:৪৫ – বিকাল ৩:৩০ (সোম–শুক্র)" : "10:45 AM – 3:30 PM (Mon–Fri)" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: t.admissions.openFor }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: CLASSES.map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-lg bg-card border border-border px-5 py-3 font-display font-semibold text-lg text-foreground shadow-subtle hover:shadow-elevated transition-smooth",
          children: language === "bn" ? `শ্রেণি ${cls}` : `Class ${cls}`
        },
        cls
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-muted/30 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-6 text-center", children: t.admissions.contactAdmissions }),
      sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl bg-primary/5 border border-primary/20 p-10 text-center space-y-3",
          "data-ocid": "admissions.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-10 w-10 text-primary mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: language === "bn" ? "আবেদন সফলভাবে পাঠানো হয়েছে!" : "Enquiry submitted successfully!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: language === "bn" ? "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।" : "We will contact you shortly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setSent(false), children: language === "bn" ? "নতুন আবেদন" : "New Enquiry" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "space-y-5 rounded-xl bg-card border border-border p-6 shadow-subtle",
          "data-ocid": "admissions.enquiry_form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adm-name", children: t.contact.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "adm-name",
                    "data-ocid": "admissions.name_input",
                    value: form.name,
                    onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                    required: true,
                    placeholder: language === "bn" ? "আপনার নাম" : "Your name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adm-phone", children: language === "bn" ? "ফোন নম্বর" : "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "adm-phone",
                    type: "tel",
                    "data-ocid": "admissions.phone_input",
                    value: form.phone,
                    onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
                    required: true,
                    placeholder: language === "bn" ? "আপনার ফোন নম্বর" : "Your phone number"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adm-email", children: t.contact.yourEmail }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "adm-email",
                  type: "email",
                  "data-ocid": "admissions.email_input",
                  value: form.email,
                  onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                  required: true,
                  placeholder: language === "bn" ? "আপনার ইমেইল" : "Your email"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adm-class", children: language === "bn" ? "যে শ্রেণিতে ভর্তি হতে চান" : "Class Applying For" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.classApplying,
                  onValueChange: (v) => setForm((f) => ({ ...f, classApplying: v })),
                  required: true,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        id: "adm-class",
                        "data-ocid": "admissions.class_select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectValue,
                          {
                            placeholder: language === "bn" ? "শ্রেণি বেছে নিন" : "Select a class"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CLASSES.map((cls) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: cls, children: language === "bn" ? `শ্রেণি ${cls}` : `Class ${cls}` }, cls)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adm-message", children: language === "bn" ? "বার্তা (ঐচ্ছিক)" : "Message (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "adm-message",
                  "data-ocid": "admissions.message_textarea",
                  value: form.message,
                  onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
                  rows: 4,
                  placeholder: language === "bn" ? "ভর্তি সম্পর্কে আপনার প্রশ্ন লিখুন..." : "Any questions about the admission process..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: isPending || !form.classApplying,
                "data-ocid": "admissions.submit_button",
                className: "w-full",
                children: isPending ? t.loading : language === "bn" ? "আবেদন পাঠান" : "Submit Enquiry"
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 px-4 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold", children: language === "bn" ? "সরাসরি যোগাযোগ করুন" : "Still have questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-80 text-sm", children: language === "bn" ? "ভর্তি সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন।" : "Contact us directly for any admission-related queries." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "admissions.contact_cta",
          className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold",
          children: t.admissions.applyNow
        }
      ) })
    ] }) })
  ] });
}
export {
  AdmissionsPage as default
};
