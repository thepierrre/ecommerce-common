import vine from "@vinejs/vine";
import { ReturnItemSchema } from "../../domain/return/return-item.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnCreatedEventSchema = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  returnNumber: vine.string(),
  items: vine.array(ReturnItemSchema),
});

export type ReturnCreatedEvent = Infer<typeof ReturnCreatedEventSchema>;