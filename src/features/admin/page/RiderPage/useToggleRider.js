import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleRider } from "../../../services/apiRider";
import { toast } from "sonner";

export function useToggleRider() {
  const queryClient = useQueryClient();
  const {
    mutate: changeRole,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: toggleRider,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"]["riders"],
      });
      toast.success("User role changed successfully");
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { changeRole, isPending, isSuccess };
}
