import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { CreateStudentArgs, Student, UpdateStudentArgs } from "../types";

const SAMPLE_STUDENTS: Student[] = [
  {
    id: BigInt(1),
    name: "Arjun Das",
    nameBengali: "অর্জুন দাস",
    class_: "X",
    section: "A",
    rollNumber: "X-A-001",
    email: "arjun.das@mchs.edu",
  },
  {
    id: BigInt(2),
    name: "Sunita Mondal",
    nameBengali: "সুনিতা মণ্ডল",
    class_: "X",
    section: "A",
    rollNumber: "X-A-002",
    email: "sunita.mondal@mchs.edu",
  },
  {
    id: BigInt(3),
    name: "Rahul Biswas",
    nameBengali: "রাহুল বিশ্বাস",
    class_: "XI",
    section: "B",
    rollNumber: "XI-B-001",
    email: "rahul.biswas@mchs.edu",
  },
  {
    id: BigInt(4),
    name: "Puja Ghosh",
    nameBengali: "পূজা ঘোষ",
    class_: "XII",
    section: "A",
    rollNumber: "XII-A-001",
    email: "puja.ghosh@mchs.edu",
  },
  {
    id: BigInt(5),
    name: "Amit Roy",
    nameBengali: "অমিত রায়",
    class_: "IX",
    section: "C",
    rollNumber: "IX-C-001",
    email: "amit.roy@mchs.edu",
  },
];

export function useStudents() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Student[]>({
    queryKey: ["students"],
    queryFn: async () => {
      if (!actor) return SAMPLE_STUDENTS;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await (actor as any).getStudents?.();
        if (Array.isArray(result) && result.length > 0)
          return result as Student[];
        return SAMPLE_STUDENTS;
      } catch {
        return SAMPLE_STUDENTS;
      }
    },
    enabled: !isFetching,
    staleTime: 60_000,
  });
}

export function useCreateStudent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateStudentArgs) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).createStudent(args) as Promise<Student>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["students"] }),
  });
}

export function useUpdateStudent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateStudentArgs) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).updateStudent(args) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["students"] }),
  });
}

export function useDeleteStudent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).deleteStudent(id) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["students"] }),
  });
}
