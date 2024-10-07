import FavoriteList from "../Favorites/FavoriteList";
import { useParams } from "react-router-dom";
import { useProducts } from "../admin/page/products/useProducts";
import { useCatProduct } from "../admin/page/products/useCatProduct";
import { useEffect } from "react";
import Loader from "../../components/Loader";

function ProductListPage() {
  const { fetchProducts, catProducts, isPending } = useCatProduct();
  const { id } = useParams();

  useEffect(() => {
    fetchProducts(id);
  }, []);

  if (isPending) {
    return <Loader />;
  }

  if (!catProducts?.length > 0) {
    return <h1 className="text-center text-lg">No Item Found</h1>;
  }

  return (
    <>
      {catProducts?.map((product) => (
        <FavoriteList key={product._id} product={product} />
      ))}
    </>
  );
}

export default ProductListPage;
