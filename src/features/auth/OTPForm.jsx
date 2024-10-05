import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaLess } from "react-icons/fa";
import RegisterForm from "./RegisterForm";

function OTPForm({ fromLogin }) {
  const [hasValidNumber, sethasValidNumber] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const data = "123456"; // data will be otp
  const isSuccess = false; // when success of fetch otp

  const [formData, setFormData] = useState({
    otp: "",
    number: "",
    password: "",
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
      setShowOTPForm(true); // if i get otp successfully
    }
    if (otp === data) {
      // match with otp
      toast.success("Otp matched");
      // setShowRegister(true)     show Register form
    }
  }, [otp, isSuccess, data]);

  const handleVerifyNumber = () => {
    if (!hasValidNumber) return toast.error("Invalid Number");
    toast.success("OTP has been sended");
  };

  if (showRegister) {
    return <RegisterForm />;
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
            <p className="text-gray-300 text-sm float-end">Auto match *</p>

            <label
              className="block text-sm font-medium text-gray-700 mb-1 mt-2"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter your new password"
              className=" w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:black/30 focus:black/30"
              required
            />

            <button
              type="submit"
              // style={{ cursor: isPending ? "not-allowed" : "pointer" }}
              // disabled={isPending}
              className="mt-3 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-semibold"
            >
              {/* {isPending ? "Logging in..." : "Login"} */}
              Login
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
              Confirm
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default OTPForm;
