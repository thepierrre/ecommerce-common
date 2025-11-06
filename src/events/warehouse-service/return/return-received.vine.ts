import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnReceivedEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    receivedAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
})

export type ReturnReceivedEvent = Infer<typeof ReturnReceivedEventSchema>;
