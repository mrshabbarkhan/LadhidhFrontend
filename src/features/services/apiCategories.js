import axios from "axios";

const base_url = "/api/admin/";

export const addCategory = async (formData) => {
  const response = await axios.post(base_url + "category", formData);
  return response.data;
};

export const getAllCategory = async () => {
  try {
    const response = await axios.get(base_url + "category");
    return response.data;
  } catch (error) {
    throw new Error("Error Getting CatProd", error);
  }
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(base_url + `category/${id}`);
  return response.data;
};

export const editCategory = async (formData) => {
  const response = await axios.put(
    base_url + `category/${formData.id}`,
    formData.data
  );
  return response.data;
};
