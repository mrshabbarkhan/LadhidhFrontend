import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiSettings } from "../../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSettFn, isPending } = useMutation({
    mutationFn: apiSettings.updateSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("Settings Update Successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.error || "Something went wrong");
    },
  });

  return { updateSettFn, isPending };
}
