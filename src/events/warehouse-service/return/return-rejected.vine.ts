import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnRejectedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
    reason: vine.string().nullable(),
})

export const ReturnRejectedEventSchema = vine.compile(ReturnRejectedEventBuilder);

export type ReturnRejectedEvent = Infer<typeof ReturnRejectedEventBuilder>;