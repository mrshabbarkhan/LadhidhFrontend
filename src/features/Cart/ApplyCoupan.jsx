import { useState } from "react";
import useCoupan from "../admin/page/settings/useCoupan";
import { useDispatch } from "react-redux";
import { addToApplidCoupan } from "./cartSlice";

function ApplyCoupan({ setCoupan }) {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);
  const [msg, setMsg] = useState("");
  const { data: coupans } = useCoupan();
  const dispatch = useDispatch();

  const handleApplyCoupon = () => {
    const foundCoupon = coupans?.find((c) => c.code === code);
    if (foundCoupon) {
      dispatch(addToApplidCoupan(foundCoupon));
      setMsg("Coupon applied successfully!");
      setCoupan(foundCoupon.discountAmount);
      setApplied(true);
    } else {
      setMsg("Invalid Coupon Code");
      setCoupan(0);
      setApplied(false);
    }
  };

  return (
    <div className="max-w-sm ml-auto mt-5">
      <div className="flex items-center gap-2 border-b border-primary border-dashed  rounded-lg">
        <input
          type="text"
          value={code.toUpperCase()}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-grow px-2 border-none outline-none focus:ring-0 bg-transparent text-gray-700"
        />
        <button
          onClick={handleApplyCoupon}
          className="px-3 py-0.5 text-sm border shadow-md text-black font-semibold rounded-md"
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
      <p
        className={`mt-2 text-sm font-medium ${
          applied ? "text-green-600" : "text-red-600"
        }`}
      >
        {msg}
      </p>
    </div>
  );
}

export default ApplyCoupan;
