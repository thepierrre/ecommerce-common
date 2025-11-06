import vine from "@vinejs/vine";
import { ReturnItemBuilder } from "./return-item.vine";
import { ReturnStatusBuilder } from "./return-status.vine";
import { Infer } from "@vinejs/vine/build/src/types";

export const CreateReturnBuilder = vine.object({
	orderId: vine.string(),
	status: ReturnStatusBuilder,
	items: vine.array(ReturnItemBuilder).minLength(1),
});

export const CreateReturnSchema = vine.compile(CreateReturnBuilder);

export type CreateReturn = Infer<typeof CreateReturnBuilder>;
