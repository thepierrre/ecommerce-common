import vine from "@vinejs/vine";

export const OrderRejectedEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    rejectedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
    reason: vine.string(),
})