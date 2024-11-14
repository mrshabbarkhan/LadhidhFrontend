import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import { useMemo } from "react";
import useOrderStatus from "../../hooks/useOrderStatus";

const TrackOrder = ({ order }) => {
  const orderStatus = useOrderStatus(order);

  // Define progress stages
  const stages = useMemo(
    () => [
      { status: "Pending", label: "Order Placed" },
      { status: "Assigned", label: "Assigned to Rider" },
      { status: "Pickup", label: "Picked Up" },
      { status: "Delivered", label: "Delivered" },
    ],
    []
  );

  const currentStageIndex = stages.findIndex(
    (stage) => stage.status === orderStatus
  );

  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-4">
      <h2 className="text-lg font-semibold mb-4 text-center">Order Tracking</h2>
      <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto">
        {stages.map((stage, index) => (
          <div
            key={stage.status}
            className="flex items-center space-x-2 md:flex-1"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: index <= currentStageIndex ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className={`${
                index <= currentStageIndex ? "text-green-500" : "text-gray-400"
              }`}
            >
              <BsCheckCircleFill size={24} />
            </motion.div>
            <span
              className={`${
                index <= currentStageIndex
                  ? "font-semibold text-green-600"
                  : "text-gray-500"
              }`}
            >
              {stage.label}
            </span>

            {index < stages.length - 1 && (
              <motion.div
                className="flex-1 h-1 rounded hidden md:block"
                initial={{ width: 0 }}
                animate={{
                  width: index < currentStageIndex ? "100%" : "0%",
                  backgroundColor:
                    index < currentStageIndex ? "#34D399" : "#E5E7EB",
                }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
