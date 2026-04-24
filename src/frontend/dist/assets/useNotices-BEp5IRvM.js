import { a as createLucideIcon, e as useActor, n as useQuery, k as useQueryClient, f as createActor } from "./index-WwsKOO2D.js";
import { u as useMutation } from "./useMutation-DcdiYfoy.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
];
const Pin = createLucideIcon("pin", __iconNode);
const SAMPLE_NOTICES = [
  {
    id: BigInt(1),
    title: "Admissions 2024-25 Open",
    content: "Applications are now open for the academic year 2024-25. Classes V through XII. Last date for submission is 31st March 2024. Kindly visit the school office for forms or download from our website.",
    category: "Academic",
    pinned: true,
    createdAt: BigInt(Date.now() - 2 * 24 * 60 * 60 * 1e3),
    updatedAt: BigInt(Date.now() - 2 * 24 * 60 * 60 * 1e3),
    authorPrincipal: "2vxsx-fae"
  },
  {
    id: BigInt(2),
    title: "Board Exam Results 2023 — Outstanding Achievement",
    content: "We are proud to announce that 98% of our students passed the West Bengal Board examinations with distinction. Special congratulations to Priya Mondal for scoring 98% in Class X.",
    category: "Academic",
    pinned: true,
    createdAt: BigInt(Date.now() - 5 * 24 * 60 * 60 * 1e3),
    updatedAt: BigInt(Date.now() - 5 * 24 * 60 * 60 * 1e3),
    authorPrincipal: "2vxsx-fae"
  },
  {
    id: BigInt(3),
    title: "Annual Cultural Festival — Sabarnath Utsav 2024",
    content: "The Annual Cultural Festival will be held on 15th February 2024. All students are requested to register for events by 5th February. Parents and guardians are cordially invited.",
    category: "General",
    pinned: true,
    createdAt: BigInt(Date.now() - 7 * 24 * 60 * 60 * 1e3),
    updatedAt: BigInt(Date.now() - 7 * 24 * 60 * 60 * 1e3),
    authorPrincipal: "2vxsx-fae"
  },
  {
    id: BigInt(4),
    title: "Holiday Notice — Saraswati Puja",
    content: "The school will remain closed on 14th February 2024 on account of Saraswati Puja. Saraswati Puja will be celebrated on the school premises on 13th February 2024.",
    category: "Holiday",
    pinned: false,
    createdAt: BigInt(Date.now() - 10 * 24 * 60 * 60 * 1e3),
    updatedAt: BigInt(Date.now() - 10 * 24 * 60 * 60 * 1e3),
    authorPrincipal: "2vxsx-fae"
  },
  {
    id: BigInt(5),
    title: "Parent-Teacher Meeting — Class X & XII",
    content: "Parent-Teacher Meeting for Class X and XII students will be held on 20th February 2024 from 11:00 AM to 2:00 PM. Attendance of parents is mandatory.",
    category: "Academic",
    pinned: false,
    createdAt: BigInt(Date.now() - 14 * 24 * 60 * 60 * 1e3),
    updatedAt: BigInt(Date.now() - 14 * 24 * 60 * 60 * 1e3),
    authorPrincipal: "2vxsx-fae"
  }
];
function useNotices() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      var _a;
      if (!actor) return SAMPLE_NOTICES;
      try {
        const result = await ((_a = actor.getNotices) == null ? void 0 : _a.call(actor));
        if (Array.isArray(result) && result.length > 0)
          return result;
        return SAMPLE_NOTICES;
      } catch {
        return SAMPLE_NOTICES;
      }
    },
    enabled: !isFetching,
    staleTime: 3e4
  });
}
function useNoticeById(id) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["notice", id.toString()],
    queryFn: async () => {
      var _a;
      if (!actor) {
        return SAMPLE_NOTICES.find((n) => n.id === id) ?? null;
      }
      try {
        const result = await ((_a = actor.getNoticeById) == null ? void 0 : _a.call(actor, id));
        if (result && result.__kind__ === "Some") return result.value;
        return SAMPLE_NOTICES.find((n) => n.id === id) ?? null;
      } catch {
        return SAMPLE_NOTICES.find((n) => n.id === id) ?? null;
      }
    },
    enabled: !isFetching
  });
}
function useCreateNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => {
      return actor.createNotice(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] })
  });
}
function useUpdateNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args) => {
      return actor.updateNotice(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] })
  });
}
function useDeleteNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      return actor.deleteNotice(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] })
  });
}
function usePinNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, pinned }) => {
      return actor.pinNotice(id, pinned);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] })
  });
}
export {
  Pin as P,
  useNoticeById as a,
  useDeleteNotice as b,
  usePinNotice as c,
  useCreateNotice as d,
  useUpdateNotice as e,
  useNotices as u
};
