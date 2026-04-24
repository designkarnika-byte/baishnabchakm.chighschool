export type NoticeCategory =
  | "Academic"
  | "General"
  | "Holiday"
  | "Alert"
  | "Other";

export interface Notice {
  id: bigint;
  title: string;
  content: string;
  category: NoticeCategory;
  pinned: boolean;
  createdAt: bigint;
  updatedAt: bigint;
  authorPrincipal: string;
}

export interface Teacher {
  id: bigint;
  name: string;
  nameBengali: string;
  subject: string;
  subjectBengali: string;
  qualification: string;
  email: string;
  phone: string;
}

export interface Student {
  id: bigint;
  name: string;
  nameBengali: string;
  class_: string;
  section: string;
  rollNumber: string;
  email: string;
}

export interface ContactMessage {
  id: bigint;
  name: string;
  email: string;
  message: string;
  createdAt: bigint;
}

export interface CreateNoticeArgs {
  title: string;
  content: string;
  category: NoticeCategory;
  pinned: boolean;
}

export interface UpdateNoticeArgs {
  id: bigint;
  title: string;
  content: string;
  category: NoticeCategory;
  pinned: boolean;
}

export interface CreateTeacherArgs {
  name: string;
  nameBengali: string;
  subject: string;
  subjectBengali: string;
  qualification: string;
  email: string;
  phone: string;
}

export interface UpdateTeacherArgs {
  id: bigint;
  name: string;
  nameBengali: string;
  subject: string;
  subjectBengali: string;
  qualification: string;
  email: string;
  phone: string;
}

export interface CreateStudentArgs {
  name: string;
  nameBengali: string;
  class_: string;
  section: string;
  rollNumber: string;
  email: string;
}

export interface UpdateStudentArgs {
  id: bigint;
  name: string;
  nameBengali: string;
  class_: string;
  section: string;
  rollNumber: string;
  email: string;
}

export interface SubmitContactArgs {
  name: string;
  email: string;
  message: string;
}

export type Language = "en" | "bn";
