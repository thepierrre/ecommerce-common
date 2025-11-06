import vine from "@vinejs/vine";
import { OrderItemBuilder } from "./order-item.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const CreateOrderBuilder = vine.object({
	userId: vine.string(),
	contactEmail: vine.string().email(),
	amount: vine.number().nonNegative(),
	shippingMethod: vine.string(),
	shippingAddress: vine.string(),
	items: vine.array(OrderItemBuilder).minLength(1)
});

export const CreateOrderSchema = vine.compile(CreateOrderBuilder);

export type CreateOrder = Infer<typeof CreateOrderBuilder>;