import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import { toast } from "sonner";
import { useLocalStorage } from "./LocalStorageContext";

const { login } = authServices;

export function useLogin() {
  const { setUser } = useLocalStorage();

  const {
    mutate: loginUser,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: login,
    mutationKey: ["loginUser"],
    onSuccess: (user) => {
      toast.success("Login Successfully");
      setUser(user);
    },
    onError: (err) => {
      toast.error("invalid credentials");
    },
  });

  return { loginUser, isPending, isSuccess };
}
