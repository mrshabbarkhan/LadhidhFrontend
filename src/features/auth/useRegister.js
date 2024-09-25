import { useMutation, useQueryClient } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import toast from "react-hot-toast";
import { useLocalStorage } from "./LocalStorageContext";

const { register, login, getOtp } = authServices;

export function useRegister() {

const { setUser } = useLocalStorage();

  const { mutate: registerUser, isPending, isSuccess } = useMutation({
    mutationFn: (formData) => register(formData),
    onSuccess: (user) => {
      toast.success("Registered Successfully");
      setUser(user)
    },
    onError: (err) => {
      toast.error("Something went wrong");
      console.log(err);
    },
  });

  return { registerUser, isPending, isSuccess };
}

