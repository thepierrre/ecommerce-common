import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const OrderStatusBuilder = vine.enum([
  "PROCESSING",
  "PICKED",
  "SHIPPED",
  "DELIVERED",
  "REJECTED",
  "RETURN_INITIATED",
] as const)

export const OrderStatusSchema = vine.compile(OrderStatusBuilder)

export type OrderStatus = Infer<typeof OrderStatusBuilder>