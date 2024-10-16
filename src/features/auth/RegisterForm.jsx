import { useEffect, useState } from "react";
import { useRegister } from "./useRegister";
import OTPForm from "./OTPForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";

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
        <InputField
          id="name"
          type="text"
          value={formData.name}
          handleChange={handleChange}
          placeholder="Full name"
          required
          label={"Name"}
        />
        <InputField
          id="number"
          type="tel"
          value={formData.number}
          handleChange={handleChange}
          placeholder="+91 xxxxxxxxxx"
          required
          minLength={10}
          maxLength={10}
          label={"Number"}
        />
        <InputField
          id="email"
          type="email"
          value={formData.email}
          handleChange={handleChange}
          placeholder="Email"
          required
          label={"Email"}
        />
        <InputField
          id="password"
          type="password"
          value={formData.password}
          handleChange={handleChange}
          placeholder="Password"
          required
          minLength={6}
          label={"Password"}
        />

        <SubmitButton
          isPending={isPending}
          label="Sign up"
          isDisabled={isPending}
        />
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
