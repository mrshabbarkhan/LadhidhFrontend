import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
import PageNotFound from "./components/PageNotFound";
import AdminLayout from "./features/admin/components/AdminLayout";
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
import ProtectedRoute from "./features/admin/components/ProtectedRoute";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";
import AuthButton from "./features/auth/AuthButton";
import { useLocalStorage } from "./features/auth/LocalStorageContext";
import { DeliveryAddressProvider } from "./features/Payment/DeliveryAddressContext";
import UserAddress from "./features/User/UserAddress";

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

function RoutesWrapper() {
  const { user } = useLocalStorage();

  const combinedRoutes = [
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
        {
          path: "/payment" ,
          element: (
            <DeliveryAddressProvider>
              <PaymentPage />
            </DeliveryAddressProvider>
          ),
        },
      ],
      errorElement: <PageNotFound />,
    },

    ...(user?.isAdmin
      ? [
          {
            path: "/admin",
            element: (
              <ProtectedRoute
                isAdmin={user?.isAdmin}
                element={<AdminLayout />}
              />
            ),
            children: [
              { index: true, element: <DashboardPage /> },
              { path: "/admin/products", element: <ProductPage /> },
              { path: "/admin/category", element: <CategoriesPage /> },
              { path: "/admin/users", element: <UsersPage /> },
              { path: "/admin/banners", element: <BannerPage /> },
            ],
            errorElement: <PageNotFound />,
          },
        ]
      : []),
  ];

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
