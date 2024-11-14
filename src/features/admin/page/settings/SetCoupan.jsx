import { form } from "framer-motion/m";
import useFormData from "../../../../hooks/useFormData";
import useCreateCoupan from "./useCreateCoupan";
import Spinner from "../../../../components/Spinner";

function SetCoupan() {
  const { mutate: createCoupanFn, isPending } = useCreateCoupan();

  const { formData, handleChange } = useFormData({
    code: "",
    discountAmount: "",
    expiryDate: "",
    totalUsageLimit: "",
    userUsageLimit: "",
  });

  const handleCreate = (e) => {
    e.preventDefault();
    createCoupanFn(formData);
  };

  return (
    <section>
      <form onSubmit={handleCreate} className="max-w-sm">
        <div className="mt-4">
          <label className="block text-md mb-1" htmlFor="Coupan Name">
            Coupan Name
          </label>
          <input
            id="code"
            value={formData.code}
            onChange={handleChange}
            type="text"
            placeholder="eg. NEW10"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-md mb-1" htmlFor="discountOnCoupan">
            Discount on coupan
          </label>
          <input
            id="discountAmount"
            value={formData.discountAmount}
            onChange={handleChange}
            type="number"
            placeholder="discount in rupee eg. 100"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-md mb-1" htmlFor="discountOnCoupan">
            Coupan Expire on
          </label>
          <input
            id="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            type="date"
            placeholder="Coupan will be expire on"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="mt-4">
          <label className="block text-md mb-1" htmlFor="totalUsageLimit">
            Total use limit
          </label>
          <input
            id="totalUsageLimit"
            value={formData.totalUsageLimit}
            min={1}
            onChange={(e) => {
              const value = Math.max(1, parseInt(e.target.value) || 1);
              handleChange({ target: { id: "totalUsageLimit", value } });
            }}
            type="number"
            placeholder="Number of Persons can use"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-md mb-1" htmlFor="userUsageLimit">
            Total per person limit
          </label>
          <input
            id="userUsageLimit"
            value={formData.userUsageLimit}
            min={1}
            onChange={(e) => {
              const value = Math.max(1, parseInt(e.target.value) || 1);
              handleChange({ target: { id: "userUsageLimit", value } });
            }}
            type="number"
            placeholder="Per person use limit"
            className="max-w-sm w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-black/30 focus:border-black/30"
            required
          />
        </div>

        <button
          type="submit"
          className="float-end bg-primary text-white px-3 py-1 mt-5 rounded-lg"
        >
          {isPending ? <Spinner className="border-white m-1" /> : "Add"}
        </button>
      </form>
    </section>
  );
}

export default SetCoupan;
