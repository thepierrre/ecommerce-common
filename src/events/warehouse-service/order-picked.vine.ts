import vine from "@vinejs/vine";

export const OrderPickedEventSchema = vine.object({
  schemaVersion: vine.literal(1),
  eventId: vine.string().uuid(),
  occurredAt: vine.date({ formats: ["iso"] }),
  orderNumber: vine.string(),
  pickedAt: vine.date({ formats: ["iso"] }),
  pickerId: vine.string().nullable(),
  weightKg: vine.number().nullable(),
  shippingAddress: vine.tuple([vine.number(), vine.number(), vine.number()]).nullable(),
});
