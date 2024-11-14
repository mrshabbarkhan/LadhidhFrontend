import { lazy, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../../components/Loader";
import { useProducts } from "./useProducts";
import useFilterBySearch from "../../../../hooks/useFilterBySearch";
import Badge from "../../../../components/Badge";

const SearchBar = lazy(() => import("../../components/SearchBar"));
const ProductCard = lazy(() => import("./ProductCard"));
const AddProductPopup = lazy(() => import("../../components/AddProductPopup"));

function ProductPage() {
  const { products, isLoading } = useProducts();

  const { filteredProducts } = useFilterBySearch(products, "title");

  if (isLoading) {
    return <Loader className={"h-96"} />;
  }

  return (
    <section>
      <div className="mb-5 mt-3 flex justify-center items-center sm:justify-between">
        <h1 className="font-bold text-2xl text-center tracking-wide absolute top-5 sm:relative sm:top-0">
          Products <Badge data={products} />
        </h1>
        <div className="mt-10 px-5 sm:mt-0 flex w-full sm:w-fit items-center gap-3 absolute right-2 sm:right-14 top-6">
          <Suspense fallback={<Loader />}>
            <SearchBar placeholder={"Search by products..."} />
            <AddProductPopup />
          </Suspense>
        </div>
      </div>

      <div className="flex justify-center sm:justify-start gap-5 flex-wrap mt-10">
        <Suspense fallback={<Loader />}>
          {filteredProducts?.length ? (
            filteredProducts
              .map((dts, index) => <ProductCard key={index} info={dts} />)
              .reverse()
          ) : (
            <h1 className="text-center text-xl text-red-600 font-medium">
              No match found
            </h1>
          )}
        </Suspense>
      </div>
    </section>
  );
}

export default ProductPage;
