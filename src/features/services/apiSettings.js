import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const getSettings = async () => {
  try {
    const options = getHeader();
    const res = await axios.get("/api/settings", options);
    return res.data;
  } catch (error) {
    throw new Error("Getting settings", error);
  }
};

const updateSettings = async (formData) => {
  try {
    const options = getHeader();
    const res = await axios.post("/api/settings", formData, options);
    return res.data;
  } catch (error) {
    throw new Error("update setting", error);
  }
};

export const apiSettings = {
  getSettings,
  updateSettings,
};
