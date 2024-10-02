import { useToggleRider } from "../RiderPage/useToggleRider";

function RiderButtons({ user }) {

  const { changeRole } = useToggleRider()
  
  const handleChangeRole = (id) => {
    changeRole(id)
  }

    return (
      <div className="mt-4">
        {user?.isRider ? (
          <>
            <button className="border p-1 text-sm sm:text-base px-2 hover:bg-gray-800 hover:text-white mr-2 ">
              Assing Order
            </button>
            <button onClick={()=>handleChangeRole(user._id)} className="border p-1 text-sm sm:text-base px-2 text-white mr-2 bg-gray-700 hover:bg-gray-900">
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
