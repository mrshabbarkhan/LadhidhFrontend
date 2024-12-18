import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAddress } from "../services/apiAddress";
import { toast } from "sonner";

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  const {
    mutate: updateAddress,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: editAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["address"],
      });
      toast.success("Address updated");
    },
    onError: (err) => {
      toast.error("Please Try Later...");
    },
  });

  return { updateAddress, isPending, isSuccess };
}
