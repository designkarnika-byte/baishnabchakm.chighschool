import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Pin, PinOff, Plus, Shield, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AdminRoute } from "../components/AdminRoute";
import { useLanguage } from "../contexts/LanguageContext";
import { useSetAdmin } from "../hooks/useAdmin";
import {
  useCreateNotice,
  useDeleteNotice,
  useNotices,
  usePinNotice,
  useUpdateNotice,
} from "../hooks/useNotices";
import {
  useCreateStudent,
  useDeleteStudent,
  useStudents,
  useUpdateStudent,
} from "../hooks/useStudents";
import {
  useCreateTeacher,
  useDeleteTeacher,
  useTeachers,
  useUpdateTeacher,
} from "../hooks/useTeachers";
import type {
  CreateNoticeArgs,
  CreateStudentArgs,
  CreateTeacherArgs,
  Notice,
  NoticeCategory,
  Student,
  Teacher,
} from "../types";

// ─── Notice Dialog ──────────────────────────────────────────────────────────

interface NoticeDialogProps {
  open: boolean;
  onClose: () => void;
  initial?: Notice;
}

function NoticeDialog({ open, onClose, initial }: NoticeDialogProps) {
  const { t, language } = useLanguage();
  const { mutateAsync: create, isPending: creating } = useCreateNotice();
  const { mutateAsync: update, isPending: updating } = useUpdateNotice();

  const blank: CreateNoticeArgs = {
    title: "",
    content: "",
    category: "General",
    pinned: false,
  };

  const [form, setForm] = useState<CreateNoticeArgs>(
    initial
      ? {
          title: initial.title,
          content: initial.content,
          category: initial.category,
          pinned: initial.pinned,
        }
      : blank,
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreateNoticeArgs, boolean>>
  >({});

  const isPending = creating || updating;
  const isEdit = !!initial;

  const validate = () => {
    const e: Partial<Record<keyof CreateNoticeArgs, boolean>> = {};
    if (!form.title.trim()) e.title = true;
    if (!form.content.trim()) e.content = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      if (isEdit && initial) {
        await update({ id: initial.id, ...form });
        toast.success(t.admin.updateSuccess);
      } else {
        await create(form);
        toast.success(t.admin.createSuccess);
      }
      onClose();
      setForm(blank);
    } catch {
      toast.error(t.admin.error);
    }
  };

  const handleClose = () => {
    onClose();
    setForm(
      initial
        ? {
            title: initial.title,
            content: initial.content,
            category: initial.category,
            pinned: initial.pinned,
          }
        : blank,
    );
    setErrors({});
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent data-ocid="admin.notice_dialog" className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">
            {isEdit
              ? language === "en"
                ? "Edit Notice"
                : "বিজ্ঞপ্তি সম্পাদনা"
              : t.admin.addNotice}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          <div className="space-y-1.5">
            <Label htmlFor="n-title">
              {language === "en" ? "Title" : "শিরোনাম"}{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id="n-title"
              data-ocid="admin.notice_title_input"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              className={errors.title ? "border-destructive" : ""}
            />
            {errors.title && (
              <p
                className="text-xs text-destructive"
                data-ocid="admin.notice_title_field_error"
              >
                {language === "en" ? "Title is required" : "শিরোনাম আবশ্যক"}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="n-content">
              {language === "en" ? "Content" : "বিষয়বস্তু"}{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="n-content"
              data-ocid="admin.notice_content_textarea"
              rows={4}
              value={form.content}
              onChange={(e) =>
                setForm((f) => ({ ...f, content: e.target.value }))
              }
              className={errors.content ? "border-destructive" : ""}
            />
            {errors.content && (
              <p
                className="text-xs text-destructive"
                data-ocid="admin.notice_content_field_error"
              >
                {language === "en" ? "Content is required" : "বিষয়বস্তু আবশ্যক"}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>{t.category}</Label>
              <Select
                value={form.category}
                onValueChange={(v) =>
                  setForm((f) => ({ ...f, category: v as NoticeCategory }))
                }
              >
                <SelectTrigger data-ocid="admin.notice_category_select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(
                    [
                      "Academic",
                      "General",
                      "Holiday",
                      "Alert",
                      "Other",
                    ] as NoticeCategory[]
                  ).map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col justify-end space-y-1.5">
              <label className="flex items-center gap-2 cursor-pointer pb-2">
                <input
                  type="checkbox"
                  checked={form.pinned}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, pinned: e.target.checked }))
                  }
                  data-ocid="admin.notice_pinned_checkbox"
                  className="rounded"
                />
                <span className="text-sm">
                  {language === "en" ? "Pin notice" : "পিন করুন"}
                </span>
              </label>
            </div>
          </div>
          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              data-ocid="admin.notice_cancel_button"
            >
              {t.admin.cancel}
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              data-ocid="admin.notice_submit_button"
            >
              {isPending ? t.loading : t.admin.save}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Teacher Dialog ──────────────────────────────────────────────────────────

interface TeacherDialogProps {
  open: boolean;
  onClose: () => void;
  initial?: Teacher;
}

function TeacherDialog({ open, onClose, initial }: TeacherDialogProps) {
  const { t, language } = useLanguage();
  const { mutateAsync: create, isPending: creating } = useCreateTeacher();
  const { mutateAsync: update, isPending: updating } = useUpdateTeacher();

  const blank: CreateTeacherArgs = {
    name: "",
    nameBengali: "",
    subject: "",
    subjectBengali: "",
    qualification: "",
    email: "",
    phone: "",
  };

  const [form, setForm] = useState<CreateTeacherArgs>(
    initial
      ? {
          name: initial.name,
          nameBengali: initial.nameBengali,
          subject: initial.subject,
          subjectBengali: initial.subjectBengali,
          qualification: initial.qualification,
          email: initial.email,
          phone: initial.phone,
        }
      : blank,
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreateTeacherArgs, boolean>>
  >({});

  const isPending = creating || updating;
  const isEdit = !!initial;

  const validate = () => {
    const e: Partial<Record<keyof CreateTeacherArgs, boolean>> = {};
    if (!form.name.trim()) e.name = true;
    if (!form.nameBengali.trim()) e.nameBengali = true;
    if (!form.subject.trim()) e.subject = true;
    if (!form.subjectBengali.trim()) e.subjectBengali = true;
    if (!form.qualification.trim()) e.qualification = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      if (isEdit && initial) {
        await update({ id: initial.id, ...form });
        toast.success(t.admin.updateSuccess);
      } else {
        await create(form);
        toast.success(t.admin.createSuccess);
      }
      onClose();
      setForm(blank);
    } catch {
      toast.error(t.admin.error);
    }
  };

  const handleClose = () => {
    onClose();
    setErrors({});
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent data-ocid="admin.teacher_dialog" className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">
            {isEdit
              ? language === "en"
                ? "Edit Teacher"
                : "শিক্ষক সম্পাদনা"
              : t.admin.addTeacher}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 pt-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>
                Name (English) <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.teacher_name_input"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.teacher_name_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>
                Name (Bengali) <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.teacher_nameBn_input"
                value={form.nameBengali}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nameBengali: e.target.value }))
                }
                className={errors.nameBengali ? "border-destructive" : ""}
              />
              {errors.nameBengali && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.teacher_nameBn_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>
                Subject (English) <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.teacher_subject_input"
                value={form.subject}
                onChange={(e) =>
                  setForm((f) => ({ ...f, subject: e.target.value }))
                }
                className={errors.subject ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.teacher_subject_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>
                Subject (Bengali) <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.teacher_subjectBn_input"
                value={form.subjectBengali}
                onChange={(e) =>
                  setForm((f) => ({ ...f, subjectBengali: e.target.value }))
                }
                className={errors.subjectBengali ? "border-destructive" : ""}
              />
              {errors.subjectBengali && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.teacher_subjectBn_field_error"
                >
                  Required
                </p>
              )}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>
              Qualification <span className="text-destructive">*</span>
            </Label>
            <Input
              data-ocid="admin.teacher_qualification_input"
              value={form.qualification}
              onChange={(e) =>
                setForm((f) => ({ ...f, qualification: e.target.value }))
              }
              className={errors.qualification ? "border-destructive" : ""}
            />
            {errors.qualification && (
              <p
                className="text-xs text-destructive"
                data-ocid="admin.teacher_qualification_field_error"
              >
                Required
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                data-ocid="admin.teacher_email_input"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
            </div>
            <div className="space-y-1.5">
              <Label>Phone</Label>
              <Input
                data-ocid="admin.teacher_phone_input"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              data-ocid="admin.teacher_cancel_button"
            >
              {t.admin.cancel}
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              data-ocid="admin.teacher_submit_button"
            >
              {isPending ? t.loading : t.admin.save}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Student Dialog ──────────────────────────────────────────────────────────

interface StudentDialogProps {
  open: boolean;
  onClose: () => void;
  initial?: Student;
}

function StudentDialog({ open, onClose, initial }: StudentDialogProps) {
  const { t, language } = useLanguage();
  const { mutateAsync: create, isPending: creating } = useCreateStudent();
  const { mutateAsync: update, isPending: updating } = useUpdateStudent();

  const blank: CreateStudentArgs = {
    name: "",
    nameBengali: "",
    class_: "",
    section: "",
    rollNumber: "",
    email: "",
  };

  const [form, setForm] = useState<CreateStudentArgs>(
    initial
      ? {
          name: initial.name,
          nameBengali: initial.nameBengali,
          class_: initial.class_,
          section: initial.section,
          rollNumber: initial.rollNumber,
          email: initial.email,
        }
      : blank,
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreateStudentArgs, boolean>>
  >({});

  const isPending = creating || updating;
  const isEdit = !!initial;

  const validate = () => {
    const e: Partial<Record<keyof CreateStudentArgs, boolean>> = {};
    if (!form.name.trim()) e.name = true;
    if (!form.nameBengali.trim()) e.nameBengali = true;
    if (!form.class_.trim()) e.class_ = true;
    if (!form.section.trim()) e.section = true;
    if (!form.rollNumber.trim()) e.rollNumber = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      if (isEdit && initial) {
        await update({ id: initial.id, ...form });
        toast.success(t.admin.updateSuccess);
      } else {
        await create(form);
        toast.success(t.admin.createSuccess);
      }
      onClose();
      setForm(blank);
    } catch {
      toast.error(t.admin.error);
    }
  };

  const handleClose = () => {
    onClose();
    setErrors({});
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent data-ocid="admin.student_dialog" className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">
            {isEdit
              ? language === "en"
                ? "Edit Student"
                : "ছাত্র/ছাত্রী সম্পাদনা"
              : t.admin.addStudent}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 pt-1">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>
                Name (English) <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.student_name_input"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.student_name_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>
                Name (Bengali) <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.student_nameBn_input"
                value={form.nameBengali}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nameBengali: e.target.value }))
                }
                className={errors.nameBengali ? "border-destructive" : ""}
              />
              {errors.nameBengali && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.student_nameBn_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>
                Class <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.student_class_input"
                value={form.class_}
                onChange={(e) =>
                  setForm((f) => ({ ...f, class_: e.target.value }))
                }
                placeholder="X"
                className={errors.class_ ? "border-destructive" : ""}
              />
              {errors.class_ && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.student_class_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>
                Section <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.student_section_input"
                value={form.section}
                onChange={(e) =>
                  setForm((f) => ({ ...f, section: e.target.value }))
                }
                placeholder="A"
                className={errors.section ? "border-destructive" : ""}
              />
              {errors.section && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.student_section_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>
                Roll Number <span className="text-destructive">*</span>
              </Label>
              <Input
                data-ocid="admin.student_roll_input"
                value={form.rollNumber}
                onChange={(e) =>
                  setForm((f) => ({ ...f, rollNumber: e.target.value }))
                }
                className={errors.rollNumber ? "border-destructive" : ""}
              />
              {errors.rollNumber && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="admin.student_roll_field_error"
                >
                  Required
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                data-ocid="admin.student_email_input"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              data-ocid="admin.student_cancel_button"
            >
              {t.admin.cancel}
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              data-ocid="admin.student_submit_button"
            >
              {isPending ? t.loading : t.admin.save}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Category Badge ───────────────────────────────────────────────────────────

const categoryVariant: Record<
  NoticeCategory,
  "default" | "secondary" | "destructive" | "outline"
> = {
  Academic: "default",
  General: "secondary",
  Holiday: "outline",
  Alert: "destructive",
  Other: "outline",
};

// ─── Main Admin Page ──────────────────────────────────────────────────────────

export default function AdminPage() {
  const { t, language } = useLanguage();

  // Notice state
  const [noticeDialogOpen, setNoticeDialogOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | undefined>();
  const [deleteNoticeTarget, setDeleteNoticeTarget] = useState<bigint | null>(
    null,
  );

  // Teacher state
  const [teacherDialogOpen, setTeacherDialogOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | undefined>();
  const [deleteTeacherTarget, setDeleteTeacherTarget] = useState<bigint | null>(
    null,
  );

  // Student state
  const [studentDialogOpen, setStudentDialogOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | undefined>();
  const [deleteStudentTarget, setDeleteStudentTarget] = useState<bigint | null>(
    null,
  );

  // setAdmin state
  const [adminPrincipal, setAdminPrincipal] = useState("");

  const { data: notices, isLoading: noticesLoading } = useNotices();
  const { data: teachers, isLoading: teachersLoading } = useTeachers();
  const { data: students, isLoading: studentsLoading } = useStudents();

  const { mutateAsync: deleteNotice, isPending: deletingNotice } =
    useDeleteNotice();
  const { mutateAsync: pinNotice } = usePinNotice();
  const { mutateAsync: deleteTeacher, isPending: deletingTeacher } =
    useDeleteTeacher();
  const { mutateAsync: deleteStudent, isPending: deletingStudent } =
    useDeleteStudent();
  const { mutateAsync: setAdmin, isPending: settingAdmin } = useSetAdmin();

  const handleDeleteNotice = async () => {
    if (!deleteNoticeTarget) return;
    try {
      await deleteNotice(deleteNoticeTarget);
      toast.success(t.admin.deleteSuccess);
    } catch {
      toast.error(t.admin.error);
    } finally {
      setDeleteNoticeTarget(null);
    }
  };

  const handleDeleteTeacher = async () => {
    if (!deleteTeacherTarget) return;
    try {
      await deleteTeacher(deleteTeacherTarget);
      toast.success(t.admin.deleteSuccess);
    } catch {
      toast.error(t.admin.error);
    } finally {
      setDeleteTeacherTarget(null);
    }
  };

  const handleDeleteStudent = async () => {
    if (!deleteStudentTarget) return;
    try {
      await deleteStudent(deleteStudentTarget);
      toast.success(t.admin.deleteSuccess);
    } catch {
      toast.error(t.admin.error);
    } finally {
      setDeleteStudentTarget(null);
    }
  };

  const handleGrantAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminPrincipal.trim()) return;
    try {
      await setAdmin(adminPrincipal.trim());
      toast.success(
        language === "en"
          ? "Admin access granted."
          : "অ্যাডমিন অ্যাক্সেস দেওয়া হয়েছে।",
      );
      setAdminPrincipal("");
    } catch {
      toast.error(t.admin.error);
    }
  };

  const formatDate = (ts: bigint) => {
    const ms = Number(ts);
    if (ms < 1e12) return "—";
    return new Date(ms).toLocaleDateString(
      language === "bn" ? "bn-IN" : "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      },
    );
  };

  return (
    <div data-ocid="admin.page">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-10 px-4">
        <div className="mx-auto max-w-7xl flex items-center gap-3">
          <Shield className="h-7 w-7 opacity-80 shrink-0" />
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold">
              {t.admin.title}
            </h1>
            <p className="text-primary-foreground/70 text-sm mt-0.5">
              {language === "en"
                ? "Manage notices, teachers, and students"
                : "বিজ্ঞপ্তি, শিক্ষক ও ছাত্রছাত্রী পরিচালনা করুন"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-background min-h-screen">
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="notices" data-ocid="admin.tabs">
            <TabsList className="mb-6 gap-1">
              <TabsTrigger value="notices" data-ocid="admin.notices_tab">
                {t.admin.notices}
              </TabsTrigger>
              <TabsTrigger value="teachers" data-ocid="admin.teachers_tab">
                {t.admin.teachers}
              </TabsTrigger>
              <TabsTrigger value="students" data-ocid="admin.students_tab">
                {t.admin.students}
              </TabsTrigger>
              <TabsTrigger value="settings" data-ocid="admin.settings_tab">
                {language === "en" ? "Settings" : "সেটিংস"}
              </TabsTrigger>
            </TabsList>

            {/* ── Notices ──────────────────────────────────────────────── */}
            <TabsContent value="notices">
              <div className="flex flex-wrap gap-3 justify-between items-center mb-4">
                <h2 className="font-display text-xl font-semibold">
                  {t.admin.notices}
                </h2>
                <Button
                  onClick={() => {
                    setEditingNotice(undefined);
                    setNoticeDialogOpen(true);
                  }}
                  data-ocid="admin.add_notice_button"
                >
                  <Plus className="h-4 w-4 mr-1.5" />
                  {t.admin.addNotice}
                </Button>
              </div>

              {noticesLoading ? (
                <div
                  className="space-y-2"
                  data-ocid="admin.notices_loading_state"
                >
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : !notices?.length ? (
                <div
                  className="rounded-lg border border-dashed border-border bg-muted/30 py-16 text-center"
                  data-ocid="admin.notices_empty_state"
                >
                  <p className="text-muted-foreground text-sm">
                    {language === "en"
                      ? "No notices yet. Add one to get started."
                      : "কোনো বিজ্ঞপ্তি নেই।"}
                  </p>
                </div>
              ) : (
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/40">
                        <TableHead className="font-semibold">
                          {language === "en" ? "Title" : "শিরোনাম"}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {t.category}
                        </TableHead>
                        <TableHead className="font-semibold text-center">
                          {language === "en" ? "Pinned" : "পিন"}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {t.date}
                        </TableHead>
                        <TableHead className="font-semibold text-right">
                          {t.actions}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {notices.map((notice, i) => (
                        <TableRow
                          key={notice.id.toString()}
                          data-ocid={`admin.notice.item.${i + 1}`}
                          className="transition-colors"
                        >
                          <TableCell className="font-medium max-w-[220px] truncate">
                            {notice.title}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={categoryVariant[notice.category]}
                              className="text-xs"
                            >
                              {notice.category}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                pinNotice({
                                  id: notice.id,
                                  pinned: !notice.pinned,
                                })
                              }
                              data-ocid={`admin.notice.pin_button.${i + 1}`}
                              title={
                                notice.pinned ? t.admin.unpin : t.admin.pin
                              }
                              className={
                                notice.pinned
                                  ? "text-gold"
                                  : "text-muted-foreground"
                              }
                              aria-label={
                                notice.pinned ? t.admin.unpin : t.admin.pin
                              }
                            >
                              {notice.pinned ? (
                                <Pin className="h-4 w-4" />
                              ) : (
                                <PinOff className="h-4 w-4" />
                              )}
                            </Button>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                            {formatDate(notice.createdAt)}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-end gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setEditingNotice(notice);
                                  setNoticeDialogOpen(true);
                                }}
                                data-ocid={`admin.notice.edit_button.${i + 1}`}
                                aria-label={t.admin.edit}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-destructive hover:text-destructive"
                                onClick={() => setDeleteNoticeTarget(notice.id)}
                                data-ocid={`admin.notice.delete_button.${i + 1}`}
                                aria-label={t.admin.delete}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            {/* ── Teachers ─────────────────────────────────────────────── */}
            <TabsContent value="teachers">
              <div className="flex flex-wrap gap-3 justify-between items-center mb-4">
                <h2 className="font-display text-xl font-semibold">
                  {t.admin.teachers}
                </h2>
                <Button
                  onClick={() => {
                    setEditingTeacher(undefined);
                    setTeacherDialogOpen(true);
                  }}
                  data-ocid="admin.add_teacher_button"
                >
                  <Plus className="h-4 w-4 mr-1.5" />
                  {t.admin.addTeacher}
                </Button>
              </div>

              {teachersLoading ? (
                <div
                  className="space-y-2"
                  data-ocid="admin.teachers_loading_state"
                >
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : !teachers?.length ? (
                <div
                  className="rounded-lg border border-dashed border-border bg-muted/30 py-16 text-center"
                  data-ocid="admin.teachers_empty_state"
                >
                  <p className="text-muted-foreground text-sm">
                    {language === "en"
                      ? "No teachers yet. Add one to get started."
                      : "কোনো শিক্ষক নেই।"}
                  </p>
                </div>
              ) : (
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/40">
                        <TableHead className="font-semibold">
                          {t.name}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {language === "en" ? "Bengali Name" : "বাংলা নাম"}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {language === "en" ? "Subject" : "বিষয়"}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {language === "en" ? "Qualification" : "যোগ্যতা"}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {language === "en" ? "Email" : "ইমেইল"}
                        </TableHead>
                        <TableHead className="font-semibold text-right">
                          {t.actions}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {teachers.map((teacher, i) => (
                        <TableRow
                          key={teacher.id.toString()}
                          data-ocid={`admin.teacher.item.${i + 1}`}
                          className="transition-colors"
                        >
                          <TableCell className="font-medium">
                            {teacher.name}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {teacher.nameBengali}
                          </TableCell>
                          <TableCell>{teacher.subject}</TableCell>
                          <TableCell className="text-sm text-muted-foreground max-w-[160px] truncate">
                            {teacher.qualification}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {teacher.email || "—"}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-end gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setEditingTeacher(teacher);
                                  setTeacherDialogOpen(true);
                                }}
                                data-ocid={`admin.teacher.edit_button.${i + 1}`}
                                aria-label={t.admin.edit}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-destructive hover:text-destructive"
                                onClick={() =>
                                  setDeleteTeacherTarget(teacher.id)
                                }
                                data-ocid={`admin.teacher.delete_button.${i + 1}`}
                                aria-label={t.admin.delete}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            {/* ── Students ─────────────────────────────────────────────── */}
            <TabsContent value="students">
              <div className="flex flex-wrap gap-3 justify-between items-center mb-4">
                <h2 className="font-display text-xl font-semibold">
                  {t.admin.students}
                </h2>
                <Button
                  onClick={() => {
                    setEditingStudent(undefined);
                    setStudentDialogOpen(true);
                  }}
                  data-ocid="admin.add_student_button"
                >
                  <Plus className="h-4 w-4 mr-1.5" />
                  {t.admin.addStudent}
                </Button>
              </div>

              {studentsLoading ? (
                <div
                  className="space-y-2"
                  data-ocid="admin.students_loading_state"
                >
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : !students?.length ? (
                <div
                  className="rounded-lg border border-dashed border-border bg-muted/30 py-16 text-center"
                  data-ocid="admin.students_empty_state"
                >
                  <p className="text-muted-foreground text-sm">
                    {language === "en"
                      ? "No students yet. Add one to get started."
                      : "কোনো ছাত্রছাত্রী নেই।"}
                  </p>
                </div>
              ) : (
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/40">
                        <TableHead className="font-semibold">
                          {t.name}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {language === "en" ? "Bengali Name" : "বাংলা নাম"}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {t.students.class}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {t.students.section}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {t.students.roll}
                        </TableHead>
                        <TableHead className="font-semibold">
                          {language === "en" ? "Email" : "ইমেইল"}
                        </TableHead>
                        <TableHead className="font-semibold text-right">
                          {t.actions}
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student, i) => (
                        <TableRow
                          key={student.id.toString()}
                          data-ocid={`admin.student.item.${i + 1}`}
                          className="transition-colors"
                        >
                          <TableCell className="font-medium">
                            {student.name}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {student.nameBengali}
                          </TableCell>
                          <TableCell>{student.class_}</TableCell>
                          <TableCell>{student.section}</TableCell>
                          <TableCell className="font-mono text-sm">
                            {student.rollNumber}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {student.email || "—"}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-end gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setEditingStudent(student);
                                  setStudentDialogOpen(true);
                                }}
                                data-ocid={`admin.student.edit_button.${i + 1}`}
                                aria-label={t.admin.edit}
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="text-destructive hover:text-destructive"
                                onClick={() =>
                                  setDeleteStudentTarget(student.id)
                                }
                                data-ocid={`admin.student.delete_button.${i + 1}`}
                                aria-label={t.admin.delete}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            {/* ── Settings / Grant Admin ────────────────────────────────── */}
            <TabsContent value="settings">
              <div className="max-w-xl space-y-6">
                <div>
                  <h2 className="font-display text-xl font-semibold mb-1">
                    {language === "en"
                      ? "Grant Admin Access"
                      : "অ্যাডমিন অ্যাক্সেস দিন"}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "en"
                      ? "Enter the principal ID of the user you want to grant admin access to."
                      : "যে ব্যবহারকারীকে অ্যাডমিন অ্যাক্সেস দিতে চান তার প্রিন্সিপাল ID লিখুন।"}
                  </p>
                  <form onSubmit={handleGrantAdmin} className="flex gap-2">
                    <Input
                      data-ocid="admin.principal_input"
                      value={adminPrincipal}
                      onChange={(e) => setAdminPrincipal(e.target.value)}
                      placeholder={
                        language === "en"
                          ? "Principal ID (e.g. aaaaa-bbbbb-...)"
                          : "প্রিন্সিপাল ID লিখুন"
                      }
                      className="flex-1 font-mono text-sm"
                    />
                    <Button
                      type="submit"
                      disabled={settingAdmin || !adminPrincipal.trim()}
                      data-ocid="admin.grant_admin_button"
                    >
                      <Shield className="h-4 w-4 mr-1.5" />
                      {settingAdmin
                        ? t.loading
                        : language === "en"
                          ? "Grant Admin"
                          : "অ্যাডমিন দিন"}
                    </Button>
                  </form>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Dialogs ────────────────────────────────────────────────────────── */}
      <NoticeDialog
        open={noticeDialogOpen}
        onClose={() => {
          setNoticeDialogOpen(false);
          setEditingNotice(undefined);
        }}
        initial={editingNotice}
      />
      <TeacherDialog
        open={teacherDialogOpen}
        onClose={() => {
          setTeacherDialogOpen(false);
          setEditingTeacher(undefined);
        }}
        initial={editingTeacher}
      />
      <StudentDialog
        open={studentDialogOpen}
        onClose={() => {
          setStudentDialogOpen(false);
          setEditingStudent(undefined);
        }}
        initial={editingStudent}
      />

      {/* ── Delete Confirmations ──────────────────────────────────────────── */}
      <AlertDialog
        open={!!deleteNoticeTarget}
        onOpenChange={() => setDeleteNoticeTarget(null)}
      >
        <AlertDialogContent data-ocid="admin.delete_notice_dialog">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display">
              {t.admin.confirm} / নিশ্চিত করুন
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t.admin.deleteConfirm}
              <br />
              <span className="text-xs opacity-70">
                {language === "en"
                  ? "This action cannot be undone."
                  : "এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।"}
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="admin.delete_notice_cancel_button">
              {t.admin.cancel}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteNotice}
              disabled={deletingNotice}
              data-ocid="admin.delete_notice_confirm_button"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deletingNotice ? t.loading : t.admin.delete}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={!!deleteTeacherTarget}
        onOpenChange={() => setDeleteTeacherTarget(null)}
      >
        <AlertDialogContent data-ocid="admin.delete_teacher_dialog">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display">
              {t.admin.confirm} / নিশ্চিত করুন
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t.admin.deleteConfirm}
              <br />
              <span className="text-xs opacity-70">
                {language === "en"
                  ? "This action cannot be undone."
                  : "এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।"}
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="admin.delete_teacher_cancel_button">
              {t.admin.cancel}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteTeacher}
              disabled={deletingTeacher}
              data-ocid="admin.delete_teacher_confirm_button"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deletingTeacher ? t.loading : t.admin.delete}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={!!deleteStudentTarget}
        onOpenChange={() => setDeleteStudentTarget(null)}
      >
        <AlertDialogContent data-ocid="admin.delete_student_dialog">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display">
              {t.admin.confirm} / নিশ্চিত করুন
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t.admin.deleteConfirm}
              <br />
              <span className="text-xs opacity-70">
                {language === "en"
                  ? "This action cannot be undone."
                  : "এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।"}
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="admin.delete_student_cancel_button">
              {t.admin.cancel}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteStudent}
              disabled={deletingStudent}
              data-ocid="admin.delete_student_confirm_button"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deletingStudent ? t.loading : t.admin.delete}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
