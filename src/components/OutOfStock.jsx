import toast from "react-hot-toast";

function OutOfStock() {
    return (
      <button
        onClick={()=>toast.error("yehh offcourse")}
        className={`border border-primary  text-sm font-semibold px-3 py-1 rounded-lg hover:text-white hover:scale-95 hover:bg-primary-dark transition flex justify-center`}
      >
        Notify me
      </button>
    );
}

export default OutOfStock
