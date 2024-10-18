import { useMutation, useQueryClient } from "@tanstack/react-query";
import subCategories from "../../../services/apiSubCategory";
import { toast } from "sonner";

export function useUpdateSub() {
  const queryClient = useQueryClient();
  const {
    mutate: editSubCatFn,
    isPending,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: subCategories.editSubCat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["subCategory"],
      });
    },
    onError: () => {
      toast.error("Edit unSuccessfull");
    },
  });

  return { editSubCatFn, isPending, isSuccess, reset };
}
