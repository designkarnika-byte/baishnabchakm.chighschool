import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";
import { useSubmitContactMessage } from "../hooks/useContact";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const { mutateAsync, isPending } = useSubmitContactMessage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      toast.success(t.contact.success);
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch {
      toast.error(t.contact.error);
    }
  };

  const contactItems = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
      href: "https://maps.google.com/?q=Baishnabchak+MC+High+School+West+Bengal+721158",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+91 9123386590",
      href: "tel:+919123386590",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: t.contact.emailValue,
      href: `mailto:${t.contact.emailValue}`,
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: t.contact.hoursValue,
      href: undefined,
    },
  ];

  return (
    <div data-ocid="contact.page">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold">
            {t.contact.title}
          </h1>
          <p className="mt-2 opacity-80">{t.schoolNameEnglish}</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-background">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="font-display text-xl font-semibold text-foreground">
              {language === "bn" ? "যোগাযোগের তথ্য" : "Contact Information"}
            </h2>
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 items-start rounded-lg bg-muted/40 border border-border p-4"
                >
                  <div className="shrink-0 rounded-full bg-primary/10 p-2">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-foreground font-medium hover:text-primary transition-smooth break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium break-words">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-subtle">
              <iframe
                title={language === "bn" ? "বিদ্যালয়ের অবস্থান" : "School Location"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1!2d87.9!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b0000000001%3A0x0!2sBaishnabchak%2C+West+Bengal+721158!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-muted/40 px-4 py-2 flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground">
                  M.C HIGH SCHOOL, Baishnabchak, West Bengal 721158
                </p>
                <a
                  href="https://maps.google.com/?q=Baishnabchak+MC+High+School+West+Bengal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs text-primary hover:underline shrink-0"
                >
                  {language === "bn" ? "বড় মানচিত্র" : "View larger map"}
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">
              {t.contact.sendMessage}
            </h2>
            {sent ? (
              <div
                className="rounded-xl bg-primary/5 border border-primary/20 p-8 text-center space-y-3"
                data-ocid="contact.success_state"
              >
                <Send className="h-10 w-10 text-primary mx-auto" />
                <p className="font-display font-semibold text-foreground">
                  {t.contact.success}
                </p>
                <Button variant="outline" onClick={() => setSent(false)}>
                  {t.contact.sendMessage}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name">{t.contact.name}</Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name_input"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                    placeholder={t.contact.name}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-email">{t.contact.yourEmail}</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    data-ocid="contact.email_input"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                    placeholder={t.contact.yourEmail}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-message">{t.contact.message}</Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message_textarea"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                    rows={5}
                    placeholder={t.contact.message}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full"
                >
                  {isPending ? t.loading : t.contact.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
