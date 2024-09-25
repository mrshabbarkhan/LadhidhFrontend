import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCategory } from "../../../services/apiCategories";
import toast from "react-hot-toast";

export function useUpdateCategory() {
  const queryClient = useQueryClient();
  const { mutate: editSingleCategory, isPending, isSuccess } = useMutation({
    mutationFn: editCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast.success("Category updated Successfully");
    },
    onError: (err) => {
      toast.error("something went wrong");
    },
  });

  return { editSingleCategory, isPending, isSuccess };
}
