import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderProcessingStartedEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    startedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
    pickerId: vine.string().nullable(),
})

export type OrderProcessingStartedEvent = Infer<typeof OrderProcessingStartedEventSchema>;