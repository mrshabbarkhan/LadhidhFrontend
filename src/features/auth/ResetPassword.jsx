import { useEffect, useState } from "react";
import { useResetPassword } from "./useResetPassword";
import { useSelector } from "react-redux";

function ResetPassword({ closeOtpForm }) {
  const { resetPasswordFn, isPending, isSuccess } = useResetPassword();
  const { otpToken, initialNumber } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      closeOtpForm(false);
    }
  }, [isSuccess]);

  const [formData, setFormData] = useState({
    password: "",
    phone: initialNumber || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  function handleResetPassword(e) {
    e.preventDefault();
    resetPasswordFn({ ...formData, otpToken });
  }

  return (
    <form>
      <label
        className="block text-sm font-medium text-gray-700 mb-1 mt-2"
        htmlFor="phone"
      >
        Number
      </label>

      <input
        id="phone"
        type="number"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your registered number"
        className="transition-all mt-2 w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:black/30 focus:black/30"
        required
      />

      <label
        className="block text-sm font-medium text-gray-700 mb-1 mt-2"
        htmlFor="password"
      >
        Enter new password
      </label>
      <input
        id="password"
        type="text"
        value={formData.password}
        onChange={handleChange}
        minLength={10}
        maxLength={10}
        placeholder="Enter your new password"
        className=" w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:black/30 focus:black/30"
        required
      />

      <button
        type="button"
        onClick={handleResetPassword}
        className="mt-3 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-semibold"
      >
        {isPending ? "Reset password..." : "Continue"}
      </button>
    </form>
  );
}

export default ResetPassword;
