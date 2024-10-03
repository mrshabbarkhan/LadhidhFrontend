import OrderCard from "./OrderCard";
import { useUserOrder } from "./useUserOrder";

function OrderPage() {

  const {order} = useUserOrder()

  return (
    <>
      <div className="relative">
        <h1 className="font-semibold">Your Recents Orders</h1>
       {order?.length && order.map(order=><OrderCard order={order} />)}
      </div>

    </>
  );
}

export default OrderPage;
