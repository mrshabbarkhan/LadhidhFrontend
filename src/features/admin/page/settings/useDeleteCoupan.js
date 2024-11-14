import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCoupan } from "../../../services/apiCoupan";
import { toast } from "sonner";

export default function useDeleteCoupan() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCoupan,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["coupans"],
      });
      toast.success("Coupan delete success");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
}
