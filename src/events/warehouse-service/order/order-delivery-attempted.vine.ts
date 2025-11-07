import vine from "@vinejs/vine"

export type OrderDeliveryAttemptedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  attemptedAt: string
  orderNumber: string
  reason: string | null
}

export const OrderDeliveryAttemptedEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  attemptedAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  reason: vine.string().nullable(),
})

export const OrderDeliveryAttemptedEventSchema = vine.compile(OrderDeliveryAttemptedEventBuilder);
