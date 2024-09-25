import { useState } from "react";
import AddressForm from "./AddressForm";
import AddressSelector from "./AddressSelector";

function AddressLayout() {
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div >
      <AddressSelector  />
    </div>
  );
}

export default AddressLayout;
