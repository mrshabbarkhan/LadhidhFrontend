import { toast } from "sonner";
import { useAddRequest } from "../features/admin/page/requests/useAddRequest";

function OutOfStock({ product, className }) {
  const { addToRequsts, isError, isPending } = useAddRequest();

  function handleClick() {
    addToRequsts(product._id, {
      onSuccess: () => {
        toast.success(
          <span>
            You will be notified when <b>{product.title}</b> is available.
          </span>
        );
      },
    });
  }

  return (
    <button
      onClick={handleClick}
      className={`border ${className} border-primary line-clamp-1 whitespace-nowrap text-sm font-semibold px-3 py-1 rounded-lg hover:text-white hover:scale-95 hover:bg-primary-dark transition flex justify-center`}
    >
      {isPending ? "Notify..." : "Notify"}
    </button>
  );
}

export default OutOfStock;
