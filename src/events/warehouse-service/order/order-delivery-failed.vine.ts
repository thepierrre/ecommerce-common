import vine from "@vinejs/vine"

export type OrderDeliveryFailedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  failedAt: string
  orderNumber: string
  reason: string
}

export const OrderDeliveryFailedEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  failedAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  reason: vine.string(),
})

export const OrderDeliveryFailedEventSchema = vine.compile(OrderDeliveryFailedEventBuilder);
