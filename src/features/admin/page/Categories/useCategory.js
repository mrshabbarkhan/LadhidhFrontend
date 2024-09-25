import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../../services/apiCategories";

export function useCategory() {
  const { data: categories, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategory,
  });

  return { categories, isPending };
}
