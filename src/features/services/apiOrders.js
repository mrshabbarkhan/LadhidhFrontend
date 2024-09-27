import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const base_url = "/api/user/order";

export const placeOrder = async (formData) => {
  try {
    const options = getHeader();
    const res = await axios.post(base_url + "/placeOrder", formData, options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};