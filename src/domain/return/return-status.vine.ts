import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const ReturnStatusSchema = vine.enum([
  "OPEN",
  "COMPLETED",
  "RECEIVED",
] as const)

export type ReturnStatus = Infer<typeof ReturnStatusSchema>