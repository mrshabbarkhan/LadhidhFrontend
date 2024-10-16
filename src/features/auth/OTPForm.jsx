import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useOtp } from "./useOtp";
import { useVerifyOtp } from "./useVerifyOtp";
import { setNumber, setOtpToken } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import ResetPassword from "./ResetPassword";

function OTPForm({ fromLogin, closeOtpForm }) {
  const dispatch = useDispatch();
  const { initialNumber } = useSelector((state) => state.auth);
  const { fetchOtp, isPending, isSuccess, data } = useOtp();

  const [hasValidNumber, sethasValidNumber] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [showResetPassword, setShowResetPasword] = useState(false);

  const {
    verifyOtpFn,
    verfiyToken,
    isSuccess: verifySuccess,
    isPending: verifying,
  } = useVerifyOtp();

  const [formData, setFormData] = useState({
    otp: "",
    number: initialNumber || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const { number, otp } = formData;

  useEffect(() => {
    if (number.length === 10) {
      sethasValidNumber(true);
    } else {
      sethasValidNumber(false);
    }
  }, [number]);

  useEffect(() => {
    if (isSuccess) {
      setShowOTPForm(true);
    }
  }, [otp, isSuccess, data]);

  useEffect(() => {
    if (verifySuccess && !fromLogin) {
      toast.success("Otp verify Successfully");
      dispatch(setOtpToken(verfiyToken.otpToken));
      closeOtpForm(false);
    }
    if (verifySuccess && fromLogin) {
      toast.success("Otp verify Successfully");
      dispatch(setOtpToken(verfiyToken.otpToken));
      setShowResetPasword(true);
    }
  }, [verifySuccess]);

  const handleVerifyNumber = () => {
    if (!hasValidNumber) return toast.error("Please Fill Invalid Number");
    dispatch(setNumber(number));
    fetchOtp(number);
  };

  const handleVerifyOtp = () => {
    if (!otp || !number) return;
    verifyOtpFn({ otp, phone: number });
  };

  if (showResetPassword) {
    return <ResetPassword closeOtpForm={closeOtpForm} />;
  }

  return (
    <form>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor={`${showOTPForm ? "otp" : "number"}`}
        >
          {showOTPForm ? "OTP here *" : "Mobile Number *"}
        </label>
        {showOTPForm ? (
          <>
            <input
              id="otp"
              type="number"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter your OTP here"
              className="transition-all mt-2 w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:black/30 focus:black/30"
              required
            />

            <label
              className="block text-sm font-medium text-gray-700 mb-1 mt-2"
              htmlFor="password"
            >
              Number
            </label>
            <input
              id="number"
              type="tel"
              value={formData.number}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              placeholder="Enter your mobile"
              className=" w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:black/30 focus:black/30"
              required
            />

            <button
              type="button"
              onClick={handleVerifyOtp}
              className="mt-3 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-semibold"
            >
              {verifying ? "Verifying..." : "Continue"}
            </button>
          </>
        ) : (
          <>
            <input
              id="number"
              type="number"
              value={formData.number}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              placeholder="Enter your mobile number"
              className="my-3 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:black/30 focus:black/30"
              required
            />
            <button
              type="button"
              onClick={handleVerifyNumber}
              className={`w-full py-3 ${
                hasValidNumber
                  ? "bg-primary"
                  : "bg-primary-light cursor-not-allowed"
              }  text-white rounded-lg  transition duration-300 font-semibold`}
            >
              {isPending ? "Confirming..." : "Confirm"}
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default OTPForm;
