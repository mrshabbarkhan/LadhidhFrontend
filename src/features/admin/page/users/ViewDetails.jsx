import { useParams } from "react-router-dom";
import useFilteredOrder from "../../../../hooks/useFilteredOrder";
import OrderCard from "../../../Order/OrderCard";
import BackButton from "../../../../components/BackButton";

function ViewDetails() {
  const { id } = useParams();
  const filteredOrder = useFilteredOrder(id);

  return (
    <section>
      <BackButton>Orders</BackButton>
      <div className="mt-10">
        {filteredOrder?.length > 0 ? (
          filteredOrder
            ?.map((order) => <OrderCard key={order._id} order={order} />)
            .reverse()
        ) : (
          <h1 className="mt-10 text-xl font-semibold">No Order Placed</h1>
        )}
      </div>
    </section>
  );
}

export default ViewDetails;
