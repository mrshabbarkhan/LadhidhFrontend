/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useAddCart } from "../features/Cart/useAddCart";
import Spinner from "./Spinner";
import { useLocalStorage } from "../features/auth/LocalStorageContext";
import { toast } from "sonner";

function AddToButton({ ...props }) {
  const navigate = useNavigate();

  const { addToCart, isLoading } = useAddCart();
  const { user } = useLocalStorage();

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
      return toast("Logged in to continue.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`border ${
        isLoading && "bg-primary-dark"
      } text-sm shadow-sm hover:shadow-md border border-primary font-semibold px-3 py-0.5 rounded-lg items-center flex justify-center`}
    >
      {isLoading ? (
        <Spinner className="border-primary hover:border-white" />
      ) : (
        <span className="mt-0.5">ADD</span>
      )}
    </button>
  );
}

export default AddToButton;
