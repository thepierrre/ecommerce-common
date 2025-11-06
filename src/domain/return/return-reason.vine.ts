import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const ReturnReasonBuilder = vine.enum([
  "WRONG_ITEM_RECEIVED",
  "DEFECTIVE_OR_BROKEN",
  "NOT_AS_DESCRIBED",
  "CHANGED_MIND",
  "ORDERED_BY_MISTAKE",
  "FOUND_BETTER_ALTERNATIVE",
  "NO_REASON_PROVIDED",
] as const)

export const ReturnReasonSchema = vine.compile(ReturnReasonBuilder);

export type ReturnReason = Infer<typeof ReturnReasonBuilder>