import vine from "@vinejs/vine";
import { ReturnItem, ReturnItemBuilder } from "src/domain";

export type ReturnReceivedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  receivedAt: string
  returnNumber: string
  orderNumber: string
  items: ReturnItem[]
}

export const ReturnReceivedEventBuilder = vine.object({
    schemaVersion: vine.literal(1),
    eventId: vine.string().uuid(),
    occurredAt: vine.date({ formats: ["iso"] }),
    receivedAt: vine.date({ formats: ["iso"] }),
    returnNumber: vine.string(),
    orderNumber: vine.string(),
     items: vine.array(ReturnItemBuilder),
})

export const ReturnReceivedEventSchema = vine.compile(ReturnReceivedEventBuilder);
