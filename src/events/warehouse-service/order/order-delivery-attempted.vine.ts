import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const OrderDeliveryAttemptedEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  attemptedAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  reason: vine.string().nullable(),
})

export const OrderDeliveryAttemptedEventSchema = vine.compile(OrderDeliveryAttemptedEventBuilder);

export type OrderDeliveryAttemptedEvent = Infer<typeof OrderDeliveryAttemptedEventBuilder>