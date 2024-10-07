import { useEffect, useState } from "react";
import { useProducts } from "../features/admin/page/products/useProducts";
import Loader from "./Loader";
import Card from "../features/Cart/Card";

function YouMight() {
  const { products = [], isLoading } = useProducts();
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Fisher-Yates Shuffle Algorithm
      const shuffled = [...products]
        .sort(() => 0.5 - Math.random()) // Shuffle the products array
        .slice(0, 8); // Limit to 10 products
      setShuffledProducts(shuffled);
    }
  }, [products]);

  return (
    <section className="mb-20">
      <div className="my-6">
        <h2 className="font-semibold text-lg sm:text-xl leading-5">
          You Might Be Like
        </h2>
        <p className="font-medium text-md">Products You'll Love</p>
      </div>
      {isLoading ? (
        <Loader className="h-40 w-full" />
      ) : (
        <div className="flex  sm:gap-x-4  gap-y-4 w-full overflow-x-auto">
          {shuffledProducts.map((product) => (
            <Card key={product._id} product={product} isOnTrand={false} />
          ))}
        </div>
      )}
    </section>
  );
}

export default YouMight;
