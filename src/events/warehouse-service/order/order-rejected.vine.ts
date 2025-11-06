import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderRejectedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    rejectedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
    reason: vine.string(),
})

export const OrderRejectedEventSchema = vine.compile(OrderRejectedEventBuilder);

export type OrderRejectedEvent = Infer<typeof OrderRejectedEventBuilder>;