import { useMutation, useQueryClient } from "@tanstack/react-query";
import { raiseRequest } from "../../../services/apiRequested";

export function useAddRequest() {
  const queryClient = useQueryClient();
  const {
    mutate: addToRequsts,
    isError,
    isPending,
  } = useMutation({
    mutationFn: raiseRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: "requests",
      });
    },
  });

  return { addToRequsts, isError, isPending };
}
