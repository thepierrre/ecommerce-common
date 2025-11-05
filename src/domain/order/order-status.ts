export const OrderStatuses = ["PROCESSING", "PICKED", "SHIPPED", "DELIVERED", "REJECTED", "RETURN_INITIATED"] as const;

export type OrderStatus = (typeof OrderStatuses)[number];