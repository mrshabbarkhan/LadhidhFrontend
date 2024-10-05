const base_url = "/api/admin/";
import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

export const getAllProducts = async () => {
  const response = await axios.get(base_url + "products");
  return response.data;
};

export const addProducts = async (formData) => {
  const response = await axios.post(base_url + "products", formData);
  return response.data;
};

export const editProducts = async (formData) => {
  const response = await axios.put(
    base_url + `products/${formData._id}`,
    formData.data
  );
  return response.data;
};

export const deleteProducts = async (id) => {
  const response = await axios.delete(base_url + `products/${id}`);
  return response.data;
};

export const toggleStock = async (id) => {

  try {
    const options = getHeader()
    const response = await axios.put("/api/admin/products/toggleStock", {id}, options);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
};
