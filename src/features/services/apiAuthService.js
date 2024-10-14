import axios from "axios";
import { getHeader } from "../../utils/headersUtils";
import { useVerifyOtp } from "../auth/useVerifyOtp";

const base_url = "/api/user/";

const getOtp = async (phoneNumber) => {
  try {
    const response = await axios.get(
      base_url + `otp?phone=${encodeURIComponent(phoneNumber)}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Otp error", error);
  }
};

const verifyOtp = async (formData) => {
  try {
    const res = await axios.post("/api/user/verifyOtp", formData);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      "verify otp failed",
      error.response.data.error || "Something went wrong"
    );
  }
};

const resetPassword = async (formData) => {
  try {
    const res = await axios.post(base_url + "resetPassword", formData);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error: Reset Pass", error);
  }
};

const register = async (formData) => {
  const response = await axios.post(base_url + "register", formData);
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(base_url + "login", formData);
  return response.data;
};

const editUser = async (newForm) => {
  const { _id, ...rest } = newForm;

  try {
    const options = getHeader();
    const response = await axios.put(`${base_url}${_id}`, rest, options);
    return response.data;
  } catch (error) {
    console.log("Error updating user:", error);
    throw error;
  }
};

const authServices = {
  getOtp,
  register,
  login,
  editUser,
  verifyOtp,
  resetPassword,
};

export default authServices;
