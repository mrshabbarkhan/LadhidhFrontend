import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";

function TrendProducts() {
  const { products = [], isLoading } = useProducts();

  return (
    <section className="sm:mb-12">
      <div className="my-10">
        <h1 className=" font-semibold text-xl sm:text-2xl  text-primary leading-5">
          Products on Trend
        </h1>
        <p className="font-medium text-md">Trending Products You'll Love</p>
      </div>
      {isLoading ? (
        <Loader className="h-40 w-full" />
      ) : (
        <div className="flex flex-wrap gap-x-4 max-xl:gap-x-14  gap-y-4 w-full">
          {products.map((product) => (
            <Card key={product._id} product={product} isOnTrand={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TrendProducts;
