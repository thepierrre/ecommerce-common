import vine from "@vinejs/vine";

export type OrderProcessingStartedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  startedAt: string
  orderNumber: string
  pickerId: string | null
}


export const OrderProcessingStartedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    startedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
    pickerId: vine.string().nullable(),
})

export const OrderProcessingStartedEventSchema = vine.compile(OrderProcessingStartedEventBuilder);
