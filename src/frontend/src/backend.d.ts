import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CreateContactArgs {
    name: string;
    email: string;
    message: string;
}
export interface CreateTeacherArgs {
    subject: string;
    name: string;
    nameBengali: string;
    email: string;
    phone: string;
    qualification: string;
    subjectBengali: string;
}
export type Timestamp = bigint;
export type ContactId = bigint;
export interface Teacher {
    id: TeacherId;
    subject: string;
    name: string;
    nameBengali: string;
    email: string;
    phone: string;
    qualification: string;
    subjectBengali: string;
}
export interface UpdateTeacherArgs {
    id: TeacherId;
    subject: string;
    name: string;
    nameBengali: string;
    email: string;
    phone: string;
    qualification: string;
    subjectBengali: string;
}
export type TeacherId = bigint;
export type StudentId = bigint;
export interface ContactMessage {
    id: ContactId;
    name: string;
    createdAt: Timestamp;
    email: string;
    message: string;
}
export interface Notice {
    id: NoticeId;
    title: string;
    content: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    pinned: boolean;
    category: NoticeCategory;
    authorPrincipal: Principal;
}
export interface UpdateNoticeArgs {
    id: NoticeId;
    title: string;
    content: string;
    category: NoticeCategory;
}
export interface CreateNoticeArgs {
    title: string;
    content: string;
    category: NoticeCategory;
}
export interface UpdateStudentArgs {
    id: StudentId;
    class: string;
    name: string;
    nameBengali: string;
    section: string;
    email: string;
    rollNumber: string;
}
export type NoticeId = bigint;
export interface CreateStudentArgs {
    class: string;
    name: string;
    nameBengali: string;
    section: string;
    email: string;
    rollNumber: string;
}
export interface Student {
    id: StudentId;
    class: string;
    name: string;
    nameBengali: string;
    section: string;
    email: string;
    rollNumber: string;
}
export enum NoticeCategory {
    Academic = "Academic",
    General = "General",
    Holiday = "Holiday",
    Alert = "Alert",
    Other = "Other"
}
export interface backendInterface {
    createNotice(args: CreateNoticeArgs): Promise<Notice>;
    createStudent(args: CreateStudentArgs): Promise<Student>;
    createTeacher(args: CreateTeacherArgs): Promise<Teacher>;
    deleteNotice(id: NoticeId): Promise<boolean>;
    deleteStudent(id: StudentId): Promise<boolean>;
    deleteTeacher(id: TeacherId): Promise<boolean>;
    getAllStudents(): Promise<Array<Student>>;
    getAllTeachers(): Promise<Array<Teacher>>;
    getContactMessages(): Promise<Array<ContactMessage>>;
    getNoticeById(id: NoticeId): Promise<Notice | null>;
    getNotices(): Promise<Array<Notice>>;
    getStudents(): Promise<Array<Student>>;
    getTeachers(): Promise<Array<Teacher>>;
    isAdmin(): Promise<boolean>;
    pinNotice(id: NoticeId, pinned: boolean): Promise<boolean>;
    setAdmin(newAdmin: Principal): Promise<boolean>;
    submitContactMessage(args: CreateContactArgs): Promise<ContactMessage>;
    updateNotice(args: UpdateNoticeArgs): Promise<boolean>;
    updateStudent(args: UpdateStudentArgs): Promise<boolean>;
    updateTeacher(args: UpdateTeacherArgs): Promise<boolean>;
}
