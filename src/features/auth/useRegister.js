import { useMutation, useQueryClient } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import { toast } from "sonner";
import { useLocalStorage } from "./LocalStorageContext";

const { register, login, getOtp } = authServices;

export function useRegister() {
  const { setUser } = useLocalStorage();

  const {
    mutate: registerUser,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (formData) => register(formData),
    onSuccess: (user) => {
      toast.success("Registered Successfully");
      setUser(user);
    },
    onError: (err) => {
      toast.error(err.response?.data.error || "Something went wrong");
    },
  });

  return { registerUser, isPending, isSuccess };
}
