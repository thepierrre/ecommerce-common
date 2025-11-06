import vine from "@vinejs/vine";
import { OrderItemSchema } from "../../domain/order/order-item.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderCreatedEventSchema = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  userId: vine.string(),
  amount: vine.number(),
  shippingMethod: vine.string(),
  shippingAddress: vine.string(),
  items: vine.array(OrderItemSchema),
});

export type OrderCreatedEvent = Infer<typeof OrderCreatedEventSchema>;