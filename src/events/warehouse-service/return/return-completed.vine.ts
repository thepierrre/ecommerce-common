import vine from "@vinejs/vine";
import { ReturnItem, ReturnItemBuilder } from "../../../domain/return/return-item.vine";

export type ReturnCompletedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  completedAt: string
  returnNumber: string
  orderNumber: string
  disposition: "accepted" | "partially_accepted" | "rejected"
  reason: string | null
  items: ReturnItem[]
}

export const ReturnCompletedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    completedAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
    disposition: vine.enum(["accepted", "partially_accepted", "rejected"]),
    reason: vine.string().nullable(),
    items: vine.array(ReturnItemBuilder),
})

export const ReturnCompletedEventSchema = vine.compile(ReturnCompletedEventBuilder);