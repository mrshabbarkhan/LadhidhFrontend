import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const base_url = "/api/user/cart";

export const addProductToCart = async (formData) => {
  const options = getHeader()
  const res = await axios.post(base_url, formData, options);
  return res.data;
};

export const allCartItmes = async () => {
  const options = getHeader()
  const res = await axios.get(base_url, options);
  return res.data;
};

export const removeFromCart = async (formData) => {

  try {
    const options = getHeader()
    const res = await axios.delete(base_url + "/remove", {
      ...options,
      data: { productId: formData },
    });
  
    return res.data;  
  } catch (error) {
    console.log(error)
    throw new Error("Delete Fail", error)
  }
};
