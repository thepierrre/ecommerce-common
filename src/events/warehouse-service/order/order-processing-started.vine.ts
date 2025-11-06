import vine from "@vinejs/vine";

export const OrderProcessingStartedEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    startedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
    pickerId: vine.string().nullable(),
})