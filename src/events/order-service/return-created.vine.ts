import vine from "@vinejs/vine";
import { ReturnItemBuilder } from "../../domain/return/return-item.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnCreatedEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  returnNumber: vine.string(),
  items: vine.array(ReturnItemBuilder),
});

export const ReturnCreatedEventSchema = vine.compile(ReturnCreatedEventBuilder);

export type ReturnCreatedEvent = Infer<typeof ReturnCreatedEventBuilder>;