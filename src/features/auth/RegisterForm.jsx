import { useEffect, useState } from "react";
import { useRegister } from "./useRegister";
import OTPForm from "./OTPForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import useInputClass from "../../hooks/useInputClass";

function RegisterForm({ showRegistration }) {
  const navigate = useNavigate();
  const { registerUser, isPending, isSuccess } = useRegister();
  const { otpToken, initialNumber } = useSelector((state) => state.auth);

  const [showOTPForm, setShowOTPForm] = useState(true);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const { formData, handleChange, setFormData } = useFormData({
    name: "",
    number: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    if (initialNumber) {
      setFormData((prev) => ({ ...prev, number: initialNumber }));
    }
  }, [initialNumber]);

  const handleVerify = (e) => {
    e.preventDefault();
    registerUser({ ...formData, otpToken });
  };

  if (showOTPForm) {
    return <OTPForm fromLogin={false} closeOtpForm={setShowOTPForm} />;
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Sign up
      </h2>

      <form onSubmit={handleVerify}>
        <div className="mb-3">
          <label
            className="block text-md font-medium 0  hover:under mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className={useInputClass()}
            required
            autoComplete="on"
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-md font-medium 0  hover:under mb-1"
            htmlFor="number"
          >
            Contact
          </label>
          <input
            id="number"
            type="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="+91 1234567890"
            className={useInputClass()}
            required
            maxLength={10}
            minLength={10}
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-md font-medium 0  hover:under mb-1"
            htmlFor="email"
          >
            Enter your email here
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email here"
            className={useInputClass()}
            required
            autoComplete="on"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-md font-medium 0  hover:under mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={useInputClass()}
            required
            minLength={6}
            autoComplete="on"
          />
        </div>

        <button
          type="submit"
          style={{ cursor: isPending ? "not-allowed" : "pointer" }}
          disabled={isPending}
          className={`w-full py-2  text-white rounded-lg font-semibold flex items-center justify-center gap-2 ${
            isPending ? "bg-red-400" : "hover:bg-primary-dark bg-primary"
          }`}
        >
          {isPending && <Spinner className="border-white" />} Sign up
        </button>
      </form>

      <p
        onClick={() => showRegistration(false)}
        className="mt-6 text-center text-md text-gray-600  hover:underline"
      >
        Already have an account?
        <button
          type="button"
          className="text-indigo-600 hover:text-indigo-800 font-medium transition"
        >
          login
        </button>
      </p>
    </>
  );
}

export default RegisterForm;
