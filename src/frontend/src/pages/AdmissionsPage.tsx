import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, FileText, GraduationCap, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";
import { useSubmitContactMessage } from "../hooks/useContact";

const CLASSES = ["V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const IMPORTANT_DATES_EN = [
  { label: "Form Distribution", date: "1st January 2024" },
  { label: "Last Date for Submission", date: "31st March 2024" },
  { label: "Entrance Assessment", date: "10th April 2024" },
  { label: "Result Announcement", date: "20th April 2024" },
  { label: "Enrollment Deadline", date: "30th April 2024" },
];

const IMPORTANT_DATES_BN = [
  { label: "ফর্ম বিতরণ", date: "১লা জানুয়ারি ২০২৪" },
  { label: "জমার শেষ তারিখ", date: "৩১শে মার্চ ২০২৪" },
  { label: "ভর্তি পরীক্ষা", date: "১০ই এপ্রিল ২০২৪" },
  { label: "ফলাফল ঘোষণা", date: "২০শে এপ্রিল ২০২৪" },
  { label: "নথিভুক্তির শেষ তারিখ", date: "৩০শে এপ্রিল ২০২৪" },
];

const ELIGIBILITY_EN = [
  "Candidate must have passed the previous class examination",
  "Age limit: 10–14 years for Class V–VIII, 14–17 years for Class IX–XII",
  "Students from recognized boards/schools are eligible",
  "No prior attendance at disqualified institutions",
];

const ELIGIBILITY_BN = [
  "প্রার্থীকে আগের শ্রেণির পরীক্ষায় উত্তীর্ণ হতে হবে",
  "বয়সসীমা: পঞ্চম–অষ্টম শ্রেণির জন্য ১০–১৪ বছর, নবম–দ্বাদশ শ্রেণির জন্য ১৪–১৭ বছর",
  "স্বীকৃত বোর্ড/বিদ্যালয়ের ছাত্রছাত্রীরা যোগ্য",
  "অযোগ্য প্রতিষ্ঠানে পূর্ববর্তী উপস্থিতি নেই",
];

