import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function BackButton({ children }) {
  const navigate = useNavigate();
  return (
    <button
      className="font-semibold text-xl sticky top-10 z-10 flex items-center gap-2"
      onClick={() => navigate(-1)}
    >
      <FaArrowLeftLong />
      {children || "Back"}
    </button>
  );
}

export default BackButton;
