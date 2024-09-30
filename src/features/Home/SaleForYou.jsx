
import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";
import { useAOS } from "../../hooks/useAOS";

function SaleForYou() {
  const navigateToProductList = "/product-details";
  const { products = [], isLoading } = useProducts();

  const showOnlyGreaterDisc = 5;
  const ifProductsHaveDiscount = products.filter(
    (product) => product.discount > showOnlyGreaterDisc
  );

  useAOS(products);

  return (
    <section className="mt-3 sm:mt-6 font-semibold text-lg w-full ">
      <h1 className="mb-2 text-xl py-1 sm:py-3 relative">Sale for you</h1>
      {isLoading ? (
        <Loader className="h-40 w-full" />
      ) : (
        <div
          data-aos="fade-up"
          className="flex gap-5 overflow-x-auto overflow-y-hidden w-full"
        >
          {ifProductsHaveDiscount.map((product) => (
            <Card
              key={product.id}
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
