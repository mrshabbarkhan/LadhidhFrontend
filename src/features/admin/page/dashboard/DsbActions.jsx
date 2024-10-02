import { GoClock } from "react-icons/go";
import { useOrders } from "../../../Order/useOrders";
import { RxCrossCircled } from "react-icons/rx";
import { SlRefresh } from "react-icons/sl";
import { PiCurrencyInr } from "react-icons/pi";

function DsbActions() {

  const {orders} = useOrders()

  const lengthOfPending = orders?.filter(order=>order.paymentStatus.toLowerCase()=="pending").length

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
          <p>ORDER CENCEL</p>
          <h1 className="font-bold text-xl">0</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <RxCrossCircled />
        </div>
      </div>
      <div className="bg-blue-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>ORDER PROCESS</p>
          <h1 className="font-bold text-xl">5</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <SlRefresh />
        </div>
      </div>
      <div className="bg-green-500  flex items-center justify-between grow md:grow-0 w-52 rounded-lg text-white p-2 Favorites_List">
        <span>
          <p>TOTAL INCOME</p>
          <h1 className="font-bold text-xl">&#8377; 100</h1>
        </span>
        <div className="bg-white/30 text-2xl p-2 rounded-full">
          <PiCurrencyInr />
        </div>
      </div>
    </section>
  );
}

export default DsbActions;
