import { useMutation } from "@tanstack/react-query";
import authServices from "../services/apiAuthService";
import { toast } from "sonner";
import { useLocalStorage } from "./LocalStorageContext";

export function useUpdateUser() {
  const { setUser } = useLocalStorage();

  const {
    mutate: updateUser,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: authServices.editUser,
    onSuccess: (data) => {
      toast.success("User Details updated");
      setUser(data.user);
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { updateUser, isPending, isSuccess };
}
