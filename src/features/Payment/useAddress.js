import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../services/apiAddress";

export function useAddress() {
  const {
    data: address,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ["address"],
    queryFn: getAddress,
  });

  return { address, isPending, isSuccess };
}
