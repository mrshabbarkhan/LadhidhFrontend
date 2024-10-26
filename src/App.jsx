import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./components/Loader";
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "sonner";
import AppLayout from "./components/AppLayout";
import AdminLayout from "./features/admin/components/AdminLayout";
import ProtectedRoute from "./features/admin/components/ProtectedRoute";
import { useLocalStorage } from "./features/auth/LocalStorageContext";
import { DeliveryAddressProvider } from "./features/Payment/DeliveryAddressContext";
import TermsAndConditions from "./features/Policy/TermsAndConditions";
import PrivacyPolicy from "./features/Policy/PrivacyPolicy";
import FAQ from "./features/Policy/FAQ";
import WhyLadhidh from "./features/Policy/WhyLadhidh";
import AllProducts from "./features/Home/AllProducts";
import Settings from "./features/admin/page/settings/Settings";
import DowanlodApp from "./components/DowanlodApp";
import SubCategory from "./features/admin/page/subCategory/SubCategory";
import ViewDetails from "./features/admin/page/users/ViewDetails";

// Lazy loaded components
const HomePage = lazy(() => import("./features/Home/HomePage"));
const CategoryPage = lazy(() => import("./features/Category/CategoryPage"));
const FavoritesPage = lazy(() => import("./features/Favorites/FavoritesPage"));
const CartPage = lazy(() => import("./features/Cart/CartPage"));
const ProfilePage = lazy(() => import("./features/User/ProfilePage"));
const ProductListPage = lazy(() =>
  import("./features/Product-list/ProductListPage")
);
const ProductDetails = lazy(() =>
  import("./features/Product-list/ProductDetails")
);
const OrderPage = lazy(() => import("./features/Order/OrderPage"));
const PaymentPage = lazy(() => import("./features/Payment/PaymentPage"));
const DashboardPage = lazy(() =>
  import("./features/admin/page/dashboard/DashboardPage")
);
const ProductPage = lazy(() =>
  import("./features/admin/page/products/ProductPage")
);
const CategoriesPage = lazy(() =>
  import("./features/admin/page/Categories/CategoriesPage")
);
const UsersPage = lazy(() => import("./features/admin/page/users/UsersPage"));
const BannerPage = lazy(() =>
  import("./features/admin/page/banners/BannerPage")
);
const UserAddress = lazy(() => import("../src/features/User/UserAddress"));
const RiderPage = lazy(() =>
  import("./features/admin/page/RiderPage/RiderPage")
);
const Requests = lazy(() => import("./features/admin/page/requests/Requests"));

function RoutesWrapper() {
  const { user } = useLocalStorage();

  const adminRoutes = user?.isAdmin
    ? [
        {
          path: "/admin",
          element: (
            <ProtectedRoute isAdmin={user.isAdmin} element={<AdminLayout />} />
          ),
          children: [
            { index: true, element: <DashboardPage /> },
            { path: "products", element: <ProductPage /> },
            { path: "category", element: <CategoriesPage /> },
            { path: "users", element: <UsersPage /> },
            { path: "users/:id", element: <ViewDetails /> },
            { path: "banners", element: <BannerPage /> },
            { path: "riders", element: <RiderPage /> },
            { path: "requests", element: <Requests /> },
            { path: "settings", element: <Settings /> },
            { path: "subcategory", element: <SubCategory /> },
          ],
          errorElement: <PageNotFound />,
        },
      ]
    : [];

  const userRoutes = [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/category", element: <CategoryPage /> },
        { path: "/favorites", element: <FavoritesPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "products", element: <AllProducts /> },
        { path: "/product-list/:id", element: <ProductListPage /> },
        { path: "/product-list/:id/:subId", element: <ProductListPage /> },
        { path: "/product-details/:id", element: <ProductDetails /> },
        { path: "/profile/orders", element: <OrderPage /> },
        { path: "/profile/address", element: <UserAddress /> },
        { path: "/terms-and-conditions", element: <TermsAndConditions /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/FAQs", element: <FAQ /> },
        { path: "/whyLadhidh", element: <WhyLadhidh /> },
        { path: "/dowanlod", element: <DowanlodApp /> },
        {
          path: "/payment",
          element: (
            <DeliveryAddressProvider>
              <PaymentPage />
            </DeliveryAddressProvider>
          ),
        },
      ],
      errorElement: <PageNotFound />,
    },
  ];

  const combinedRoutes = [...userRoutes, ...adminRoutes];

  const router = createBrowserRouter(combinedRoutes);

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader className={"h-96"} />}>
        <RoutesWrapper />
      </Suspense>
      <Toaster
        richColors
        toastOptions={{
          className: "sonner-toast",
        }}
      />
    </Provider>
  );
}

export default App;
