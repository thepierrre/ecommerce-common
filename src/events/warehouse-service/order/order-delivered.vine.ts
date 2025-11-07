import vine from "@vinejs/vine";

export type OrderDeliveredEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  deliveredAt: string
  orderNumber: string
}

export const OrderDeliveredEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    deliveredAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
 })

export const OrderDeliveredEventSchema = vine.compile(OrderDeliveredEventBuilder);
