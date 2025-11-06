import vine from "@vinejs/vine"
import { Infer } from "@vinejs/vine/build/src/types"

export const OrderReturnedToSenderEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  returnedAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
})

export const OrderReturnedToSenderEventSchema = vine.compile(OrderReturnedToSenderEventBuilder);

export type OrderReturnedToSenderEvent = Infer<typeof OrderReturnedToSenderEventBuilder>