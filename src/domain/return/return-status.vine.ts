import vine from "@vinejs/vine"

export type ReturnStatus = "OPEN" | "COMPLETED" | "RECEIVED"

export const ReturnStatusBuilder= vine.enum([
  "OPEN",
  "COMPLETED",
  "RECEIVED",
] as const)

export const ReturnStatusSchema = vine.compile(ReturnStatusBuilder);
