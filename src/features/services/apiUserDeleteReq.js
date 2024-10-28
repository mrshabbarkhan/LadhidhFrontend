import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const userDeletionRequsts = async () => {
  const options = getHeader();
  const res = await axios.get("/api/request-delete-account", options);
  return res.data;
};

const raiseDeleteReq = async (formData) => {
  const res = await axios.post("/api/request-delete-account", formData);
  return res.data;
};

const deleteUser = async (id) => {
  console.log("id", id);
  try {
    const options = getHeader();
    const res = await axios.post(
      `/api/request-delete-account/${id}`,
      null,
      options
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Delete Unsuccess");
  }
};

const userDeletionService = {
  userDeletionRequsts,
  raiseDeleteReq,
  deleteUser,
};

export default userDeletionService;
