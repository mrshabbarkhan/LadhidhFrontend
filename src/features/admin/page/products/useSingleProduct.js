import { useMutation } from "@tanstack/react-query";
import { getSingleProduct } from "../../../services/apiProduct";

export function useSingleProduct() {
  const {
    mutate: singleProduct,
    isPending,
    isSuccess,
    data: product,
    isIdle,
  } = useMutation({
    mutationFn: getSingleProduct,
  });

  return { product, singleProduct, isPending, isSuccess, isIdle };
}
