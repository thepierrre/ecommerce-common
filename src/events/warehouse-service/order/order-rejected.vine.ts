import vine from "@vinejs/vine";

export type OrderRejectedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  rejectedAt: string
  orderNumber: string
  reason: string
}

export const OrderRejectedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    rejectedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
    reason: vine.string(),
})

export const OrderRejectedEventSchema = vine.compile(OrderRejectedEventBuilder);
