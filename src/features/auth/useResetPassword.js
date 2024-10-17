import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import { toast } from "sonner";

export function useResetPassword() {
  const {
    mutate: resetPasswordFn,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: authServices.resetPassword,
    onSuccess: () => {
      toast.success("Password reset Successfully");
    },
    onError: () => {
      toast.error("Someting went wrong");
    },
  });

  return { resetPasswordFn, isSuccess, isPending };
}
