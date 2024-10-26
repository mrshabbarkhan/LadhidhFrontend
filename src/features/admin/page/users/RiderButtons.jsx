import { useDispatch, useSelector } from "react-redux";
import { useToggleRider } from "../RiderPage/useToggleRider";
import { useAssignOrder } from "../../../Order/useAssignOrder";
import Spinner from "../../../../components/Spinner";
import { removeFromSelectedOrder } from "../../../Order/orderSlice";
import { toast } from "sonner";
import { Link } from "react-router-dom";

function RiderButtons({ user }) {
  const dispatch = useDispatch();

  const { changeRole, isPending: isLoading } = useToggleRider();
  const { postAssignOrder, isPending, isSuccess } = useAssignOrder();

  const { selectedOrder } = useSelector((state) => state.order);

  const handleChangeRole = (id) => {
    changeRole(id);
  };

  const handleAssingOrder = () => {
    if (!selectedOrder || !user)
      return toast.error("Please Select Order First");
    const order = {
      order: selectedOrder._id,
      user: user._id,
    };
    postAssignOrder(order, {
      onSuccess: () => {
        dispatch(removeFromSelectedOrder());
      },
    });
  };

  return (
    <div className="mt-4 transition-all">
      {user?.isRider ? (
        <>
          <button
            onClick={() => handleAssingOrder()}
            className="border p-1 text-sm rounded-md px-2 transition-colors hover:bg-green-500 hover:text-white mr-2 "
          >
            {isPending ? <Spinner /> : "Assing Order"}
          </button>
          <button
            onClick={() => handleChangeRole(user._id)}
            className="border p-1 text-sm rounded-md px-2 text-white mr-2 transition-all bg-primary hover:bg-primary-dark"
          >
            {isLoading ? <Spinner /> : "Remove Rider"}
          </button>
        </>
      ) : (
        <>
          <Link
            to={`${user._id}`}
            className="border rounded-md p-1 text-sm  px-2  mr-2 hover:bg-gray-50"
          >
            View Orders
          </Link>
          <button
            onClick={() => handleChangeRole(user._id)}
            className="border rounded-md p-1 text-sm  px-2  hover:bg-gray-200 hover:rounded-none transition-transform"
          >
            {isLoading ? <Spinner /> : "Make Rider"}
          </button>
        </>
      )}
    </div>
  );
}

export default RiderButtons;
