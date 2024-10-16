import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useCancelOrder } from "./useCancelOrder";

function CancelOrder({ setShow, order }) {
  const [input, setInput] = useState("");
  const { cancelOrderFn, isPending } = useCancelOrder();

  const handleCancel = () => {
    if (input.length >= 20) {
      cancelOrderFn({
        order: order._id,
        reason: input,
      });
      setShow(false); // Close the modal after confirmation
    } else {
      alert("Please provide a reason with at least 20 characters.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative space-y-5">
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
          onClick={() => setShow(false)}
        >
          <MdCancel />
        </button>

        {/* Order Items */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Cancel Order
          </h2>

          <div className="space-y-2">
            {order.orderItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
              >
                <h3 className="font-semibold text-gray-700">
                  {item.product.title}
                </h3>
                <span className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reason Textarea */}
        <div className="mt-4">
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Reason for Cancelation <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            minLength={20}
            rows="4"
            placeholder="Please provide a detailed reason (min 20 characters)"
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          ></textarea>
          {input.length < 20 && (
            <p className="text-red-500 text-xs mt-1">
              Reason must be at least 20 characters.
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={handleCancel}
          >
            Confirm Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelOrder;
