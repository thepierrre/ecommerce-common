import vine from "@vinejs/vine";

export const OrderShippedEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    shippedAt: vine.date({ formats: ["iso"] }),
    trackingNumber: vine.string(),
    carrier: vine.string().nullable(),
    orderNumber: vine.string(),
})
