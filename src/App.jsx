import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Profile from "./components/Profile";
import ProductDetail from "./components/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "products/:id",
    element: <ProductDetail />,
  },
]);

const App = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <RouterProvider router={router} />
    </section>
  );
};

export default App;
