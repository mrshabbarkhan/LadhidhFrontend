import "aos/dist/aos.css";
import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";
import { Link } from "react-router-dom";
import { useAOS } from "../../hooks/useAOS";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function TrendProducts() {
  const { products = [], isLoading } = useProducts();

  const sortedProducts = products?.sort((a, b) => {
    if (a.inStock === b.inStock) return 0; // Same stock status
    return a.inStock ? -1 : 1; // If a is in stock, it comes first
  });

  useAOS();

  return (
    <section className="sm:mb-12 mb-6" data-aos="fade-up">
      <div className="mt-10 mb-5 flex justify-between items-start">
        <div>
          <h1 className=" font-semibold text-xl sm:text-2xl  text-gray-800 leading-7">
            Trending Products
          </h1>
          <p className="font-medium text-md ">Trending Products You'll Love</p>
        </div>
        <Link
          to={"/products"}
          className="mr-2 text-xs flex items-center gap-2 sm:text-base hover:scale-95 transition-transform line-clamp-1 px-1 rounded-md text-gray-700 "
        >
          View All
          <MdOutlineArrowRightAlt />
        </Link>
      </div>
      {isLoading ? (
        <Loader className="h-40 w-full" />
      ) : (
        <div className="flex gap-x-5 sm:gap-12 overflow-y-hidden overflow-x-auto">
          {sortedProducts?.map((product) => (
            <Card key={product._id} product={product} isOnTrand={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TrendProducts;
