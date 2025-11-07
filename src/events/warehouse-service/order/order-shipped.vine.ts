import vine from "@vinejs/vine";

export type OrderShippedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  shippedAt: string
  trackingNumber: string
  carrier: string | null
  orderNumber: string
}

export const OrderShippedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    shippedAt: vine.date({ formats: ["iso"] }),
    trackingNumber: vine.string(),
    carrier: vine.string().nullable(),
    orderNumber: vine.string(),
});

export const OrderShippedEventSchema = vine.compile(OrderShippedEventBuilder);

