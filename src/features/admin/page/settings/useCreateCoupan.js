import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCoupan } from "../../../services/apiCoupan";
import { toast } from "sonner";

export default function useCreateCoupan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCoupan,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["coupans"],
      });
      toast.success("Coupan Created Successfully");
    },
    onError: () => {
      toast.error("Coupan Could not be created");
    },
  });
}
