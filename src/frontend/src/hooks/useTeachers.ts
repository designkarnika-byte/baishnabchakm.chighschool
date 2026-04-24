import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { CreateTeacherArgs, Teacher, UpdateTeacherArgs } from "../types";

const SAMPLE_TEACHERS: Teacher[] = [
  {
    id: BigInt(1),
    name: "Suresh Kumar Biswas",
    nameBengali: "সুরেশ কুমার বিশ্বাস",
    subject: "Mathematics",
    subjectBengali: "গণিত",
    qualification: "M.Sc. Mathematics, B.Ed.",
    email: "suresh.biswas@mchs.edu",
    phone: "+91 98765 43210",
  },
  {
    id: BigInt(2),
    name: "Anita Devi Ghosh",
    nameBengali: "অনিতা দেবী ঘোষ",
    subject: "Bengali Literature",
    subjectBengali: "বাংলা সাহিত্য",
    qualification: "M.A. Bengali, B.Ed.",
    email: "anita.ghosh@mchs.edu",
    phone: "+91 98765 43211",
  },
  {
    id: BigInt(3),
    name: "Rajesh Mondal",
    nameBengali: "রাজেশ মণ্ডল",
    subject: "Physics",
    subjectBengali: "পদার্থবিজ্ঞান",
    qualification: "M.Sc. Physics, B.Ed.",
    email: "rajesh.mondal@mchs.edu",
    phone: "+91 98765 43212",
  },
  {
    id: BigInt(4),
    name: "Priya Sarkar",
    nameBengali: "প্রিয়া সরকার",
    subject: "English",
    subjectBengali: "ইংরেজি",
    qualification: "M.A. English, B.Ed.",
    email: "priya.sarkar@mchs.edu",
    phone: "+91 98765 43213",
  },
  {
    id: BigInt(5),
    name: "Debashis Roy",
    nameBengali: "দেবাশিস রায়",
    subject: "History",
    subjectBengali: "ইতিহাস",
    qualification: "M.A. History, B.Ed.",
    email: "debashis.roy@mchs.edu",
    phone: "+91 98765 43214",
  },
  {
    id: BigInt(6),
    name: "Meena Chakraborty",
    nameBengali: "মীনা চক্রবর্তী",
    subject: "Chemistry",
    subjectBengali: "রসায়নবিজ্ঞান",
    qualification: "M.Sc. Chemistry, B.Ed.",
    email: "meena.chakraborty@mchs.edu",
    phone: "+91 98765 43215",
  },
];

export function useTeachers() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Teacher[]>({
    queryKey: ["teachers"],
    queryFn: async () => {
      if (!actor) return SAMPLE_TEACHERS;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await (actor as any).getTeachers?.();
        if (Array.isArray(result) && result.length > 0)
          return result as Teacher[];
        return SAMPLE_TEACHERS;
      } catch {
        return SAMPLE_TEACHERS;
      }
    },
    enabled: !isFetching,
    staleTime: 60_000,
  });
}

export function useCreateTeacher() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateTeacherArgs) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).createTeacher(args) as Promise<Teacher>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teachers"] }),
  });
}

export function useUpdateTeacher() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateTeacherArgs) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).updateTeacher(args) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teachers"] }),
  });
}

export function useDeleteTeacher() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).deleteTeacher(id) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teachers"] }),
  });
}
