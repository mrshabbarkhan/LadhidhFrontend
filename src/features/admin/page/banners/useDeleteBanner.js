import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBanner } from "../../../services/apiBanner";
import toast from "react-hot-toast";

export function useDeleteBanner() {
  const queryClient = useQueryClient();
  const { mutate: removeBanner, isPending } = useMutation({
    mutationFn: deleteBanner,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["banners"],
      });
      toast.success("Deleted Successfully")
    },
  });

  return { removeBanner, isPending };
}
