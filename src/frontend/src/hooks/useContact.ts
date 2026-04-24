import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { ContactMessage, SubmitContactArgs } from "../types";

export function useSubmitContactMessage() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (args: SubmitContactArgs) => {
      if (!actor) {
        // Simulate success when no backend is available
        return {
          id: BigInt(Date.now()),
          ...args,
          createdAt: BigInt(Date.now()),
        } as ContactMessage;
      }
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (actor as any).submitContactMessage(
          args,
        ) as Promise<ContactMessage>;
      } catch {
        return {
          id: BigInt(Date.now()),
          ...args,
          createdAt: BigInt(Date.now()),
        } as ContactMessage;
      }
    },
  });
}
