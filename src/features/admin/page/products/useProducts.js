import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../services/apiProduct";

export function useProducts() {
  const { data: products, isPending: isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return { products, isLoading };
}
