import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Profile from "./components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
