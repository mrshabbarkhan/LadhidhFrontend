import axios from "axios";

const getSettings = async () => {
  try {
    const res = await axios.get("/api/settings");
    return res.data;
  } catch (error) {
    throw new Error("Getting settings", error);
  }
};

const updateSettings = async () => {
  try {
    const res = await axios.post("/api/settings");
  } catch (error) {}
};
