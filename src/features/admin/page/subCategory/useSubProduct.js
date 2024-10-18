import { useMutation } from "@tanstack/react-query";
import subCategories from "../../../services/apiSubCategory";
import { toast } from "sonner";

export function useSubProduct() {
  const {
    mutate: fetchSubProuct,
    data: subProducts,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: subCategories.getSubProducts,
    onError: () => {
      toast.error("Something Wents Wrong");
    },
  });

  return { fetchSubProuct, subProducts, isPending, isSuccess };
}
