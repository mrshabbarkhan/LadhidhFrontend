import { useQuery } from "@tanstack/react-query";
import { getAllBanners } from "../../../services/apiBanner";

export function useBanners() {
  const { data: banners, isPending } = useQuery({
    queryKey: ["banners"],
    queryFn: getAllBanners,
  });

  return { banners, isPending };
}
