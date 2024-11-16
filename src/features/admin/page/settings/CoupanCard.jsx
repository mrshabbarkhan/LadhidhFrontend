import { LuTrash } from "react-icons/lu";
import useDeleteCoupan from "./useDeleteCoupan";
import Spinner from "../../../../components/Spinner";
import { MdOutlineCancel } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { span } from "framer-motion/client";

function CoupanCard({ cpn }) {
  const { mutate: deleteCoupanFn, isPending } = useDeleteCoupan();

  const expiresOn = Math.ceil(
    (new Date(cpn.expiryDate) - Date.now()) / (1000 * 60 * 60 * 24)
  );

  const deleteCoupan = (id) => {
    deleteCoupanFn(id);
  };

  return (
    <div className="w-72">
      <div className=" h-fit rounded-lg shadow-md max-w-md mx-auto">
        <div className="flex pr-6 relative justify-between  items-center  border p-4 rounded-lg font-semibold text-gray-700 ">
          <h2 className="mb-1 text-sm text-gray-500">
            <h1>Coupon Name:</h1>
            <h1>Discount of Rupees:</h1>
            <h1> Days left to Expire :</h1>
            <h1>Total usage :</h1>
            <h1> Usage count :</h1>
            <h1> Per Usage limit :</h1>
          </h2>

          <h2 className="text-sm">
            <h1 className="">{cpn.code}</h1>
            <h1 className="">₹{cpn.discountAmount}</h1>
            <h1 className="">{expiresOn}</h1>
            <h1 className="">{cpn.totalUsageLimit}</h1>
            <h1 className="">{cpn.usageCount}</h1>
            <h1 className="">{cpn.userUsageLimit}</h1>
          </h2>

          <span
            className="absolute right-0 top-0 cursor-pointer bg-primary text-white p-1   border rounded-bl-full"
            onClick={() => deleteCoupan(cpn._id)}
          >
            {isPending ? (
              <Spinner className="border-black" />
            ) : (
              <>
                {" "}
                <ImCross className="text-sm mb-2 ml-1" />
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CoupanCard;
