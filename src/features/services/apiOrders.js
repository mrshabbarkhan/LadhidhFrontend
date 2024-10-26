import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const base_url = "/api/user/order";
const base_url_admin = "/api/admin/order";

// for user
export const getUserOrders = async () => {
  try {
    const options = getHeader();
    const res = await axios.get(base_url + "/getOrders", options);
    return res.data;
  } catch (error) {
    console.error("get user orders", error);
    throw error;
  }
};
// For admin
export const getAllOrders = async () => {
  try {
    const options = getHeader();
    const res = await axios.get(base_url_admin, options);
    return res.data;
  } catch (error) {
    console.error("get all orders", error);
    throw error;
  }
};

export const placeOrder = async (formData) => {
  try {
    const options = getHeader();
    const res = await axios.post(`${base_url}/placeOrder`, formData, options);
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("error placing order", error);
  }
};

export const assignOrder = async (order) => {
  try {
    const options = getHeader();
    const res = await axios.post(base_url_admin + "/assign", order, options);
    return res.data;
  } catch (error) {
    console.error("assign order", error);
    throw error;
  }
};

export const cancelOrder = async (formData) => {
  try {
    const options = getHeader();
    const res = await axios.post(base_url + "/cancelOrder", formData, options);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
