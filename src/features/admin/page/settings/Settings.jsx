import { useState } from "react";
import { useUpdateSetting } from "./useUpdateSetting";
import { useSettings } from "./useSettings";

function Settings() {
  const { updateSettFn, isPending } = useUpdateSetting();
  const { settings } = useSettings();

  const [formData, setFormData] = useState({
    freeDeliveryOrderValue: settings?.freeDeliveryOrderValue ?? "",
    deliveryCharge: settings?.deliveryCharge ?? "",
    handlingFee: settings?.handlingFee ?? "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettFn(formData);
  };

  return (
    <section>
      <h1 className="text-xl font-semibold">Settings</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label
            className="block text-md mb-1"
            htmlFor="freeDeliveryOrderValue"
          >
            Minimum Order for Free Delivery:
          </label>
          <input
            id="freeDeliveryOrderValue"
            type="number"
            value={formData.freeDeliveryOrderValue}
            onChange={handleChange}
            placeholder="Enter your amount"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-md mb-1" htmlFor="deliveryCharge">
            Delivery Charge:
          </label>
          <input
            id="deliveryCharge"
            type="number"
            value={formData.deliveryCharge}
            onChange={handleChange}
            placeholder="Enter your amount"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-md mb-1" htmlFor="handlingFee">
            Handling Fee:
          </label>
          <input
            id="handlingFee"
            type="number"
            value={formData.handlingFee}
            onChange={handleChange}
            placeholder="Enter your amount"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        <div className="max-w-sm mt-5">
          <button
            type="submit"
            className="float-end bg-primary text-white px-3 py-1 rounded-lg"
          >
            {isPending ? "updating..." : "Update"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Settings;
