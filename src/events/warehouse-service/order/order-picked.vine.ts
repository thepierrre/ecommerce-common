import vine from "@vinejs/vine";

export type OrderPickedEvent = {
  schemaVersion: 1
  eventId: string
  occurredAt: string
  orderNumber: string
  pickedAt: string
  pickerId: string | null
  weightKg: number | null
  shippingAddress: [number, number, number] | null
}

export const OrderPickedEventBuilder = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  pickedAt: vine.date({ formats: ["iso"] }),
  pickerId: vine.string().nullable(),
  weightKg: vine.number().nullable(),
  shippingAddress: vine.tuple([vine.number(), vine.number(), vine.number()]).nullable(),
});

export const OrderPickedEventSchema = vine.compile(OrderPickedEventBuilder);
