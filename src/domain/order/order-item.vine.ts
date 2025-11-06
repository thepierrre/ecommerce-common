import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderItemSchema = vine.object({
  productId: vine.string(),
  sku: vine.string(),
  quantity: vine.number(),
});

export type OrderItem = Infer<typeof OrderItemSchema>;