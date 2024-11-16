import { useMutation } from "@tanstack/react-query";
import { validCoupan } from "../../../services/apiCoupan";
import { toast } from "sonner";

export default function useValidCoupan() {
  return useMutation({
    mutationFn: validCoupan,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    },
  });
}
