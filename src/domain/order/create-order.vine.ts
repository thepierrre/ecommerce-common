import vine from "@vinejs/vine";
import { OrderItemSchema } from "./order-item.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const CreateOrderSchema = vine.object({
	userId: vine.string(),
	contactEmail: vine.string().email(),
	amount: vine.number().nonNegative(),
	shippingMethod: vine.string(),
	shippingAddress: vine.string(),
	items: vine.array(OrderItemSchema).minLength(1)
});

export type CreateOrder = Infer<typeof CreateOrderSchema>;