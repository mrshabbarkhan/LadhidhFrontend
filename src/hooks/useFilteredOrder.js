import { useOrders } from "../features/Order/useOrders";

function useFilteredOrder(id) {
  const { orders } = useOrders();

  return orders?.filter((order) => order.user === id);
}

export default useFilteredOrder;
