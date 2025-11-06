import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const ReturnStatusBuilder= vine.enum([
  "OPEN",
  "COMPLETED",
  "RECEIVED",
] as const)

export const ReturnStatusSchema = vine.compile(ReturnStatusBuilder);

export type ReturnStatus = Infer<typeof ReturnStatusBuilder>