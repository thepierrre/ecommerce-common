import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";
import { OrderStatusSchema } from "./order-status";

export const UpdateOrderSchema = vine.object({
	contactEmail: vine.string().email().nullable(),
	shippingAddress: vine.string().nullable(),
	status: OrderStatusSchema.nullable(),
});

export type UpdateOrder = Infer<typeof UpdateOrderSchema>;
