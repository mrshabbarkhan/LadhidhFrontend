const base_url = "/api/admin/";
import axios from "axios";

export const getAllProducts = async () => {
  const response = await axios.get(base_url + "products");
  return response.data;
};

export const addProducts = async (formData) => {
  const response = await axios.post(base_url + "products", formData);
  return response.data;
};

export const editProducts = async (formData) => {
  const response = await axios.put(base_url + `products/${formData._id}`, formData.data);
  return response.data;
};

export const deleteProducts = async (id) => {
  const response = await axios.delete(base_url + `products/${id}`);
  return response.data;
};
