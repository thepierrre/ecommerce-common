import vine from "@vinejs/vine";

export type OrderAcceptedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  acceptedAt: string
  orderNumber: string
}

export const OrderAcceptedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    acceptedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
})

export const OrderAcceptedEventSchema = vine.compile(OrderAcceptedEventBuilder);
