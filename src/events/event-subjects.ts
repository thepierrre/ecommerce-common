/* ----------------------------------------------------------------------------
   Emitted by Warehouse Service
   ---------------------------------------------------------------------------- */

export const WAREHOUSE_ORDER_ACCEPTED_SUBJECT = "warehouse.order.accepted.v1";
export const WAREHOUSE_ORDER_PICKED_SUBJECT = "warehouse.order.picked.v1";
export const WAREHOUSE_ORDER_REJECTED_SUBJECT = "warehouse.order.rejected.v1";
export const WAREHOUSE_ORDER_SHIPPED_SUBJECT = "warehouse.order.shipped.v1";
export const WAREHOUSE_ORDER_PROCESSING_STARTED_SUBJECT = "warehouse.order.processing-started.v1";

export const WAREHOUSE_RETURN_ACCEPTED_SUBJECT = "warehouse.return.accepted.v1";
export const WAREHOUSE_RETURN_REJECTED_SUBJECT = "warehouse.return.rejected.v1";

/* ----------------------------------------------------------------------------
   CARRIER events
   ----------------------------------------------------------------------------
   In a real system, these events would be emitted by external carriers
   such as DHL, UPS etc.

   Here, we simulate them inside the Warehouse because we don't have
   real carrier webhooks. The Warehouse Service will emit them
   on behalf of the carrier.
   ---------------------------------------------------------------------------- */

export const CARRIER_ORDER_OUT_FOR_DELIVERY_SUBJECT = "carrier.order.out-for-delivery.v1"
export const CARRIER_ORDER_DELIVERY_ATTEMPTED_SUBJECT = "carrier.order.delivery-attempted.v1"
export const CARRIER_ORDER_DELIVERED_SUBJECT = "carrier.order.delivered.v1"
export const CARRIER_ORDER_DELIVERY_FAILED_SUBJECT = "carrier.order.delivery-failed.v1"
export const CARRIER_ORDER_RETURNED_TO_SENDER_SUBJECT = "carrier.order.returned-to-sender.v1"

/* ----------------------------------------------------------------------------
   Emitted by Order Service
   ---------------------------------------------------------------------------- */

export const ORDER_ORDER_CREATED_SUBJECT = "order.order.created.v1";

export const ORDER_RETURN_CREATED_SUBJECT = "order.return.created.v1";