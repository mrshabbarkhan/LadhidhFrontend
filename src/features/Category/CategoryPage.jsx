import Categories from "./Categories";
import Category from "./Category";
import { useCategory } from "../admin/page/Categories/useCategory";

function CategoryPage({ onClick }) {

  const { categories} = useCategory()
  
  return (
    <section className="grid grid-cols-3 gap-y-6 sm:grid-cols-5 justify-between">
        {categories?.map((dts, index) => (
          <Categories product={dts}
            key={index}
            redirect={onClick || `/product-list/${dts.cat_id}`}
          />
        ))}
    </section>
  );
}

export default CategoryPage;
