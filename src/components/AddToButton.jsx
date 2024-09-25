import { useNavigate } from "react-router-dom";
import { useAddCart } from "../features/Cart/useAddCart";
import Spinner from "./Spinner";
import { useLocalStorage } from "../features/auth/LocalStorageContext";
import toast from "react-hot-toast";

function AddToButton({ redirect = "/cart", ...props }) {
  const navigate = useNavigate();

  const { addToCart, isLoading } = useAddCart();
  const {user} = useLocalStorage()

  const handleClick = async () => {
    const formData = {
      productId: props.id || props._id,
      quantity: 1,
    };

    if (user) {
      addToCart(formData, {
         onSuccess: () => {
           navigate("/cart");
         },
       });
    } else {
      toast.error("Please log in first")
    }

  };

  return (
    <button
      onClick={handleClick}
      className="border border-primary text-sm font-semibold px-3 py-1 rounded-lg hover:text-white hover:bg-primary-dark transition flex justify-center"
    >
      {isLoading ? <Spinner /> : "Add"}
    </button>
  );
}

export default AddToButton;
