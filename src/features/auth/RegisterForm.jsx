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
    password: "",
    email: "",
  });

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
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-md font-medium 0  hover:under mb-1"
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
            minLength={10}
          />
        </div>

        <div className="mb-4">
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
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            autoComplete="off"
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
            className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            minLength={6}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          style={{ cursor: isPending ? "not-allowed" : "pointer" }}
          disabled={isPending}
          className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-semibold"
        >
          {isPending ? "Submiting..." : "Register"}
        </button>
      </form>

      <p
        onClick={() => setRegister(false)}
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
