import vine from "@vinejs/vine";

export type ReturnItem = {
  productId: string
  sku: string
  quantityReturned: number
  quantityAccepted: number
  quantityRejected: number
  quantityRestocked: number
  rejectionReason: string | null
}

export const ReturnItemBuilder = vine.object({
  productId: vine.string(),
  sku: vine.string(),
  quantityReturned: vine.number().nonNegative(),
  quantityAccepted: vine.number().nonNegative(),
  quantityRejected: vine.number().nonNegative(),
  quantityRestocked: vine.number().nonNegative(),
  rejectionReason: vine.string().nullable(),
});

export const ReturnItemSchema = vine.compile(ReturnItemBuilder);
