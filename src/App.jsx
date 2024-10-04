import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./components/Loader";
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import AdminLayout from "./features/admin/components/AdminLayout";
import ProtectedRoute from "./features/admin/components/ProtectedRoute";
import { useLocalStorage } from "./features/auth/LocalStorageContext";
import { DeliveryAddressProvider } from "./features/Payment/DeliveryAddressContext";
import RiderPage from "./features/admin/page/RiderPage/RiderPage";
import TermsAndConditions from "./features/Policy/TermsAndConditions";
import PrivacyPolicy from "./features/Policy/PrivacyPolicy";
import FAQ from "./features/Policy/FAQ";
import WhyLadhidh from "./features/Policy/WhyLadhidh";

// Lazy loaded components
const HomePage = lazy(() => import("./features/Home/HomePage"));
const CategoryPage = lazy(() => import("./features/Category/CategoryPage"));
const FavoritesPage = lazy(() => import("./features/Favorites/FavoritesPage"));
const CartPage = lazy(() => import("./features/Cart/CartPage"));
const ProfilePage = lazy(() => import("./features/User/ProfilePage"));
const ProductListPage = lazy(() =>import("./features/Product-list/ProductListPage"));
const ProductDetails = lazy(() =>import("./features/Product-list/ProductDetails"));
const OrderPage = lazy(() => import("./features/Order/OrderPage"));
const PaymentPage = lazy(() => import("./features/Payment/PaymentPage"));
const DashboardPage = lazy(() =>import("./features/admin/page/dashboard/DashboardPage"));
const ProductPage = lazy(() =>import("./features/admin/page/products/ProductPage"));
const CategoriesPage = lazy(() =>import("./features/admin/page/Categories/CategoriesPage"));
const UsersPage = lazy(() => import("./features/admin/page/users/UsersPage"));
const BannerPage = lazy(() =>import("./features/admin/page/banners/BannerPage"));
const UserAddress = lazy(() => import("../src/features/User/UserAddress"))


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
            { path: "banners", element: <BannerPage /> },
            { path: "riders", element: <RiderPage /> },
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
        { path: "/product-list/:id", element: <ProductListPage /> },
        { path: "/product-details", element: <ProductDetails /> },
        { path: "/profile/orders", element: <OrderPage /> },
        { path: "/profile/address", element: <UserAddress /> },
        { path: "/terms-and-conditions", element: <TermsAndConditions /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/FAQs", element: <FAQ /> },
        { path: "/whyLadhidh", element: <WhyLadhidh /> },
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
      <Toaster />
    </Provider>
  );
}

export default App;
