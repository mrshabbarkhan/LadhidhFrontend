import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import { toast } from "sonner";

export function useVerifyOtp() {
  const {
    mutate: verifyOtpFn,
    data: verfiyToken,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: authServices.verifyOtp,
    onError: (error) => {
      toast.error("Enter valid OTP");
    },
  });

  return { verifyOtpFn, verfiyToken, isSuccess, isPending };
}
