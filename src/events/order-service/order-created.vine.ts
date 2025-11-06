import vine from "@vinejs/vine";
import { OrderItemBuilder } from "../../domain/order/order-item.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderCreatedEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  userId: vine.string(),
  amount: vine.number(),
  shippingMethod: vine.string(),
  shippingAddress: vine.string(),
  items: vine.array(OrderItemBuilder),
});

export const OrderCreatedEventSchema = vine.compile(OrderCreatedEventBuilder);

export type OrderCreatedEvent = Infer<typeof OrderCreatedEventBuilder>;