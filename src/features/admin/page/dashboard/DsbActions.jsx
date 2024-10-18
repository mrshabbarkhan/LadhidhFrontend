import { GoClock } from "react-icons/go";
import { useOrders } from "../../../Order/useOrders";
import { RxCrossCircled } from "react-icons/rx";
import { SlRefresh } from "react-icons/sl";
import { PiCurrencyInr } from "react-icons/pi";
import useOrderStatus from "../../../../hooks/useOrderStatus";

function DsbActions() {
  const { orders } = useOrders();

  const lengthOfPending = orders?.filter(
    (order) => useOrderStatus(order) == "Pending"
  ).length;

  const lengthOfCancel = orders?.filter(
    (order) => useOrderStatus(order) == "Cancelled"
  ).length;

  const lengthOfProcess = orders?.filter(
    (order) => useOrderStatus(order) == "Assigned"
  ).length;

  const totalIncome = orders
    ?.filter((order) => useOrderStatus(order) == "Delivered")
    .reduce((a, p) => a + p.totalPrice, 0);

  return (
    <section className="flex justify-between flex-wrap gap-2 ">
      <div className="bg-purple-700  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>ORDER PENDING</p>
          <h1 className="font-bold text-xl">{lengthOfPending}</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <GoClock />
        </div>
      </div>
      <div className="bg-red-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>ORDER CANCEL</p>
          <h1 className="font-bold text-xl">{lengthOfCancel}</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <RxCrossCircled />
        </div>
      </div>
      <div className="bg-blue-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>ORDER PROCESS</p>
          <h1 className="font-bold text-xl">{lengthOfProcess}</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <SlRefresh />
        </div>
      </div>
      <div className="bg-green-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>TOTAL INCOME</p>
          <h1 className="font-bold text-xl">&#8377; {totalIncome}</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <PiCurrencyInr />
        </div>
      </div>
    </section>
  );
}

export default DsbActions;
