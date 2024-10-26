import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProducts } from "../../../services/apiProduct";
import { toast } from "sonner";

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  const {
    mutate: editSingleProduct,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: editProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("Updated Successfully");
    },
    onError: (err) => {
      toast.error("something went wrong");
    },
  });

  return { editSingleProduct, isLoading, isSuccess };
}
