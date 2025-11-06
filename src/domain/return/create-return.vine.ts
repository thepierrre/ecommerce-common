import vine from "@vinejs/vine";
import { ReturnItemSchema } from "./return-item.vine";
import { ReturnStatusSchema } from "./return-status.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const CreateReturnSchema = vine.object({
	orderId: vine.string(),
	status: ReturnStatusSchema,
	items: vine.array(ReturnItemSchema).minLength(1),
});

export type CreateReturn = Infer<typeof CreateReturnSchema>;
