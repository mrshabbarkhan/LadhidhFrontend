import { useQuery } from "@tanstack/react-query";
import { allCartItmes } from "../services/apiCart";

export function useCart() {
  const { data: cartItems, isPending, refetch, isSuccess } = useQuery({
    queryKey: ["cart"],
    queryFn: allCartItmes,
  });
  return { cartItems, isPending, refetch, isSuccess };
}
