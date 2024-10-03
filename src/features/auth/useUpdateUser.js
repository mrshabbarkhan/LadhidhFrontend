import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const {mutate: updateUser, isPending} = useMutation({
    mutationFn: authServices.editUser,
    onSuccess: () => {
      toast.success("User Details updated");
    },
    onError: (err) => {
        toast.error("Something went wrong");
        console.log("update error", err)
    },
  });
    
   return {updateUser, isPending}
}
