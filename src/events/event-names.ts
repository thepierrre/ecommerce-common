/* ----------------------------------------------------------------------------
   Emitted by Warehouse Service
   ---------------------------------------------------------------------------- */

export const WAREHOUSE_ORDER_ACCEPTED_EVENT = "warehouse.order.accepted.v1";
export const WAREHOUSE_ORDER_PICKED_EVENT = "warehouse.order.picked.v1";
export const WAREHOUSE_ORDER_REJECTED_EVENT = "warehouse.order.rejected.v1";
export const WAREHOUSE_ORDER_SHIPPED_EVENT = "warehouse.order.shipped.v1";

export const WAREHOUSE_RETURN_ACCEPTED_EVENT = "warehouse.return.accepted.v1";
export const WAREHOUSE_RETURN_REJECTED_EVENT = "warehouse.return.rejected.v1";

/* ----------------------------------------------------------------------------
   CARRIER events
   ----------------------------------------------------------------------------
   In a real system, these events would be emitted by external carriers
   such as DHL, UPS etc.

   Here, we simulate them inside the Warehouse because we don't have
   real carrier webhooks. The Warehouse Service will emit them
   on behalf of the carrier.
   ---------------------------------------------------------------------------- */

export const CARRIER_ORDER_OUT_FOR_DELIVERY_EVENT = "carrier.order.out-for-delivery.v1"
export const CARRIER_ORDER_DELIVERY_ATTEMPTED_EVENT = "carrier.order.delivery-attempted.v1"
export const CARRIER_ORDER_DELIVERED_EVENT = "carrier.order.delivered.v1"
export const CARRIER_ORDER_DELIVERY_FAILED_EVENT = "carrier.order.delivery-failed.v1"
export const CARRIER_ORDER_RETURNED_TO_SENDER_EVENT = "carrier.order.returned-to-sender.v1"

/* ----------------------------------------------------------------------------
   Emitted by Order Service
   ---------------------------------------------------------------------------- */

export const ORDER_ORDER_CREATED_EVENT = "order.order.created.v1";

export const ORDER_RETURN_CREATED_EVENT = "order.return.created.v1";