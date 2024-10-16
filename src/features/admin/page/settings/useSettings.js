import { useQuery } from "@tanstack/react-query";
import { apiSettings } from "../../../services/apiSettings";

export function useSettings() {
  const {
    data: settings,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: apiSettings.getSettings,
  });

  return { settings, isPending, isSuccess };
}
