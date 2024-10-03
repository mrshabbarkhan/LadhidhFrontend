import OrderCard from "./OrderCard";
import { useUserOrder } from "./useUserOrder";

function OrderPage() {
  const { order } = useUserOrder();

  return (
    <div className="relative">
      <h1 className="font-semibold">Your Recent Orders</h1>

      {Array.isArray(order) && order.length > 0 ? (
        order.map((singleOrder) => (
          <OrderCard key={singleOrder._id} order={singleOrder} />
        ))
      ) : (
        <h1>No Orders Found</h1>
      )}
    </div>
  );
}

export default OrderPage;
