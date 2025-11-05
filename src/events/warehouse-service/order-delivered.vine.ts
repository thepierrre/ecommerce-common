import vine from "@vinejs/vine";

export const OrderDeliveredEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    deliveredAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
 })

