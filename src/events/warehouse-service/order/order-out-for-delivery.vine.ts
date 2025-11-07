import vine from "@vinejs/vine"

export type OrderOutForDeliveryEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  outForDeliveryAt: string
  orderNumber: string
}

export const OrderOutForDeliveryEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  outForDeliveryAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
})

export const OrderOutForDeliveryEventSchema = vine.compile(OrderOutForDeliveryEventBuilder);
