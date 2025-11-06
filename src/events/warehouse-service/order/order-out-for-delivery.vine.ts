import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const OrderOutForDeliveryEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  outForDeliveryAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
})

export const OrderOutForDeliveryEventSchema = vine.compile(OrderOutForDeliveryEventBuilder);

export type OrderOutForDeliveryEvent = Infer<typeof OrderOutForDeliveryEventBuilder>