import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import toast from "react-hot-toast";

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
      //   toast.error(error);
    },
  });

  return { verifyOtpFn, verfiyToken, isSuccess, isPending };
}
