import FavoriteList from "../Favorites/FavoriteList";
import { useNavigate, useParams } from "react-router-dom";
import { useCatProduct } from "../admin/page/products/useCatProduct";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { useCategory } from "../admin/page/Categories/useCategory";
import { useSubCatById } from "../admin/page/subCategory/useSubCatById";
import SubCards from "../admin/page/subCategory/SubCards";
import { useSubProduct } from "../admin/page/subCategory/useSubProduct";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

function ProductListPage() {
  const { fetchProducts, catProducts, isPending } = useCatProduct();
  const { subCategoriesById, subCategoriesByIdFn } = useSubCatById();
  const {
    fetchSubProuct,
    subProducts,
    clearSubProducts,
    isPending: isLoading,
  } = useSubProduct(); // Ensure you have a clearSubProducts function
  const { categories } = useCategory();
  const { id, subId } = useParams();
  const filterSubCat = categories?.find((cat) => cat.cat_id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (subId) {
      fetchSubProuct(subId);
    } else if (id && !subId) {
      fetchProducts(id);
      clearSubProducts(); // Clear subProducts when going back to main category
    }
    subCategoriesByIdFn(filterSubCat?._id);
  }, [id, subId, filterSubCat, navigate]);

  if (isPending || !id) {
    return <Loader className={"h-96"} />;
  }

  if (!catProducts?.length && !subProducts?.length) {
    return <h1 className="text-center text-lg">No Item Found</h1>;
  }

  const isOnSub = subId ? true : false;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <LayoutGroup>
        {subCategoriesById?.length > 0 && (
          <motion.section
            layoutId="underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-end gap-10 w-full overflow-x-auto p-5 rounded-md mb-5 shadow-md bg-red-50"
          >
            <div
              className="text-center flex items-center justify-center flex-col min-w-[8rem] flex-shrink-0"
              onClick={() => navigate(`/product-list/${id}`)}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-24 object-cover cursor-pointer transition-transform duration-200"
                src={filterSubCat.img}
                alt="Category"
              />
              <h1 className="font-semibold text-center">All</h1>
            </div>
            <AnimatePresence>
              {subCategoriesById?.map((sub) => (
                <SubCards key={sub._id} sub={sub} id={id} />
              ))}
            </AnimatePresence>
          </motion.section>
        )}

        {isOnSub && subProducts?.length > 0 ? (
          subProducts?.map((product) => (
            <FavoriteList key={product._id} product={product} />
          ))
        ) : !isOnSub && catProducts?.length > 0 ? (
          catProducts.map((product) => (
            <FavoriteList key={product._id} product={product} />
          ))
        ) : isLoading ? (
          <Loader className={"h-96"} />
        ) : (
          <h1 className="text-center text-lg">No Item Found</h1>
        )}
      </LayoutGroup>
    </motion.section>
  );
}

export default ProductListPage;
