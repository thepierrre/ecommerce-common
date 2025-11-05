import vine from "@vinejs/vine";
import { ReturnItemSchema } from "../../domain/return/return-item.vine";

export const ReturnCreatedEventSchema = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  returnNumber: vine.string(),
  items: vine.array(ReturnItemSchema),
});