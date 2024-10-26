import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPForm from "./OTPForm";
import { useLogin } from "./useLogin";
import useFormData from "../../hooks/useFormData";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const LoginForm = ({ showRegistration }) => {
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [verifyNum, setVerifyNum] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
        <InputField
          id="number"
          type="number"
          value={formData.number}
          handleChange={handleChange}
          placeholder="Enter your Number"
          required="true"
          minLength={10}
          maxLength={10}
          label={"Phone Number"}
        />

        {/* Password Field */}
        <div className="flex items-center grow relative">
          <span className="grow">
            <InputField
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              handleChange={handleChange}
              placeholder="Enter your password"
              required
              label={"Password"}
            />
          </span>
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="translate-y-1/2 absolute right-5 cursor-pointer"
          >
            {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </span>
        </div>

        <SubmitButton
          isPending={isPending}
          label="Login"
          isDisabled={!verifyNum || isPending}
        />
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

      <div className="text-center bg-red-200 py-1 mt-2  rounded-md">
        <Link to={"/dowanlod"} className="text-sm text-red-700  px-2 py-2 ">
          Downlod our app
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
