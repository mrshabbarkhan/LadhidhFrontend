import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPForm from "./OTPForm";
import { useLogin } from "./useLogin";

const LoginForm = ({ showRegistration }) => {

  const [showOTPForm, setShowOTPForm] = useState(false)

  const navigate = useNavigate();
  const { loginUser, isPending, isSuccess } = useLogin();

  useEffect(() => {
    if (isSuccess) {
      return navigate("/");
    }
  }, [isSuccess]);


  const [formData, setFormData] = useState({
    password: "",
    number: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  if (showOTPForm) {
    return <OTPForm fromLogin={true} />
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-md  mb-1" htmlFor="email">
            Phone Number
          </label>
          <input
            id="number"
            type="tel"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
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
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ cursor: isPending ? "not-allowed" : "pointer" }}
          disabled={isPending}
          className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-semibold"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      <p
        onClick={() => setShowOTPForm(true)}
        className="float-end leading-7 text-indigo-600 cursor-pointer"
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
          className="text-indigo-600 hover:text-indigo-800 font-medium transition"
        >
          sign up
        </button>
      </p>
    </>
  );
};

export default LoginForm;
