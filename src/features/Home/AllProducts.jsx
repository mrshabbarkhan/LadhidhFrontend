import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";
import FavoriteList from "../Favorites/FavoriteList";

function AllProducts() {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="mb-16">
      {products?.map((product) => (
        <FavoriteList key={product._id} product={product} />
      ))}
    </section>
  );
}

export default AllProducts;
