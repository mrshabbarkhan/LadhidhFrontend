import { useMutation, useQueryClient } from "@tanstack/react-query";
import userDeletionService from "../../../services/apiUserDeleteReq";
import { toast } from "sonner";

function useDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteUser, isPending } = useMutation({
    mutationFn: userDeletionService.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userDelete"],
      });

      toast.success("user Deleted Successfully");
    },
    onError: (error) => {
      toast.error("Something went wrong");
      console.log(error);
    },
  });

  return { deleteUser, isPending };
}

export default useDeleteUser;
