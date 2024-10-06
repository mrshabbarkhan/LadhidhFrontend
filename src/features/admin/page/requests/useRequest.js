import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../../services/apiRequested";

export function useRequest() {
  const {
    data: allRequests,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests,
  });

  return { allRequests, isError, isPending };
}
