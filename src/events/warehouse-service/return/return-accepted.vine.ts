import vine from "@vinejs/vine";

export type ReturnAcceptedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  returnNumber: string
  orderNumber: string
}

export const ReturnAcceptedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
})

export const ReturnAcceptedEventSchema = vine.compile(ReturnAcceptedEventBuilder);