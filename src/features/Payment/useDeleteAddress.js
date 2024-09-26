import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeAddress } from "../services/apiAddress";
import toast from "react-hot-toast";

export function useDeleteAddress() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteAddress,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: removeAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["address"],
      });
      toast.success("Address deleted");
    },
    onError: (err) => {
      toast.error("oops something went wrong"), console.log(err);
    },
  });

  return { deleteAddress, isPending, isSuccess };
}
