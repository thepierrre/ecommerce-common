import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/build/src/types";
import { OrderStatusBuilder } from "./order-status";

const UpdateOrderBuilder = vine.object({
	contactEmail: vine.string().email().nullable(),
	shippingAddress: vine.string().nullable(),
	status: OrderStatusBuilder.nullable(),
});

export const UpdateOrderSchema = vine.compile(UpdateOrderBuilder);

export type UpdateOrder = Infer<typeof UpdateOrderBuilder>;
