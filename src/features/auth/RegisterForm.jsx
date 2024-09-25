import { useEffect, useState } from "react";
import { useRegister } from "./useRegister";

function RegisterForm({ setRegister }) {
  const { registerUser, isPending, isSuccess } = useRegister();

  useEffect(() => {
    if (isSuccess) {
      return navigate("/");
    }
  }, [isSuccess]);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    // Addres: "",
    password: "",
    email: "",
    // otp: "",
  });

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleVerify = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign up
      </h2>

      <form onSubmit={handleVerify}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="number"
          >
            Contact
          </label>
          <input
            id="number"
            type="number"
            value={formData.contact}
            onChange={handleChange}
            placeholder="+91 1234567890"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            maxLength={10}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            autoComplete="off"
          />
        </div>

        {/* <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="Addres"
          >
            Address
          </label>
          <input
            id="Addres"
            type="text"
            value={formData.Addres}
            onChange={handleChange}
            placeholder="Geeta Bhawan, Indore"
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            autoComplete="off"
          />
        </div> */}

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-semibold"
        >
          Register
        </button>
      </form>

      <p
        onClick={() => setRegister(false)}
        className="mt-6 text-center text-sm text-gray-600 hover:underline"
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
