import {
  Award,
  BookOpen,
  Building,
  Globe,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const FACULTY = [
  {
    nameEn: "Sunil Kumar Mondal",
    nameBn: "সুনীল কুমার মণ্ডল",
    subjectEn: "Headmaster",
    subjectBn: "প্রধান শিক্ষক",
    expEn: "30+ yrs",
    expBn: "৩০+ বছর",
  },
  {
    nameEn: "Anita Roy",
    nameBn: "অনিতা রায়",
    subjectEn: "Mathematics",
    subjectBn: "গণিত",
    expEn: "22 yrs",
    expBn: "২২ বছর",
  },
  {
    nameEn: "Biswanath Ghosh",
    nameBn: "বিশ্বনাথ ঘোষ",
    subjectEn: "Physics & Chemistry",
    subjectBn: "পদার্থবিজ্ঞান ও রসায়ন",
    expEn: "18 yrs",
    expBn: "১৮ বছর",
  },
  {
    nameEn: "Rekha Dutta",
    nameBn: "রেখা দত্ত",
    subjectEn: "Bengali Literature",
    subjectBn: "বাংলা সাহিত্য",
    expEn: "15 yrs",
    expBn: "১৫ বছর",
  },
  {
    nameEn: "Abhijit Sarkar",
    nameBn: "অভিজিৎ সরকার",
    subjectEn: "History & Geography",
    subjectBn: "ইতিহাস ও ভূগোল",
    expEn: "20 yrs",
    expBn: "২০ বছর",
  },
  {
    nameEn: "Puja Banerjee",
    nameBn: "পূজা বন্দ্যোপাধ্যায়",
    subjectEn: "English",
    subjectBn: "ইংরেজি",
    expEn: "12 yrs",
    expBn: "১২ বছর",
  },
];

export default function AboutPage() {
  const { t, language } = useLanguage();

  const facilities =
    language === "bn"
      ? [
          "বিজ্ঞান গবেষণাগার",
          "কম্পিউটার ল্যাব",
          "গ্রন্থাগার",
          "খেলার মাঠ",
          "সভাঘর",
          "মিড-ডে মিল কিচেন",
        ]
      : [
          "Science Laboratory",
          "Computer Lab",
          "Library",
          "Sports Ground",
          "Assembly Hall",
          "Mid-Day Meal Kitchen",
        ];

  const achievements =
    language === "bn"
      ? [
          "২০২৩ সালে মাধ্যমিকে ৯৮% পাশের হার",
          "রাজ্যস্তরের বিজ্ঞান অলিম্পিয়াডে প্রথম",
          "জাতীয় খেলাধুলায় একাধিক পুরস্কার",
          "সেরা বিদ্যালয় পুরস্কার, পশ্চিমবঙ্গ সরকার ২০২২",
        ]
      : [
          "98% pass rate in Board Examinations 2023",
          "First Prize at State Science Olympiad",
          "Multiple National Level Sports Awards",
          "Best School Award, Government of West Bengal 2022",
        ];

  return (
    <div data-ocid="about.page">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold">
            {t.about.title}
          </h1>
          <p className="mt-2 opacity-80">{t.schoolNameBengali}</p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-12 px-4 bg-background">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              {t.about.history}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.historyText}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { label: t.about.affiliatedBoard, value: t.about.boardName },
                { label: t.about.classesOffered, value: t.about.classRange },
                { label: t.about.medium, value: t.about.mediumName },
                {
                  label: t.established,
                  value: language === "bn" ? "১৯২৮" : "1928",
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-lg bg-muted/40 p-3 border border-border"
                >
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-semibold text-foreground mt-0.5 text-sm">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              {t.about.mission}
            </h2>
            <div className="space-y-3">
              <div className="rounded-lg bg-primary/5 border border-primary/15 p-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  {language === "bn" ? "লক্ষ্য" : "Mission"}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
              <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
                <p className="text-xs font-semibold text-accent-foreground uppercase tracking-wider mb-1">
                  {language === "bn" ? "দৃষ্টিভঙ্গি" : "Vision"}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-8">
            <Building className="h-5 w-5 text-primary" />
            {t.about.facilities}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-card border border-border p-4 text-center shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 px-4 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-8">
            <Award className="h-5 w-5 text-primary" />
            {t.about.achievements}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <div
                key={item.slice(0, 30)}
                className="flex items-start gap-3 rounded-lg bg-muted/40 border border-border p-4"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-accent/20 text-accent-foreground text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty overview */}
      <section className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-8">
            <GraduationCap className="h-5 w-5 text-primary" />
            {language === "bn" ? "শিক্ষক পরিচিতি" : "Faculty Overview"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACULTY.map((f, i) => (
              <div
                key={f.nameEn}
                className="rounded-xl bg-card border border-border p-5 shadow-subtle hover:shadow-elevated transition-smooth"
                data-ocid={`about.faculty.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-foreground text-sm truncate">
                      {language === "bn" ? f.nameBn : f.nameEn}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {language === "bn" ? f.subjectBn : f.subjectEn}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Award className="h-3 w-3 text-gold" />
                  <span>
                    {language === "bn"
                      ? `অভিজ্ঞতা: ${f.expBn}`
                      : `Experience: ${f.expEn}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 px-4 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            {language === "bn" ? "আমাদের অবস্থান" : "Our Location"}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted/40 border border-border p-5 space-y-3">
                <p className="font-semibold text-foreground font-display">
                  {language === "bn"
                    ? "বৈষ্ণবচক মহেশ চন্দ্র উচ্চ বিদ্যালয়"
                    : "Baishnabchak M.C. High School"}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "bn"
                    ? "এম.সি হাই স্কুল, বৈষ্ণবচক, কলকাতা, পশ্চিমবঙ্গ ৭২১১৫৮"
                    : "M.C HIGH SCHOOL, Baishnabchak, Kolkata, West Bengal 721158"}
                </p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <span className="font-medium text-foreground">
                      {language === "bn" ? "সময়: " : "Hours: "}
                    </span>
                    {language === "bn"
                      ? "সকাল ১০:৪৫ – বিকাল ৩:৩০ (সোম–শুক্র)"
                      : "10:45 AM – 3:30 PM (Mon–Fri)"}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      {language === "bn" ? "ফোন: " : "Phone: "}
                    </span>
                    +91 9123386590
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Baishnabchak+MC+High+School+West+Bengal+721158"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
              >
                <MapPin className="h-3.5 w-3.5" />
                {language === "bn"
                  ? "Google Maps-এ দেখুন"
                  : "Open in Google Maps"}
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-border shadow-subtle">
              <iframe
                title={
                  language === "bn" ? "বিদ্যালয়ের অবস্থান" : "School Location Map"
                }
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1!2d87.9!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b0000000001%3A0x0!2sBaishnabchak%2C+West+Bengal+721158!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-2xl font-semibold mb-8">
            {t.home.schoolValues}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                en: t.home.values.academic,
                bn: t.home.values.academicBn,
              },
              {
                icon: Award,
                en: t.home.values.holistic,
                bn: t.home.values.holisticBn,
              },
              {
                icon: Users,
                en: t.home.values.community,
                bn: t.home.values.communityBn,
              },
            ].map(({ icon: Icon, en: enVal, bn: bnVal }) => (
              <div
                key={enVal}
                className="rounded-xl bg-primary-foreground/10 p-6 space-y-2"
              >
                <Icon className="h-8 w-8 mx-auto text-gold" />
                <p className="font-display font-semibold">{enVal}</p>
                <p className="opacity-80 text-sm">{bnVal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
