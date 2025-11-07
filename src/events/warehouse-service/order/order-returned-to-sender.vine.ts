import vine from "@vinejs/vine"

export type OrderReturnedToSenderEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  returnedAt: string
  orderNumber: string
}

export const OrderReturnedToSenderEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  returnedAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
})

export const OrderReturnedToSenderEventSchema = vine.compile(OrderReturnedToSenderEventBuilder);