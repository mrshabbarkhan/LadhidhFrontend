import { useState } from "react";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import useRaiseDelete from "../admin/page/requests/useRaiseDelete";

const DeleteUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    number: "",
    password: "",
    reason: "",
  });
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [checked, setChecked] = useState(false); // State for checkbox

  const { raiseDeleteAcc, isPending } = useRaiseDelete();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === "number") {
      setIsNumberValid(value.length === 10);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const confirmation = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (!confirmation || !isNumberValid) return;

    // Delete user
    raiseDeleteAcc(formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Delete Account
      </h2>

      <form onSubmit={handleDelete}>
        {/* Phone Number Field */}
        <InputField
          id="number"
          type="text"
          value={formData.number}
          handleChange={handleChange}
          placeholder="Enter your phone number"
          minLength={10}
          maxLength={10}
          required
          label="Phone Number"
        />

        {/* Password Field */}
        <div className="relative mt-4">
          <InputField
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            handleChange={handleChange}
            placeholder="Enter your password"
            required
            label="Password"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-2/4 translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
          </span>
        </div>

        {/* Reason Field */}
        <InputField
          id="reason"
          type="text"
          value={formData.reason}
          handleChange={handleChange}
          placeholder="Reason for deleting your account"
          label="Reason *"
        />

        {/* Checkbox */}
        <div className="mb-5">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="checkbox"> Terms & Conditions Apply</label>
        </div>

        {/* Submit Button */}
        {checked && (
          <SubmitButton
            label="Delete Account"
            isDisabled={!isNumberValid || isPending}
          />
        )}
      </form>

      <div className="text-center bg-red-200 py-1 mt-4 rounded-md">
        <p className="text-sm text-red-700">
          This action is permanent, make sure before you delete.
        </p>
      </div>
    </div>
  );
};

export default DeleteUser;
