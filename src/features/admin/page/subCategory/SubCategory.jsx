import { useSelector } from "react-redux";
import AddCategoryPopup from "../../components/AddCategoryPopup";
import SearchBar from "../../components/SearchBar";
import CategoryCardForAdmin from "../Categories/CategoryCardForAdmin";
import { useDeleteSubCat } from "./useDeleteProduct";
import { useSubCate } from "./useSubCate";
import Loader from "../../../../components/Loader";
import { useAddSubCat } from "./useAddSubCat";
import Badge from "../../../../components/Badge";

function SubCategory() {
  const { subCategory, isLoading } = useSubCate();
  const { deleteSubCat } = useDeleteSubCat();
  const { addSubCatFn, isPending, isSuccess } = useAddSubCat();
  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);

  const filterbyCategory = subCategory?.filter((ctg) =>
    ctg.name.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    deleteSubCat(id);
  };

  const handleAdd = (e, image, categoryTitle, categoryInput) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("categoryId", categoryInput);
    data.append("name", categoryTitle);

    try {
      addSubCatFn(data);
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  if (isLoading) {
    return <Loader className={"h-96"} />;
  }

  return (
    <section>
      <div className="mb-5 mt-3 flex justify-center items-center sm:justify-between">
        <h1 className="font-bold text-2xl text-center tracking-wide absolute top-5 sm:relative sm:top-0">
          Sub Category <Badge data={subCategory} />
        </h1>
        <div className="mt-10 px-5 sm:mt-0 flex w-full sm:w-fit items-center gap-3 absolute right-2 sm:right-14 top-6 ">
          <SearchBar placeholder={"search by category..."} />
          <AddCategoryPopup
            handleAdd={handleAdd}
            isPending={isPending}
            isSuccess={isSuccess}
            isFromSubCat={true}
          />
        </div>
      </div>

      <div className="categories_img  p_text flex justify-center sm:justify-start flex-wrap sm:gap-x-10 gap-y-3 sm:gap-y-8 sm:px-4 mt-8">
        {filterbyCategory?.map((cat) => (
          <CategoryCardForAdmin
            key={cat._id}
            id={cat._id}
            img={cat.image}
            title={cat.name}
            categoryId={cat.category}
            handleDelete={handleDelete}
            isFromSubCat={true}
          />
        ))}
      </div>
    </section>
  );
}

export default SubCategory;
