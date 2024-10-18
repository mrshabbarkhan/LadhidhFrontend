import { useMutation, useQueryClient } from "@tanstack/react-query";
import subCategories from "../../../services/apiSubCategory";
import { toast } from "sonner";

export function useAddSubCat() {
  const queryClient = useQueryClient();
  const {
    mutate: addSubCatFn,
    isError,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: subCategories.addSubCat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["subCategory"],
      });

      toast.success("Category Added Successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  return { addSubCatFn, isError, isPending, isSuccess };
}
