import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBanner } from "../../../services/apiBanner";
import toast from "react-hot-toast";

export function useAddBaner(params) {

    const queryClient = useQueryClient()
    const { mutate: addNewBanner , isPending} = useMutation({
      mutationFn: addBanner,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["banners"],
        });
        toast.success("Banners Added");
      },
    });

    return {addNewBanner,  isPending}
}