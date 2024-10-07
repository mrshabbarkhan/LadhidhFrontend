import { useMutation } from "@tanstack/react-query";
import { getProdByCat } from "../../../services/apiProduct";

export function useCatProduct() {
  const {
    mutate: fetchProducts,
    data: catProducts,
    isPending,
  } = useMutation({
    mutationFn: getProdByCat,
  });

  return { fetchProducts, catProducts, isPending };
}
