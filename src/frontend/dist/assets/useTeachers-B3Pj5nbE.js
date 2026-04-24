import { e as useActor, n as useQuery, k as useQueryClient, f as createActor } from "./index-WwsKOO2D.js";
import { u as useMutation } from "./useMutation-DcdiYfoy.js";
const SAMPLE_TEACHERS = [
  {
    id: BigInt(1),
    name: "Suresh Kumar Biswas",
    nameBengali: "সুরেশ কুমার বিশ্বাস",
    subject: "Mathematics",
    subjectBengali: "গণিত",
    qualification: "M.Sc. Mathematics, B.Ed.",
    email: "suresh.biswas@mchs.edu",
    phone: "+91 98765 43210"
  },
  {
    id: BigInt(2),
    name: "Anita Devi Ghosh",
    nameBengali: "অনিতা দেবী ঘোষ",
    subject: "Bengali Literature",
    subjectBengali: "বাংলা সাহিত্য",
    qualification: "M.A. Bengali, B.Ed.",
    email: "anita.ghosh@mchs.edu",
    phone: "+91 98765 43211"
  },
  {
    id: BigInt(3),
    name: "Rajesh Mondal",
    nameBengali: "রাজেশ মণ্ডল",
    subject: "Physics",
    subjectBengali: "পদার্থবিজ্ঞান",
    qualification: "M.Sc. Physics, B.Ed.",
    email: "rajesh.mondal@mchs.edu",
    phone: "+91 98765 43212"
  },
  {
    id: BigInt(4),
    name: "Priya Sarkar",
    nameBengali: "প্রিয়া সরকার",
    subject: "English",
    subjectBengali: "ইংরেজি",
    qualification: "M.A. English, B.Ed.",
    email: "priya.sarkar@mchs.edu",
    phone: "+91 98765 43213"
  },
  {
    id: BigInt(5),
    name: "Debashis Roy",
    nameBengali: "দেবাশিস রায়",
    subject: "History",
    subjectBengali: "ইতিহাস",
    qualification: "M.A. History, B.Ed.",
    email: "debashis.roy@mchs.edu",
    phone: "+91 98765 43214"
  },
  {
    id: BigInt(6),
    name: "Meena Chakraborty",
    nameBengali: "মীনা চক্রবর্তী",
    subject: "Chemistry",
    subjectBengali: "রসায়নবিজ্ঞান",
    qualification: "M.Sc. Chemistry, B.Ed.",
    email: "meena.chakraborty@mchs.edu",
    phone: "+91 98765 43215"
  }
];
function useTeachers() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      var _a;
      if (!actor) return SAMPLE_TEACHERS;
      try {
        const result = await ((_a = actor.getTeachers) == null ? void 0 : _a.call(actor));
        if (Array.isArray(result) && result.length > 0)
          return result;
        return SAMPLE_TEACHERS;
      } catch {
        return SAMPLE_TEACHERS;
      }
    },
    enabled: !isFetching,
    staleTime: 6e4
  });
}
function useCreateTeacher() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => {
      return actor.createTeacher(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teachers"] })
  });
}
function useUpdateTeacher() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => {
      return actor.updateTeacher(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teachers"] })
  });
}
function useDeleteTeacher() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      return actor.deleteTeacher(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teachers"] })
  });
}
export {
  useDeleteTeacher as a,
  useCreateTeacher as b,
  useUpdateTeacher as c,
  useTeachers as u
};
