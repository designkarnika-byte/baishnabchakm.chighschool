import type { backendInterface, Notice, Teacher, Student, ContactMessage } from "../backend";
import { NoticeCategory } from "../backend";

const now = BigInt(Date.now()) * BigInt(1_000_000);

const mockNotices: Notice[] = [
  {
    id: BigInt(0),
    title: "Annual Examination Schedule 2024 | বার্ষিক পরীক্ষার সময়সূচি ২০২৪",
    content:
      "Annual examinations for classes 9-12 will be held from 15th March to 5th April 2024. Students must bring their admit cards. | নবম থেকে দ্বাদশ শ্রেণির বার্ষিক পরীক্ষা ১৫ মার্চ থেকে ৫ এপ্রিল ২০২৪ পর্যন্ত অনুষ্ঠিত হবে।",
    category: NoticeCategory.Academic,
    pinned: true,
    createdAt: now,
    updatedAt: now,
    authorPrincipal: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  },
  {
    id: BigInt(1),
    title: "School Holiday Notice | বিদ্যালয় ছুটির বিজ্ঞপ্তি",
    content:
      "The school will remain closed on 26th January (Republic Day) and 21st February (International Mother Language Day). | ২৬ জানুয়ারি (প্রজাতন্ত্র দিবস) এবং ২১ ফেব্রুয়ারি বিদ্যালয় বন্ধ থাকবে।",
    category: NoticeCategory.Holiday,
    pinned: true,
    createdAt: now,
    updatedAt: now,
    authorPrincipal: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  },
  {
    id: BigInt(2),
    title: "Important: Mandatory Parent-Teacher Meeting | গুরুত্বপূর্ণ: অভিভাবক-শিক্ষক সভা",
    content:
      "All parents are requested to attend the mandatory Parent-Teacher Meeting on 10th February 2024 at 11:00 AM. | সকল অভিভাবকদের ১০ ফেব্রুয়ারি ২০২৪ সকাল ১১টায় উপস্থিত থাকার অনুরোধ করা হচ্ছে।",
    category: NoticeCategory.Alert,
    pinned: true,
    createdAt: now,
    updatedAt: now,
    authorPrincipal: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  },
  {
    id: BigInt(3),
    title: "Admission Open for Session 2024-25 | ২০২৪-২৫ শিক্ষাবর্ষে ভর্তি চলছে",
    content:
      "Admissions are now open for classes 9 and 11 for the academic session 2024-25. Application forms are available at the school office. Last date: 31st March 2024. | ২০২৪-২৫ শিক্ষাবর্ষের নবম ও একাদশ শ্রেণিতে ভর্তি চলছে।",
    category: NoticeCategory.General,
    pinned: false,
    createdAt: now,
    updatedAt: now,
    authorPrincipal: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  },
];

const mockTeachers: Teacher[] = [
  {
    id: BigInt(0),
    name: "Ramesh Kumar",
    nameBengali: "রমেশ কুমার",
    subject: "Mathematics",
    subjectBengali: "গণিত",
    qualification: "M.Sc. (Mathematics), B.Ed., 15 years experience",
    email: "ramesh@mchs.edu",
    phone: "9800000001",
  },
  {
    id: BigInt(1),
    name: "Priya Das",
    nameBengali: "প্রিয়া দাস",
    subject: "Bengali",
    subjectBengali: "বাংলা",
    qualification: "M.A. (Bengali), B.Ed., Gold Medalist, 12 years experience",
    email: "priya@mchs.edu",
    phone: "9800000002",
  },
  {
    id: BigInt(2),
    name: "Suresh Mondal",
    nameBengali: "সুরেশ মণ্ডল",
    subject: "English",
    subjectBengali: "ইংরেজি",
    qualification: "M.A. (English), B.Ed., 10 years experience",
    email: "suresh@mchs.edu",
    phone: "9800000003",
  },
];

const mockStudents: Student[] = [
  {
    id: BigInt(0),
    name: "Arjun Chatterjee",
    nameBengali: "অর্জুন চট্টোপাধ্যায়",
    class: "9",
    section: "A",
    rollNumber: "09001",
    email: "",
  },
  {
    id: BigInt(1),
    name: "Puja Sharma",
    nameBengali: "পূজা শর্মা",
    class: "9",
    section: "B",
    rollNumber: "09005",
    email: "",
  },
  {
    id: BigInt(2),
    name: "Sourav Biswas",
    nameBengali: "সৌরভ বিশ্বাস",
    class: "10",
    section: "B",
    rollNumber: "10002",
    email: "",
  },
];

const mockContactMessages: ContactMessage[] = [];

export const mockBackend: backendInterface = {
  createNotice: async (args) => ({
    id: BigInt(99),
    title: args.title,
    content: args.content,
    category: args.category,
    pinned: false,
    createdAt: now,
    updatedAt: now,
    authorPrincipal: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  }),
  createStudent: async (args) => ({
    id: BigInt(99),
    name: args.name,
    nameBengali: args.nameBengali,
    class: args.class,
    section: args.section,
    rollNumber: args.rollNumber,
    email: args.email,
  }),
  createTeacher: async (args) => ({
    id: BigInt(99),
    name: args.name,
    nameBengali: args.nameBengali,
    subject: args.subject,
    subjectBengali: args.subjectBengali,
    qualification: args.qualification,
    email: args.email,
    phone: args.phone,
  }),
  deleteNotice: async () => true,
  deleteStudent: async () => true,
  deleteTeacher: async () => true,
  getAllStudents: async () => mockStudents,
  getAllTeachers: async () => mockTeachers,
  getContactMessages: async () => mockContactMessages,
  getNoticeById: async (id) => mockNotices.find((n) => n.id === id) ?? null,
  getNotices: async () => mockNotices,
  getStudents: async () => mockStudents,
  getTeachers: async () => mockTeachers,
  isAdmin: async () => false,
  pinNotice: async () => true,
  setAdmin: async () => true,
  submitContactMessage: async (args) => ({
    id: BigInt(1),
    name: args.name,
    email: args.email,
    message: args.message,
    createdAt: now,
  }),
  updateNotice: async () => true,
  updateStudent: async () => true,
  updateTeacher: async () => true,
};
