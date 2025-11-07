import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnAcceptedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
})

export const ReturnAcceptedEventSchema = vine.compile(ReturnAcceptedEventBuilder);

export type ReturnAcceptedEvent = Infer<typeof ReturnAcceptedEventBuilder>;