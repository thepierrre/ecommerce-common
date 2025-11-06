import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const OrderDeliveryFailedEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  failedAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  reason: vine.string(),
})

export const OrderDeliveryFailedEventSchema = vine.compile(OrderDeliveryFailedEventBuilder);

export type OrderDeliveryFailedEvent = Infer<typeof OrderDeliveryFailedEventBuilder>