const base_url = "/api/admin/";
import axios from "axios";

export const addBanner = async (data) => {
  const response = await axios.post(base_url + "banner/upload", data);
  return response.data;
};

export const deleteBanner = async (id) => {
  const response = await axios.delete(base_url + `banner/${id}`);
  return response.data;
};

export const getAllBanners = async () => {
  const response = await axios.get(base_url + "banner");
  return response.data;
};
