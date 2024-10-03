import { useSelector } from "react-redux";
import { useToggleRider } from "../RiderPage/useToggleRider";
import { useAssignOrder } from "../../../Order/useAssignOrder";
import Spinner from "../../../../components/Spinner";

function RiderButtons({ user }) {

  const { changeRole } = useToggleRider()
  const { postAssignOrder, isPending, isSuccess } = useAssignOrder();

  const { selectedOrder } = useSelector((state) => state.order);
  
  const handleChangeRole = (id) => {
    changeRole(id)
  }

  const handleAssingOrder = () => {
   
    if(!selectedOrder || !user) return
    const order = {
      order: selectedOrder._id,
      user : user._id
    }
    postAssignOrder(order)
  }

    return (
      <div className="mt-4">
        {user?.isRider ? (
          <>
            <button onClick={()=>handleAssingOrder()} className="border p-1 text-sm sm:text-base px-2 hover:bg-green-500 hover:text-white mr-2 ">
              {isPending ? <Spinner/>  : "Assing Order"}
            </button>
            <button onClick={()=>handleChangeRole(user._id)} className="border p-1 text-sm sm:text-base px-2 text-white mr-2 bg-primary-dark hover:bg-primary-light">
              Remove Rider
            </button>
          </>
        ) : (
          <>
            <button className="border p-1 text-sm sm:text-base px-2 bg-gray-50 mr-2 hover:bg-gray-200">
              View Details
            </button>
            <button onClick={()=>handleChangeRole(user._id)} className="border p-1 text-sm sm:text-base px-2 bg-gray-50 hover:bg-gray-200">
              Make Rider
            </button>
          </>
        )}
      </div>
    );
}

export default RiderButtons
