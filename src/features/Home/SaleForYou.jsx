import { useSelector } from "react-redux";
import Card from "../Cart/Card";
import Loader from "../../components/Loader";
import { useProducts } from "../admin/page/products/useProducts";

function SaleForYou() {
  const navigateToProductList = "/product-details";
  const {products, isLoading} = useProducts()

  const showOnlyGreaterDisc = 5;
  const ifProductsHaveDiscount = products?.filter(
    (product) => product.discount > showOnlyGreaterDisc
  );

  return (
    <section className="mt-3 sm:mt-6 font-semibold text-lg w-full">
      <h1 className="mb-2 text-xl py-1 sm:py-3 relative">Sale for you </h1>
      {isLoading ? (
        <Loader className={"h-40 w-full"} />
      ) : (
        <div className="flex gap-5 overflow-x-auto w-full ">
          {ifProductsHaveDiscount?.map((dtl, index) => (
            <Card
              key={index}
              product={dtl}
              redirect={navigateToProductList}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default SaleForYou;
