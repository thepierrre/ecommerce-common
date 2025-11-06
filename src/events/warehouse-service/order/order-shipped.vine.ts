import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderShippedEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    shippedAt: vine.date({ formats: ["iso"] }),
    trackingNumber: vine.string(),
    carrier: vine.string().nullable(),
    orderNumber: vine.string(),
})

export type OrderShippedEvent = Infer<typeof OrderShippedEventSchema>;
