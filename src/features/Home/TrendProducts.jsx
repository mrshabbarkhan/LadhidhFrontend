import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";

function TrendProducts() {
  const navigateToProductList = "/product-details";
  const { products = [], isLoading } = useProducts();

  // Initialize AOS and refresh it when products are loaded
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [products]);

  return (
    <section data-aos="fade-up" className="sm:mb-12">
      <h1 className="text-xl font-semibold sm:mb-3 py-3 sm:py-5">
        Products on Trend
      </h1>
      {isLoading ? (
        <Loader className="h-40 w-full" />
      ) : (
        <div
          className="flex flex-wrap gap-x-4 gap-y-4 justify-start w-full"
        >
          {products.map((product) => (
            <Card
              key={product._id} 
              product={product}
              isOnTrand={true}
              redirect={navigateToProductList}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TrendProducts;
