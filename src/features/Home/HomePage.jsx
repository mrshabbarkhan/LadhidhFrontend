import NavigationBar from "../../components/Navs/NavigationBar";
import Categories from "../Category/Categories";
import Category from "../Category/Category";
import OfferForYou from "./OfferForYou";
import SaleForYou from "./SaleForYou";
import TrendProducts from "./TrendProducts";
import { useCategory } from "../admin/page/Categories/useCategory";

import LandingPage from "./LandingPage";

function HomePage() {
  const navigateCategories = "/category";

  const { categories } = useCategory();

  return (
    <>
        <LandingPage/>
      <div className="pt-5 relative overflow-hidden">
        <Category heading={"Shop by Categories"} btn={"view all"}>
          {categories?.map((dts) => (
            <Categories product={dts} key={dts._id}
              redirect={navigateCategories}
            />
          ))}
        </Category>
        <OfferForYou />
        <SaleForYou />
        <TrendProducts />
        <NavigationBar />
      </div>
    </>
  );
}

export default HomePage;
