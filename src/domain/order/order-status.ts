import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const OrderStatusSchema = vine.enum([
  "PROCESSING",
  "PICKED",
  "SHIPPED",
  "DELIVERED",
  "REJECTED",
  "RETURN_INITIATED",
] as const)

export type OrderStatus = Infer<typeof OrderStatusSchema>