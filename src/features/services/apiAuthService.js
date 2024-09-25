import axios from "axios";

const base_url = "/api/user/";

const getOtp = async (email) => {
  const response = await axios.post("/send-otp", { email });
  return response.data;
};

const register = async (formData) => {
  console.log(formData)
  const response = await axios.post(base_url + "register", formData);
  console.log(response.data)
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(base_url + "login", formData);
  console.log(response.data)
  return response.data;
};

const authServices = {
  getOtp,
  register,
  login,
};

export default authServices;
