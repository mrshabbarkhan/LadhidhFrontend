import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProducts } from "../../../services/apiProduct";
import toast from "react-hot-toast";

export function useUpdateProduct() {
    const queryClient = useQueryClient()
    const { mutate: editSingleProduct, isPending:isLoading, isSuccess } = useMutation({
      mutationFn: editProducts,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
        toast.success("Updated Successfully");
      },
      onError: (err) => {
          toast.error("something went wrong");
          console.log(err)
      },
    });

    return {editSingleProduct, isLoading, isSuccess}
}