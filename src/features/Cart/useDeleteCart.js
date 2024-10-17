import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../services/apiCart";
import { toast } from "sonner";

export function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: removeCart, isPending } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
      toast.success("Cart Deleted Successfully");
    },
  });

  return { removeCart, isPending };
}
