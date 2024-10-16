import "aos/dist/aos.css";
import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";
import { Link } from "react-router-dom";

function TrendProducts() {
  const { products = [], isLoading } = useProducts();

  return (
    <section className="sm:mb-12 mb-6">
      <div className="mt-10 mb-5 flex justify-between items-start">
        <div>
          <h1 className=" font-semibold text-xl sm:text-2xl  text-primary leading-7">
            Trending Products
          </h1>
          <p className="font-medium text-md ">Trending Products You'll Love</p>
        </div>
        <Link
          to={"/products"}
          className="mr-2 text-sm sm:text-base hover:underline line-clamp-1 px-1 rounded-md bg-red-200 text-primary "
        >
          View All
          {/* <FaArrowRightLong /> */}
        </Link>
      </div>
      {isLoading ? (
        <Loader className="h-40 w-full" />
      ) : (
        <div className="flex gap-x-5   overflow-x-auto">
          {products.map((product) => (
            <Card key={product._id} product={product} isOnTrand={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TrendProducts;
