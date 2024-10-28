import { useMutation, useQueryClient } from "@tanstack/react-query";
import userDeletionService from "../../../services/apiUserDeleteReq";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function useRaiseDelete() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: raiseDeleteAcc, isPending } = useMutation({
    mutationFn: userDeletionService.raiseDeleteReq,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userDelete"],
      });

      toast.success("Account Delete Request Raised SuccessFully");
      navigate("/"); // Redirect user after deletion
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return { raiseDeleteAcc, isPending };
}

export default useRaiseDelete;
