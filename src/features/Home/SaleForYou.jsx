import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";
import { useAOS } from "../../hooks/useAOS";

function SaleForYou() {
  const navigateToProductList = "/product-details";
  const { products = [], isLoading } = useProducts();

  const showOnlyGreaterDisc = 14;
  const ifProductsHaveDiscount = products.filter(
    (product) => product.discount > showOnlyGreaterDisc
  );

  useAOS();

  return (
    <section className="mt-3 sm:mt-6  w-full" data-aos="fade-up">
      <div className="mb-2 py-1 relative sm:py-3">
        <h1 className=" font-semibold text-xl sm:text-2xl  text-gray-800 leading-5">
          Sale for you
        </h1>
        <p className="font-medium text-md">Most popular products near you!</p>
      </div>
      {isLoading ? (
        <Loader className="h-40 w-full" />
      ) : (
        <div className="flex gap-5 sm:gap-12 overflow-x-auto overflow-y-hidden w-full mt-3">
          {ifProductsHaveDiscount.map((product) => (
            <Card
              key={product._id}
              product={product}
              redirect={navigateToProductList}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SaleForYou;
