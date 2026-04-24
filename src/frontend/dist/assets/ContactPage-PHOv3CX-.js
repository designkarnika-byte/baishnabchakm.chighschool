import { u as useLanguage, r as reactExports, M as MapPin, P as Phone, d as Mail, C as Clock, j as jsxRuntimeExports, B as Button, b as ue } from "./index-WwsKOO2D.js";
import { I as Input } from "./input-C1VjvcCu.js";
import { L as Label, T as Textarea } from "./textarea-C7aGJvmg.js";
import { u as useSubmitContactMessage, S as Send } from "./useContact-Bgqiamyt.js";
import "./useMutation-DcdiYfoy.js";
function ContactPage() {
  const { t, language } = useLanguage();
  const { mutateAsync, isPending } = useSubmitContactMessage();
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      ue.success(t.contact.success);
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch {
      ue.error(t.contact.error);
    }
  };
  const contactItems = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
      href: "https://maps.google.com/?q=Baishnabchak+MC+High+School+West+Bengal+721158"
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+91 9123386590",
      href: "tel:+919123386590"
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: t.contact.emailValue,
      href: `mailto:${t.contact.emailValue}`
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: t.contact.hoursValue,
      href: void 0
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-semibold", children: t.contact.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 opacity-80", children: t.schoolNameEnglish })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: language === "bn" ? "যোগাযোগের তথ্য" : "Contact Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: contactItems.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-4 items-start rounded-lg bg-muted/40 border border-border p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 rounded-full bg-primary/10 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
                href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href,
                    target: href.startsWith("http") ? "_blank" : void 0,
                    rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
                    className: "text-foreground font-medium hover:text-primary transition-smooth break-words",
                    children: value
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium break-words", children: value })
              ] })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-border shadow-subtle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: language === "bn" ? "বিদ্যালয়ের অবস্থান" : "School Location",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1!2d87.9!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b0000000001%3A0x0!2sBaishnabchak%2C+West+Bengal+721158!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
              width: "100%",
              height: "220",
              style: { border: 0 },
              allowFullScreen: true,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 px-4 py-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "M.C HIGH SCHOOL, Baishnabchak, West Bengal 721158" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://maps.google.com/?q=Baishnabchak+MC+High+School+West+Bengal",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "ml-auto text-xs text-primary hover:underline shrink-0",
                children: language === "bn" ? "বড় মানচিত্র" : "View larger map"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-6", children: t.contact.sendMessage }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl bg-primary/5 border border-primary/20 p-8 text-center space-y-3",
            "data-ocid": "contact.success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-10 w-10 text-primary mx-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: t.contact.success }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setSent(false), children: t.contact.sendMessage })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "space-y-5",
            "data-ocid": "contact.form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-name", children: t.contact.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-name",
                    "data-ocid": "contact.name_input",
                    value: form.name,
                    onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                    required: true,
                    placeholder: t.contact.name
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-email", children: t.contact.yourEmail }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-email",
                    type: "email",
                    "data-ocid": "contact.email_input",
                    value: form.email,
                    onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                    required: true,
                    placeholder: t.contact.yourEmail
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-message", children: t.contact.message }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "contact-message",
                    "data-ocid": "contact.message_textarea",
                    value: form.message,
                    onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
                    required: true,
                    rows: 5,
                    placeholder: t.contact.message
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: isPending,
                  "data-ocid": "contact.submit_button",
                  className: "w-full",
                  children: isPending ? t.loading : t.contact.submit
                }
              )
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as default
};
