import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

export const raiseRequest = async (id) => {
  try {
    const options = getHeader();
    const res = await axios.post(
      "/api/user/demand",
      { productId: id },
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to raise Request");
  }
};

export const getRequests = async () => {
  try {
    const options = getHeader();
    const res = await axios.get("/api/admin/demand", options);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get Requests");
  }
};
