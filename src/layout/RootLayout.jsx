import Navbar from "../components/Navbar";
import CategoriesList from "../components/CategoriesList";
import ProductsList from "../Products/ProductsList";
import { fetchProducts } from "../services/apiProducts";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";

const RootLayout = () => {
  const [productsCategories, setProductsCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(); // Ждём загрузки данных
        console.log(data);
        
        setProductsCategories(data || []); // Если data undefined, ставим []
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        setProductsCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative pb-10 mx-auto min-h-screen">
      {/* Sidebar */}
      <Navbar />
      {/* Categories */}
      <CategoriesList />
      {/* MAIN */}
      <main>
        {loading && (
          <div className="min-h-[50vh] place-content-center">
            <Loader />
          </div>
        )}
        {productsCategories.length > 0
          ? productsCategories?.map(({ _id, id, name, products }) => (
              <ProductsList
                key={_id}
                id={id}
                name={name}
                products={products}
              />
            ))
          : ""}
      </main>
    </div>
  );
};

export default RootLayout;
