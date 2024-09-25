import axios from "axios";

const base_url = "/api/admin/";

export const getAllUsers = async () => {
  const response = await axios.post(base_url + "users");
  return response.data;
};
