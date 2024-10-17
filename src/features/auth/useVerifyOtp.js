import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";

export function useVerifyOtp() {
  const {
    mutate: verifyOtpFn,
    data: verfiyToken,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: authServices.verifyOtp,
    onError: (error) => {
      console.log(error);
    },
  });

  return { verifyOtpFn, verfiyToken, isSuccess, isPending };
}
