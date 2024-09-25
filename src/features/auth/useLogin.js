import { useMutation,  } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import toast from "react-hot-toast";
import { useLocalStorage } from "./LocalStorageContext";

const { register, login, getOtp } = authServices;

export function useLogin() {

    const {setUser} = useLocalStorage()

    const { mutate: loginUser, isPending, isSuccess  } = useMutation({
        mutationFn: login,
        mutationKey:['loginUser'],
        onSuccess: (user) => {
            toast.success("Login Successfully");
            setUser(user)
        },
        onError: (err) => {
            toast.error("invalid credentials")
        }
    });
    
    return { loginUser, isPending, isSuccess }
}