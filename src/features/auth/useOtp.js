import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import toast from "react-hot-toast";

export function useOtp() {
  const {
    mutate: fetchOtp,
    isPending,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: authServices.getOtp,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: () => {
      toast.error("Try after some time");
    },
  });

  return { fetchOtp, isPending, isSuccess, data };
}
