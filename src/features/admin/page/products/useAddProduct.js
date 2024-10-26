import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProducts } from "../../../services/apiProduct";
import { toast } from "sonner";

export function useAddProduct() {
  const queryClient = useQueryClient();
  const {
    mutate: addNewProduct,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: addProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("Product Added Successfully");
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { addNewProduct, isLoading, isSuccess };
}
