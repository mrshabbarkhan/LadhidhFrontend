import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar";
import AddCategoryPopup from "../../components/AddCategoryPopup";
import CategoryCardForAdmin from "./CategoryCardForAdmin";
import { useCategory } from "./useCategory";
import Loader from "../../../../components/Loader";
import { useDeleteCategory } from "./useDeleteCategory";
import { useAddCategory } from "./useAddCategory";
import useFilterBySearch from "../../../../hooks/useFilterBySearch";

const CategoriesPage = () => {
  const { categories, isPending } = useCategory();
  const { removeCategory, isPending: isLoading } = useDeleteCategory();
  const { addCategories, isSuccess, isPending: isAdding } = useAddCategory();

  const { filteredProducts: filterbyCategory } = useFilterBySearch(
    categories,
    "name"
  );

  const handleAdd = (e, image, categoryTitle) => {
    e.preventDefault();
    const data = new FormData();
    data.append("img", image);
    data.append("cat_id", crypto.randomUUID());
    data.append("name", categoryTitle);

    try {
      addCategories(data);
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  const handleDelete = (id) => {
    removeCategory(id);
  };

  if (isPending) {
    return <Loader className={"h-96"} />;
  }

  return (
    <section>
      <div className="mb-5 mt-3 flex justify-center items-center sm:justify-between">
        <h1 className="font-bold text-2xl text-center tracking-wide absolute top-5 sm:relative sm:top-0">
          Categories
        </h1>
        <div className="mt-10 px-5 sm:mt-0 flex w-full sm:w-fit items-center gap-3 absolute right-2 sm:right-14 top-6 ">
          <SearchBar placeholder={"search by category..."} />
          <AddCategoryPopup
            isPending={isAdding}
            isSuccess={isSuccess}
            handleAdd={handleAdd}
          />
        </div>
      </div>
      <div className="categories_img  p_text flex justify-center sm:justify-start flex-wrap sm:gap-x-10 gap-y-3 sm:gap-y-8 sm:px-4 mt-8">
        {filterbyCategory?.length ? (
          filterbyCategory.map((dts) => (
            <CategoryCardForAdmin
              key={dts._id}
              id={dts._id}
              img={dts.img}
              title={dts.name}
              redirect={"/admin"}
              handleDelete={handleDelete}
              isDeleting={isLoading}
            />
          ))
        ) : (
          <h1 className="text-center text-xl text-red-600 font-medium">
            No match found
          </h1>
        )}
      </div>
    </section>
  );
};

export default CategoriesPage;
