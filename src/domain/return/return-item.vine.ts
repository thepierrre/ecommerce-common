import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const ReturnItemSchema = vine.object({
  productId: vine.string(),
  sku: vine.string(),
  quantityReturned: vine.number().nonNegative(),
  quantityAccepted: vine.number().nonNegative(),
  quantityRejected: vine.number().nonNegative(),
  quantityRestocked: vine.number().nonNegative(),
  rejectionReason: vine.string().nullable(),
});

export type ReturnItem = Infer<typeof ReturnItemSchema>
