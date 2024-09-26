import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const base_url = "/api/user/";

export const getAddress = async () => {
  const options = getHeader();
  const res = await axios.get(base_url + "Address", options);
  console.log(res.data)
  return res.data;
};

export const addAddress = async (formData) => {
  const options = getHeader();
  const res = await axios.post(base_url + "Address", formData, options);
  return res.data;
};

export const editAddress = async (formData) => {
  const options = getHeader();
  const res = await axios.put(base_url + "EditAddress", formData, options);
  return res.data;
};

export const removeAddress = async (id) => {
  const options = getHeader();
  const res = await axios.delete(base_url + `Address/${id}`, {
    ...options,
  });
  return res.data;
};
