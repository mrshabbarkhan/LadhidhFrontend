import { Toaster } from "react-hot-toast";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        success: {
          style: {
            background: "#4caf50",
            color: "#fff",
            fontWeight: "500",
          },
          icon: <FaCheckCircle className="text-xl" />,
        },
        error: {
          style: {
            background: "#f44336",
            color: "#fff",
            fontWeight: "500",
          },
          icon: <FaExclamationCircle className="text-xl mr-0" />,
        },
        info: {
          style: {
            background: "#2196f3",
            color: "#fff",
            fontWeight: "500",
          },
          icon: <FaInfoCircle className="text-xl" />,
        },
        duration: 4000, // Adjust the duration as needed
        style: {
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          paddingBlock: "8px",
          paddingLeft: "16px",
          width: "250px",
          margin: "0px",
          gap: "0px",
          marginRight: "0px",
        },
      }}
    />
  );
}

export default ToastProvider;
