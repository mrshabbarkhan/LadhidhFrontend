import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../../services/apiCategories";
import toast from "react-hot-toast";

export function useAddCategory() {
  const queryClient = useQueryClient();
  const { mutate: addCategories, isPending , isSuccess} = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast.success("Category Added Successfully");
    },
    onError: (err) => {
      toast.error("something went wrong");
    },
  });

  return { addCategories, isPending , isSuccess};
}
