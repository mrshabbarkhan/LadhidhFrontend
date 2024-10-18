import FavoriteList from "../Favorites/FavoriteList";
import { useNavigate, useParams } from "react-router-dom";
import { useCatProduct } from "../admin/page/products/useCatProduct";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { useCategory } from "../admin/page/Categories/useCategory";
import { useSubCatById } from "../admin/page/subCategory/useSubCatById";
import SubCards from "../admin/page/subCategory/SubCards";
import { useSubProduct } from "../admin/page/subCategory/useSubProduct";

function ProductListPage() {
  const { fetchProducts, catProducts, isPending } = useCatProduct();
  const { subCategoriesById, subCategoriesByIdFn } = useSubCatById();
  const { fetchSubProuct, subProducts } = useSubProduct();
  const { categories } = useCategory();
  const { id, subId } = useParams();
  const filterSubCat = categories?.find((cat) => cat.cat_id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (subId) {
      fetchSubProuct(subId);
    }
    if (id && !subId) {
      fetchProducts(id);
    }
    subCategoriesByIdFn(filterSubCat?._id);
  }, [id, subId, filterSubCat, navigate]);

  if (isPending || !id) {
    return <Loader />;
  }

  if (!catProducts?.length > 0) {
    return <h1 className="text-center text-lg">No Item Found</h1>;
  }

  const allProduct = [...catProducts, ...(subProducts || [])];

  const isOnSub = subId ? true : false;

  return (
    <section className="mb-20">
      {subCategoriesById?.length > 0 && (
        <section className="flex flex-nowrap items-end gap-10 w-full overflow-x-auto p-5 rounded-md mb-5 bg-red-200">
          <div
            className="text-center"
            onClick={() => navigate(`/product-list/${id}`)}
          >
            <img
              className="w-24  object-cover hover:scale-90 cursor-pointer transition-transform duration-200"
              src={filterSubCat.img}
              alt="Category"
            />
            <h1 className="font-semibold">All</h1>
          </div>
          {subCategoriesById?.map((sub) => (
            <SubCards key={sub._id} sub={sub} id={id} />
          ))}
        </section>
      )}

      {isOnSub && subProducts?.length > 0 ? (
        subProducts?.map((product) => (
          <FavoriteList key={product._id} product={product} />
        ))
      ) : !isOnSub && catProducts?.length > 0 ? (
        allProduct.map((product) => (
          <FavoriteList key={product._id} product={product} />
        ))
      ) : (
        <h1 className="text-center text-lg">No Item Found</h1>
      )}
    </section>
  );
}

export default ProductListPage;
