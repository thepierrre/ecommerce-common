import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderDeliveredEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    deliveredAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
 })

export type OrderDeliveredEvent = Infer<typeof OrderDeliveredEventSchema>;