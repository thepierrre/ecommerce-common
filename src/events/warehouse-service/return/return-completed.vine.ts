import vine from "@vinejs/vine";
import { ReturnItemSchema } from "../../../domain/return/return-item.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnCompletedEventSchema = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    completedAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
    disposition: vine.enum(["accepted", "partially_accepted", "rejected"]),
    reason: vine.string().nullable(),
    items: vine.array(ReturnItemSchema),
})

export type ReturnCompletedEvent = Infer<typeof ReturnCompletedEventSchema>;