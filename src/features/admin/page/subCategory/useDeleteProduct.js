import { useMutation, useQueryClient } from "@tanstack/react-query";
import subCategories from "../../../services/apiSubCategory";
import { toast } from "sonner";

export function useDeleteSubCat() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteSubCat,
    isPending,
    isError,
  } = useMutation({
    mutationFn: subCategories.removeSubCatById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["subCategory"],
      });
      toast.success("Category Deleted");
    },
    onError: () => {
      toast.error("Delete Unsuccessfull");
    },
  });

  return { deleteSubCat, isPending, isError };
}
