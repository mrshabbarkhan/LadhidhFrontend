import { LuTrash } from "react-icons/lu";
import useDeleteCoupan from "./useDeleteCoupan";
import Spinner from "../../../../components/Spinner";

function CoupanCard({ cpn }) {
  const { mutate: deleteCoupanFn, isPending } = useDeleteCoupan();

  const deleteCoupan = (id) => {
    deleteCoupanFn(id);
  };

  return (
    <div className="relative">
      <div className="p-4 h-fit bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="border-2 border-dashed border-blue-300 p-4 rounded-lg font-semibold text-gray-700 bg-blue-50">
          <h2 className="mb-1 text-lg">
            Coupon Name: <span className="text-blue-600">{cpn.code}</span>
          </h2>
          <h2 className="text-lg">
            Discount of Rupees:{" "}
            <span className="text-green-600">₹{cpn.discountAmount}</span>
          </h2>
        </div>
      </div>
      <span
        className="absolute right-0 top-0 cursor-pointer"
        onClick={() => deleteCoupan(cpn._id)}
      >
        {isPending ? <Spinner className="border-black" /> : <LuTrash />}
      </span>
    </div>
  );
}

export default CoupanCard;
