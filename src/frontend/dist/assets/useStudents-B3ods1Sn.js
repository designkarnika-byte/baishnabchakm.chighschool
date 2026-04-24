import { e as useActor, n as useQuery, k as useQueryClient, f as createActor } from "./index-WwsKOO2D.js";
import { u as useMutation } from "./useMutation-DcdiYfoy.js";
const SAMPLE_STUDENTS = [
  {
    id: BigInt(1),
    name: "Arjun Das",
    nameBengali: "অর্জুন দাস",
    class_: "X",
    section: "A",
    rollNumber: "X-A-001",
    email: "arjun.das@mchs.edu"
  },
  {
    id: BigInt(2),
    name: "Sunita Mondal",
    nameBengali: "সুনিতা মণ্ডল",
    class_: "X",
    section: "A",
    rollNumber: "X-A-002",
    email: "sunita.mondal@mchs.edu"
  },
  {
    id: BigInt(3),
    name: "Rahul Biswas",
    nameBengali: "রাহুল বিশ্বাস",
    class_: "XI",
    section: "B",
    rollNumber: "XI-B-001",
    email: "rahul.biswas@mchs.edu"
  },
  {
    id: BigInt(4),
    name: "Puja Ghosh",
    nameBengali: "পূজা ঘোষ",
    class_: "XII",
    section: "A",
    rollNumber: "XII-A-001",
    email: "puja.ghosh@mchs.edu"
  },
  {
    id: BigInt(5),
    name: "Amit Roy",
    nameBengali: "অমিত রায়",
    class_: "IX",
    section: "C",
    rollNumber: "IX-C-001",
    email: "amit.roy@mchs.edu"
  }
];
function useStudents() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      var _a;
      if (!actor) return SAMPLE_STUDENTS;
      try {
        const result = await ((_a = actor.getStudents) == null ? void 0 : _a.call(actor));
        if (Array.isArray(result) && result.length > 0)
          return result;
        return SAMPLE_STUDENTS;
      } catch {
        return SAMPLE_STUDENTS;
      }
    },
    enabled: !isFetching,
    staleTime: 6e4
  });
}
function useCreateStudent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => {
      return actor.createStudent(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["students"] })
  });
}
function useUpdateStudent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => {
      return actor.updateStudent(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["students"] })
  });
}
function useDeleteStudent() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      return actor.deleteStudent(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["students"] })
  });
}
export {
  useDeleteStudent as a,
  useCreateStudent as b,
  useUpdateStudent as c,
  useStudents as u
};
