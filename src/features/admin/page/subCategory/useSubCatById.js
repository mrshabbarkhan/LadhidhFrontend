import { useMutation, useQuery } from "@tanstack/react-query";
import subCategories from "../../../services/apiSubCategory";

export function useSubCatById() {
  const {
    mutate: subCategoriesByIdFn,
    isSuccess,
    isPending,
    data: subCategoriesById,
  } = useMutation({
    mutationFn: subCategories.getSuCatByCat,
  });

  return { subCategoriesByIdFn, subCategoriesById, isPending, isSuccess };
}
