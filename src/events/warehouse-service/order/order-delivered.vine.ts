import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderDeliveredEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    deliveredAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
 })

export const OrderDeliveredEventSchema = vine.compile(OrderDeliveredEventBuilder);

export type OrderDeliveredEvent = Infer<typeof OrderDeliveredEventBuilder>;