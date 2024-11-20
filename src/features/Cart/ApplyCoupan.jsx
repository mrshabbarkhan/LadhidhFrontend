import { useEffect, useState } from "react";
import useCoupan from "../admin/page/settings/useCoupan";
import { useDispatch } from "react-redux";
import { addToApplidCoupan } from "./cartSlice";
import useValidCoupan from "../admin/page/settings/useValidCoupan";
import { useLocalStorage } from "../auth/LocalStorageContext";
import Spinner from "../../components/Spinner";

function ApplyCoupan({ coupan, setCoupan }) {
  const [code, setCode] = useState("");
  const [matchCoupan, setMatchCoupan] = useState(null);
  let disable = code === matchCoupan?.code;

  const dispatch = useDispatch();
  const { user } = useLocalStorage();

  const { data: coupans } = useCoupan();
  const {
    mutate: validCoupanFn,
    isPending,
    isSuccess,
    reset,
  } = useValidCoupan();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addToApplidCoupan(matchCoupan));
      setCoupan(matchCoupan?.discountAmount);
    } else {
      setCoupan(0);
    }
  }, [isSuccess, matchCoupan, dispatch, reset]);

  const handleApplyCoupon = () => {
    const foundCoupan = coupans?.find((c) => c.code === code);
    if (foundCoupan) {
      setMatchCoupan(foundCoupan);
      validCoupanFn({
        userId: user._id,
        coupanCode: foundCoupan.code,
      });
    } else {
      setMatchCoupan("");
      setCoupan(0);
      setCode("");
    }
  };

  return (
    <div className="max-w-sm ml-auto mt-5">
      <div className="flex items-center gap-2 border-b border-primary border-dashed  rounded-lg">
        <input
          type="text"
          value={code.toUpperCase()}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Enter coupon code"
          className="flex-grow px-2 border-none outline-none focus:ring-0 bg-transparent text-gray-700"
        />
        <button
          onClick={handleApplyCoupon}
          disabled={disable}
          className={`px-3 hover:scale-95 py-0.5 text-sm border  ${
            disable ? "bg-slate-200 cursor-not-allowed" : "shadow - md"
          } text-black  font-semibold rounded-md`}
        >
          {isPending ? <Spinner /> : disable ? "Applied" : "Apply"}
        </button>
      </div>

      {code?.length > 0 && (
        <p
          className={`mt-3 text-sm font-medium ${
            coupan ? "text-green-600" : "text-red-600"
          }`}
        >
          {coupan ? "coupan applied successfully!" : "Invalid coupan code"}
        </p>
      )}
    </div>
  );
}

export default ApplyCoupan;
