import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../../../services/apiCategories";
import toast from "react-hot-toast";

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { mutate: removeCategory, isPending } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast.success("Category deleted");
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { removeCategory, isPending };
}
