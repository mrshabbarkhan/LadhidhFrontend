import axios from "axios";

export const getCoupans = async () => {
  try {
    const res = await axios.get("/api/user/coupan/getCoupans");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCoupan = async (formData) => {
  try {
    const res = await axios.post("/api/user/coupan/createCoupan", formData);
    return res.data;
  } catch (error) {
    throw new Error("Coupan could not be created");
  }
};

export const deleteCoupan = async (id) => {
  try {
    const { data } = await axios.delete(`/api/user/coupan/deleteCoupan/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
