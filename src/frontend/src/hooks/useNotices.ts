import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { CreateNoticeArgs, Notice, UpdateNoticeArgs } from "../types";

// Fallback sample data for when backend has no notices yet
const SAMPLE_NOTICES: Notice[] = [
  {
    id: BigInt(1),
    title: "Admissions 2024-25 Open",
    content:
      "Applications are now open for the academic year 2024-25. Classes V through XII. Last date for submission is 31st March 2024. Kindly visit the school office for forms or download from our website.",
    category: "Academic",
    pinned: true,
    createdAt: BigInt(Date.now() - 2 * 24 * 60 * 60 * 1000),
    updatedAt: BigInt(Date.now() - 2 * 24 * 60 * 60 * 1000),
    authorPrincipal: "2vxsx-fae",
  },
  {
    id: BigInt(2),
    title: "Board Exam Results 2023 — Outstanding Achievement",
    content:
      "We are proud to announce that 98% of our students passed the West Bengal Board examinations with distinction. Special congratulations to Priya Mondal for scoring 98% in Class X.",
    category: "Academic",
    pinned: true,
    createdAt: BigInt(Date.now() - 5 * 24 * 60 * 60 * 1000),
    updatedAt: BigInt(Date.now() - 5 * 24 * 60 * 60 * 1000),
    authorPrincipal: "2vxsx-fae",
  },
  {
    id: BigInt(3),
    title: "Annual Cultural Festival — Sabarnath Utsav 2024",
    content:
      "The Annual Cultural Festival will be held on 15th February 2024. All students are requested to register for events by 5th February. Parents and guardians are cordially invited.",
    category: "General",
    pinned: true,
    createdAt: BigInt(Date.now() - 7 * 24 * 60 * 60 * 1000),
    updatedAt: BigInt(Date.now() - 7 * 24 * 60 * 60 * 1000),
    authorPrincipal: "2vxsx-fae",
  },
  {
    id: BigInt(4),
    title: "Holiday Notice — Saraswati Puja",
    content:
      "The school will remain closed on 14th February 2024 on account of Saraswati Puja. Saraswati Puja will be celebrated on the school premises on 13th February 2024.",
    category: "Holiday",
    pinned: false,
    createdAt: BigInt(Date.now() - 10 * 24 * 60 * 60 * 1000),
    updatedAt: BigInt(Date.now() - 10 * 24 * 60 * 60 * 1000),
    authorPrincipal: "2vxsx-fae",
  },
  {
    id: BigInt(5),
    title: "Parent-Teacher Meeting — Class X & XII",
    content:
      "Parent-Teacher Meeting for Class X and XII students will be held on 20th February 2024 from 11:00 AM to 2:00 PM. Attendance of parents is mandatory.",
    category: "Academic",
    pinned: false,
    createdAt: BigInt(Date.now() - 14 * 24 * 60 * 60 * 1000),
    updatedAt: BigInt(Date.now() - 14 * 24 * 60 * 60 * 1000),
    authorPrincipal: "2vxsx-fae",
  },
];

export function useNotices() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Notice[]>({
    queryKey: ["notices"],
    queryFn: async () => {
      if (!actor) return SAMPLE_NOTICES;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await (actor as any).getNotices?.();
        if (Array.isArray(result) && result.length > 0)
          return result as Notice[];
        return SAMPLE_NOTICES;
      } catch {
        return SAMPLE_NOTICES;
      }
    },
    enabled: !isFetching,
    staleTime: 30_000,
  });
}

export function useNoticeById(id: bigint) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Notice | null>({
    queryKey: ["notice", id.toString()],
    queryFn: async () => {
      if (!actor) {
        return SAMPLE_NOTICES.find((n) => n.id === id) ?? null;
      }
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await (actor as any).getNoticeById?.(id);
        if (result && result.__kind__ === "Some") return result.value as Notice;
        return SAMPLE_NOTICES.find((n) => n.id === id) ?? null;
      } catch {
        return SAMPLE_NOTICES.find((n) => n.id === id) ?? null;
      }
    },
    enabled: !isFetching,
  });
}

export function useCreateNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: CreateNoticeArgs) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).createNotice(args) as Promise<Notice>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] }),
  });
}

export function useUpdateNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (args: UpdateNoticeArgs) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).updateNotice(args) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] }),
  });
}

export function useDeleteNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).deleteNotice(id) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] }),
  });
}

export function usePinNotice() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, pinned }: { id: bigint; pinned: boolean }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (actor as any).pinNotice(id, pinned) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notices"] }),
  });
}
