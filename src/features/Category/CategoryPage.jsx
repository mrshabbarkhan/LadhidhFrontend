import Categories from "./Categories";
import { useCategory } from "../admin/page/Categories/useCategory";

function CategoryPage() {
  const { categories } = useCategory();

  return (
    <section className="pt-5 grid grid-cols-3 gap-y-6 sm:grid-cols-5 justify-between">
      {categories?.map((dts, index) => (
        <Categories product={dts} key={index} />
      ))}
    </section>
  );
}

export default CategoryPage;
