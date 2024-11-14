import { lazy, Suspense, useMemo } from "react";
import { useCategory } from "../admin/page/Categories/useCategory";

import AppBanner from "../../components/AppBanner";
import Features from "../../components/Features";
import Loader from "../../components/Loader";
const LandingPage = lazy(() => import("./LandingPage"));

const NavigationBar = lazy(() => import("../../components/Navs/NavigationBar"));
const Categories = lazy(() => import("../Category/Categories"));
const Category = lazy(() => import("../Category/Category"));
const SaleForYou = lazy(() => import("./SaleForYou"));
const TrendProducts = lazy(() => import("./TrendProducts"));
const Footer = lazy(() => import("./Footer"));

function HomePage() {
  const { categories } = useCategory();

  const memoizedCategories = useMemo(
    () =>
      categories?.map((category) => (
        <Categories product={category} key={category._id} />
      )),
    [categories]
  );

  return (
    <>
      <AppBanner />
      <LandingPage />
      <div className="pt-5 relative overflow-hidden">
        <Suspense fallback={<Loader />}>
          <Category heading={"Shop by Categories"}>
            {memoizedCategories}
          </Category>
        </Suspense>

        <Suspense fallback={<Loader />}>
          <SaleForYou />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <TrendProducts />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <NavigationBar />
        </Suspense>

        {/* <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense> */}

        <Suspense fallback={<Loader />}>
          <Features />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default HomePage;
