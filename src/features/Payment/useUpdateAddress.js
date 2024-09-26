import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAddress } from "../services/apiAddress";
import toast from "react-hot-toast";

export function useUpdateAddress() {

  const queryClient = useQueryClient();
  const { mutate: updateAddress, isPending , isSuccess} = useMutation({
    mutationFn: editAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey : ['address']
      })
      toast.success("Address updated");
    },
    onError: (err) => {
      toast.error("Please try later..."), console.log(err);
    },
  });

  return { updateAddress, isPending, isSuccess };
}
