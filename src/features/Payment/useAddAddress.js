import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddress } from "../services/apiAddress";
import toast from "react-hot-toast";

export function useAddAddress() {
  const queryClient = useQueryClient();
  const { mutate: addNewAddress, isPending: isLoading, isSuccess } = useMutation({
    mutationFn: addAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["address"],
      });
      toast.success("Address Added");
    },
    onError: (err) => {
      toast.error("oops something went wrong"), console.log(err);
    },
  });

  return { addNewAddress, isLoading, isSuccess };
}
