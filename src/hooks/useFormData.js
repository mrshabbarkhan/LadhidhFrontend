import { useState } from "react";

function useFormData(initialData = {}) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return { formData, setFormData, handleChange };
}

export default useFormData;
