import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function BackButton({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isOnProductList = pathname.startsWith("/product-list");

  return (
    <button
      className="font-semibold text-xl sticky top-10 z-10 flex items-center gap-2"
      onClick={() => navigate(isOnProductList ? "/" : -1)}
    >
      <FaArrowLeftLong />
      {children || "Back"}
    </button>
  );
}

export default BackButton;