export default function AdmissionsPage() {
  const { t, language } = useLanguage();
  const { mutateAsync, isPending } = useSubmitContactMessage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    classApplying: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const importantDates =
    language === "bn" ? IMPORTANT_DATES_BN : IMPORTANT_DATES_EN;
  const eligibility = language === "bn" ? ELIGIBILITY_BN : ELIGIBILITY_EN;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const msg = `Class Applying: ${form.classApplying}\nPhone: ${form.phone}\n\n${form.message}`;
      await mutateAsync({ name: form.name, email: form.email, message: msg });
      toast.success(
        language === "bn"
          ? "আবেদন সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।"
          : "Enquiry submitted! We will get back to you soon.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        classApplying: "",
        message: "",
      });
      setSent(true);
    } catch {
      toast.error(t.admin.error);
    }
  };

  return (
    <div data-ocid="admissions.page">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold">
            {t.admissions.title}
          </h1>
          <p className="mt-2 opacity-80">
            {language === "bn"
              ? "২০২৪-২৫ শিক্ষাবর্ষের জন্য ভর্তি চলছে"
              : "Admissions open for Academic Year 2024-25"}
          </p>
        </div>
      </section>

      {/* Process & Documents */}
      <section className="py-12 px-4 bg-background">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              {t.admissions.process}
            </h2>
            <div className="space-y-4">
              {t.admissions.processSteps.map((step, i) => (
                <div
                  key={step.slice(0, 20)}
                  className="flex items-start gap-4"
                  data-ocid={`admissions.step.item.${i + 1}`}
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t.admissions.documents}
            </h2>
            <div className="space-y-2">
              {t.admissions.documentsRequired.map((doc, i) => (
                <div
                  key={doc.slice(0, 20)}
                  className="flex items-center gap-3 rounded-lg bg-card border border-border p-3"
                  data-ocid={`admissions.document.item.${i + 1}`}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Important Dates */}
      <section className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {t.admissions.eligibility}
            </h2>
            <div className="space-y-2">
              {eligibility.map((item) => (
                <div
                  key={item.slice(0, 30)}
                  className="flex items-start gap-3 rounded-lg bg-card border border-border p-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {language === "bn" ? "গুরুত্বপূর্ণ তারিখ" : "Important Dates"}
            </h2>
            <div className="rounded-xl bg-card border border-border overflow-hidden shadow-subtle">
              {importantDates.map((item, idx) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-5 py-3 text-sm ${
                    idx < importantDates.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                  data-ocid={`admissions.date.item.${idx + 1}`}
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold text-foreground">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/15 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">
                {language === "bn" ? "অফিসের সময়" : "Office Hours"}
              </p>
              <p>
                {language === "bn"
                  ? "সকাল ১০:৪৫ – বিকাল ৩:৩০ (সোম–শুক্র)"
                  : "10:45 AM – 3:30 PM (Mon–Fri)"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes offered */}
      <section className="py-12 px-4 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {t.admissions.openFor}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CLASSES.map((cls) => (
              <div
                key={cls}
                className="rounded-lg bg-card border border-border px-5 py-3 font-display font-semibold text-lg text-foreground shadow-subtle hover:shadow-elevated transition-smooth"
              >
                {language === "bn" ? `শ্রেণি ${cls}` : `Class ${cls}`}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form */}
      <section className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
            {t.admissions.contactAdmissions}
          </h2>
          {sent ? (
            <div
              className="rounded-xl bg-primary/5 border border-primary/20 p-10 text-center space-y-3"
              data-ocid="admissions.success_state"
            >
              <Send className="h-10 w-10 text-primary mx-auto" />
              <p className="font-display font-semibold text-foreground">
                {language === "bn"
                  ? "আবেদন সফলভাবে পাঠানো হয়েছে!"
                  : "Enquiry submitted successfully!"}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === "bn"
                  ? "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
                  : "We will contact you shortly."}
              </p>
              <Button variant="outline" onClick={() => setSent(false)}>
                {language === "bn" ? "নতুন আবেদন" : "New Enquiry"}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl bg-card border border-border p-6 shadow-subtle"
              data-ocid="admissions.enquiry_form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="adm-name">{t.contact.name}</Label>
                  <Input
                    id="adm-name"
                    data-ocid="admissions.name_input"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                    placeholder={language === "bn" ? "আপনার নাম" : "Your name"}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="adm-phone">
                    {language === "bn" ? "ফোন নম্বর" : "Phone Number"}
                  </Label>
                  <Input
                    id="adm-phone"
                    type="tel"
                    data-ocid="admissions.phone_input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    required
                    placeholder={
                      language === "bn" ? "আপনার ফোন নম্বর" : "Your phone number"
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="adm-email">{t.contact.yourEmail}</Label>
                <Input
                  id="adm-email"
                  type="email"
                  data-ocid="admissions.email_input"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                  placeholder={language === "bn" ? "আপনার ইমেইল" : "Your email"}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="adm-class">
                  {language === "bn"
                    ? "যে শ্রেণিতে ভর্তি হতে চান"
                    : "Class Applying For"}
                </Label>
                <Select
                  value={form.classApplying}
                  onValueChange={(v) =>
                    setForm((f) => ({ ...f, classApplying: v }))
                  }
                  required
                >
                  <SelectTrigger
                    id="adm-class"
                    data-ocid="admissions.class_select"
                  >
                    <SelectValue
                      placeholder={
                        language === "bn" ? "শ্রেণি বেছে নিন" : "Select a class"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {CLASSES.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {language === "bn" ? `শ্রেণি ${cls}` : `Class ${cls}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="adm-message">
                  {language === "bn" ? "বার্তা (ঐচ্ছিক)" : "Message (Optional)"}
                </Label>
                <Textarea
                  id="adm-message"
                  data-ocid="admissions.message_textarea"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  rows={4}
                  placeholder={
                    language === "bn"
                      ? "ভর্তি সম্পর্কে আপনার প্রশ্ন লিখুন..."
                      : "Any questions about the admission process..."
                  }
                />
              </div>
              <Button
                type="submit"
                disabled={isPending || !form.classApplying}
                data-ocid="admissions.submit_button"
                className="w-full"
              >
                {isPending
                  ? t.loading
                  : language === "bn"
                    ? "আবেদন পাঠান"
                    : "Submit Enquiry"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <h2 className="font-display text-xl font-semibold">
            {language === "bn" ? "সরাসরি যোগাযোগ করুন" : "Still have questions?"}
          </h2>
          <p className="opacity-80 text-sm">
            {language === "bn"
              ? "ভর্তি সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন।"
              : "Contact us directly for any admission-related queries."}
          </p>
          <Link to="/contact">
            <Button
              data-ocid="admissions.contact_cta"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              {t.admissions.applyNow}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
