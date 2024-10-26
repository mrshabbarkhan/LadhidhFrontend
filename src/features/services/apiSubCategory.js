import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const base_url = "/api/admin/subCategory";

const getSubCategory = async () => {
  try {
    const options = getHeader();
    const res = await axios.get(base_url, options);
    return res.data;
  } catch (error) {}
};

const getSuCatByCat = async (id) => {
  try {
    const options = getHeader();
    const res = await axios.get(base_url + "/" + id, options);
    return res.data;
  } catch (error) {}
};

const getSubProducts = async (subCategoryId) => {
  const data = {
    subCategoryId,
  };
  try {
    const options = getHeader();
    const res = await axios.post(
      "/api/user/products/subCategoryProducts",
      data,
      options
    );
    return res.data;
  } catch (error) {}
};

const removeSubCatById = async (id) => {
  try {
    const options = getHeader();
    const res = await axios.delete(base_url + "/" + id, options);
    return res.data;
  } catch (error) {}
};

const addSubCat = async (formData) => {
  try {
    const options = getHeader();
    const res = await axios.post(
      base_url + "/addSubCategory",
      formData,
      options
    );
    return res.data;
  } catch (error) {
    throw new Error("Something wrong adding category");
  }
};

const editSubCat = async (formData) => {
  try {
    const options = getHeader();
    const res = await axios.put(
      base_url + "/editSubCategory ",
      formData,
      options
    );
    return res.data;
  } catch (error) {
    throw new Error("Something wrong edit category");
  }
};

const subCategories = {
  getSubCategory,
  getSuCatByCat,
  getSubProducts,
  removeSubCatById,
  addSubCat,
  editSubCat,
};

export default subCategories;
