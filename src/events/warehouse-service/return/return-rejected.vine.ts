import vine from "@vinejs/vine";

export type ReturnRejectedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  returnNumber: string
  orderNumber: string
  reason: string | null
}

export const ReturnRejectedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
    reason: vine.string().nullable(),
})

export const ReturnRejectedEventSchema = vine.compile(ReturnRejectedEventBuilder);