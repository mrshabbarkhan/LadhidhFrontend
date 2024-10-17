import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToCart } from "../services/apiCart";
import { toast } from "sonner";

export function useAddCart() {
  const queryClient = useQueryClient();
  const { mutate: addToCart, isPending: isLoading } = useMutation({
    mutationFn: addProductToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
      toast.success("Product Added To cart");
    },
    onError: (err) => {
      const error = err.response?.data?.message || "Try Again Later";
      toast.error(error);
      console.log(err);
    },
  });

  return { addToCart, isLoading };
}
