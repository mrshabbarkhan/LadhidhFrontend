import { useMutation } from "@tanstack/react-query";
import { assignOrder } from "../services/apiOrders";
import { toast } from "sonner";

export function useAssignOrder() {
  const {
    mutate: postAssignOrder,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: assignOrder,
    onSuccess: (data) => {
      toast.success("order assign success");
    },
  });

  return { postAssignOrder, isPending, isSuccess };
}
