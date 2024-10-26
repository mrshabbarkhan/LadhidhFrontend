import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleStock } from "../../../services/apiProduct";
import { toast } from "sonner";

export function useToggleProduct() {
  const queryClient = useQueryClient();
  const { mutate: toggleStatus, isPending } = useMutation({
    mutationFn: toggleStock,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("Stock Toggle Changed");
    },
    onError: (error) => {
      toast.error("Something happens wrong");
    },
  });

  return { toggleStatus, isPending };
}
