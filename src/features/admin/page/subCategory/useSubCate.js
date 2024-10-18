import { useQuery } from "@tanstack/react-query";
import subCategories from "../../../services/apiSubCategory";

export function useSubCate() {
  const {
    data: subCategory,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["subCategory"],
    queryFn: subCategories.getSubCategory,
  });

  return { subCategory, isLoading, isError };
}
