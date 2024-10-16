import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPForm from "./OTPForm";
import { useLogin } from "./useLogin";
import useFormData from "../../hooks/useFormData";
import Spinner from "../../components/Spinner";
import useInputClass from "../../hooks/useInputClass";

const LoginForm = ({ showRegistration }) => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [verifyNum, setVerifyNum] = useState(false);
  const navigate = useNavigate();
  const { loginUser, isPending, isSuccess } = useLogin();

  const { formData, handleChange } = useFormData({
    number: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (formData.number.length === 10) {
      setVerifyNum(true);
    } else {
      setVerifyNum(false);
    }
  }, [formData.number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verifyNum) return;
    loginUser(formData);
  };

  if (showOTPForm) {
    return <OTPForm fromLogin={true} closeOtpForm={setShowOTPForm} />;
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Login
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-md  mb-1" htmlFor="email">
            Phone Number
          </label>
          <input
            id="number"
            type="tel"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your Number"
            className={useInputClass()}
            minLength={10}
            maxLength={10}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-md font-medium  mb-1" htmlFor="password">
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
          />
        </div>

        <button
          type="submit"
          style={{ cursor: isPending ? "not-allowed" : "pointer" }}
          disabled={isPending}
          className={
            verifyNum
              ? `w-full py-2  text-white rounded-lg font-semibold flex items-center justify-center gap-2 ${
                  isPending ? "bg-red-400" : "hover:bg-primary-dark bg-primary"
                }`
              : "bg-red-400 w-full py-2  text-white rounded-lg font-semibold"
          }
        >
          {isPending && <Spinner className="border-white" />} Login
        </button>
      </form>

      <p
        onClick={() => setShowOTPForm(true)}
        className="float-end text-sm hover:underline leading-7 text-indigo-600 cursor-pointer"
      >
        Forget Password ?
      </p>

      {/* Toggle between forms */}
      <p
        onClick={() => showRegistration(true)}
        className="cursor-pointer hover:underline mt-10 text-center text-sm text-gray-600"
      >
        Don't have an account?
        <button
          type="button"
          className="text-indigo-600 hover:text-indigo-800 font-medium transition hover:underline"
        >
          sign up
        </button>
      </p>
    </>
  );
};

export default LoginForm;
