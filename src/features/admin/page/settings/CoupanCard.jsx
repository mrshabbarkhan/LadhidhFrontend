import useDeleteCoupan from "./useDeleteCoupan";
import Spinner from "../../../../components/Spinner";
import { ImCross } from "react-icons/im";

function CoupanCard({ cpn }) {
  const {
    _id,
    code,
    discountAmount,
    totalUsageLimit,
    usageCount,
    userUsageLimit,
    expiryDate,
  } = cpn;

  const { mutate: deleteCoupanFn, isPending } = useDeleteCoupan();

  const expiresOn = Math.ceil(
    (new Date(expiryDate) - Date.now()) / (1000 * 60 * 60 * 24)
  );

  const deleteCoupan = (id) => {
    deleteCoupanFn(id);
  };

  const expiredCoupan = usageCount === totalUsageLimit || expiresOn < 0;

  return (
    <div className={`w-72 relative h-fit z-10`}>
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
            <h1 className="">{code}</h1>
            <h1 className="">₹{discountAmount}</h1>
            <h1 className="">{expiresOn === 0 ? "Today" : expiresOn}</h1>
            <h1 className="">{totalUsageLimit}</h1>
            <h1 className="">{usageCount}</h1>
            <h1 className="">{userUsageLimit}</h1>
          </h2>

          <span
            className="absolute right-0 top-0 cursor-pointer bg-primary text-white p-1 z-10  border rounded-bl-full"
            onClick={() => deleteCoupan(_id)}
          >
            {isPending ? (
              <Spinner className="border-white mb-0.5" />
            ) : (
              <>
                {" "}
                <ImCross className="text-sm mb-2 ml-1" />
              </>
            )}
          </span>
        </div>
      </div>

      {expiredCoupan && (
        <div className="text-center absolute inset-0  flex items-center justify-center ">
          <span className="text-5xl text-pretty text-primary/30 font-semibold -z-10  w-full">
            Expired
          </span>
        </div>
      )}
    </div>
  );
}

export default CoupanCard;
