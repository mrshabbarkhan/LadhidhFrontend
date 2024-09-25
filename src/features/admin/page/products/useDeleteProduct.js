import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "../../../services/apiProduct";
import toast from "react-hot-toast";

export function useDeleteProduct() {

    const queryClient = useQueryClient()
    const { mutate: removeProduct , isPending:isLoading} = useMutation({
      mutationFn: deleteProducts,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["products"],
        });
        toast.success("Remove Product Successfully");
      },
    });

    return {removeProduct, isLoading}
}