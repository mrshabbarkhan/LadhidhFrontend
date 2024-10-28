import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";
import FavoriteList from "../Favorites/FavoriteList";

function AllProducts() {
  const { products, isLoading } = useProducts();

  const sortedProducts = products?.sort((a, b) => {
    if (a.inStock === b.inStock) return 0; // Same stock status
    return a.inStock ? -1 : 1; // If a is in stock, it comes first
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="mb-16">
      {sortedProducts?.map((product) => (
        <FavoriteList key={product._id} product={product} />
      ))}
    </section>
  );
}

export default AllProducts;
