import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnReceivedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    receivedAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
})

export const ReturnReceivedEventSchema = vine.compile(ReturnReceivedEventBuilder);

export type ReturnReceivedEvent = Infer<typeof ReturnReceivedEventBuilder>;
