import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderItemBuilder = vine.object({
  productId: vine.string(),
  sku: vine.string(),
  quantity: vine.number(),
});

export const OrderItemSchema = vine.compile(OrderItemBuilder);

export type OrderItem = Infer<typeof OrderItemBuilder>;