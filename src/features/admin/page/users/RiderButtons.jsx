import { useDispatch, useSelector } from "react-redux";
import { useToggleRider } from "../RiderPage/useToggleRider";
import { useAssignOrder } from "../../../Order/useAssignOrder";
import Spinner from "../../../../components/Spinner";
import { removeFromSelectedOrder } from "../../../Order/orderSlice";
import toast from "react-hot-toast";

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
      return toast.error("Please Select Product First");
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
    <div className="mt-4">
      {user?.isRider ? (
        <>
          <button
            onClick={() => handleAssingOrder()}
            className="border p-1 text-sm sm:text-base px-2 hover:bg-green-500 hover:text-white mr-2 "
          >
            {isPending ? <Spinner /> : "Assing Order"}
          </button>
          <button
            onClick={() => handleChangeRole(user._id)}
            className="border p-1 text-sm sm:text-base px-2 text-white mr-2 bg-primary-dark hover:bg-primary-light"
          >
            {isLoading ? <Spinner /> : "Remove Rider"}
          </button>
        </>
      ) : (
        <>
          <button className="border p-1 text-sm sm:text-base px-2 bg-gray-50 mr-2 hover:bg-gray-200">
            View Details
          </button>
          <button
            onClick={() => handleChangeRole(user._id)}
            className="border p-1 text-sm sm:text-base px-2 bg-gray-50 hover:bg-gray-200"
          >
            {isLoading ? <Spinner /> : "Make Rider"}
          </button>
        </>
      )}
    </div>
  );
}

export default RiderButtons;
