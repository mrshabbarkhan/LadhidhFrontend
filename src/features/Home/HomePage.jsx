import { lazy, Suspense, useMemo } from "react";
import { useCategory } from "../admin/page/Categories/useCategory";

import Loader from "../../components/Loader";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import AppBanner from "../../components/AppBanner";
const LandingPage = lazy(() => import("./LandingPage"));

const NavigationBar = lazy(() => import("../../components/Navs/NavigationBar"));
const Categories = lazy(() => import("../Category/Categories"));
const Category = lazy(() => import("../Category/Category"));
const OfferForYou = lazy(() => import("./OfferForYou"));
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
          <Category heading={"Shop by Categories"} btn={"view all"}>
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

        <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense>

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
