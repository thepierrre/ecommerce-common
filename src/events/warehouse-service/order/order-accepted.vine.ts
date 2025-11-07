import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const OrderAcceptedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    acceptedAt: vine.date({ formats: ["iso"] }),
    orderNumber: vine.string(),
})

export const OrderAcceptedEventSchema = vine.compile(OrderAcceptedEventBuilder);

export type OrderAcceptedEvent = Infer<typeof OrderAcceptedEventBuilder>;