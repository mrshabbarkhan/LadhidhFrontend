import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const base_url = "/api/user/";

const getOtp = async (email) => {
  const response = await axios.post("/send-otp", { email });
  return response.data;
};

const register = async (formData) => {
  const response = await axios.post(base_url + "register", formData);
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(base_url + "login", formData);
  return response.data;
};

const editUser = async (id) => {
  try {
    const options = getHeader();
    const response = await axios.put(`${base_url}${id}`, options);
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
};

export default authServices;
