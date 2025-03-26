import Navbar from "../components/Navbar";
import CategoriesList from "../components/CategoriesList";
import ProductsList from "../Products/ProductsList";

const RootLayout = () => {
  const productsCategories = [
    {
      id: "nike",
      name: "Nike",
      products: [
        {
          id: 1,
          category: "nike",
          name: "Nike Air Force 1",
          price: 100000,
          description: "Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 2,
          category: "nike",
          name: "Nike Air Force 1",
          price: 140000,
          description: "Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 3,
          category: "nike",
          name: "Nike Air Force 1",
          price: 170000,
          description: "Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 4,
          category: "nike",
          name: "Nike Air Force 1",
          price: 110000,
          description: "Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 5,
          category: "nike",
          name: "Nike Air Force 1",
          price: 230000,
          description: "Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
      ],
    },
    {
      id: "addidas",
      name: "Addidas",
      products: [
        {
          id: 6,
          category: "addidas",
          name: "Nike Air force 2 Black",
          price: 399000,
          description:
            "Cтрана производителя – Германия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 7,
          category: "addidas",
          name: "Nike Air force 2 Black",
          price: 329000,
          description:
            "Cтрана производителя – Германия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 8,
          category: "addidas",
          name: "Nike Air force 2 Black",
          price: 320000,
          description:
            "Cтрана производителя – Германия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 9,
          category: "addidas",
          name: "Nike Air force 2 Black",
          price: 120000,
          description:
            "Cтрана производителя – Германия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 10,
          category: "addidas",
          name: "Nike Air force 2 Black",
          price: 520000,
          description:
            "Cтрана производителя – Германия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
      ],
    },
    {
      id: "newBalance",
      name: "New Balance",
      products: [
        {
          id: 11,
          category: "newBalance",
          name: "Nike Air force 3 Brown",
          price: 199000,
          description:
            "Cтрана производителя – США; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 12,
          category: "newBalance",
          name: "Nike Air force 3 Brown",
          price: 199000,
          description:
            "Cтрана производителя – США; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 13,
          category: "newBalance",
          name: "Nike Air force 3 Brown",
          price: 299000,
          description:
            "Cтрана производителя – США; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 14,
          category: "newBalance",
          name: "Nike Air force 3 Brown",
          price: 299000,
          description:
            "Cтрана производителя – США; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 15,
          category: "newBalance",
          name: "Nike Air force 3 Brown",
          price: 209000,
          description:
            "Cтрана производителя – США; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
      ],
    },
    {
      id: "reebook",
      name: "Reebook",
      products: [
        {
          id: 16,
          category: "reebook",
          name: "Nike Air force 4 Red",
          price: 250000,
          description:
            "Cтрана производителя – Турция; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 17,
          category: "reebook",
          name: "Nike Air force 4 Red",
          price: 210000,
          description:
            "Cтрана производителя – Турция; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 18,
          category: "reebook",
          name: "Nike Air force 4 Red",
          price: 230000,
          description:
            "Cтрана производителя – Турция; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 19,
          category: "reebook",
          name: "Nike Air force 4 Red",
          price: 280000,
          description:
            "Cтрана производителя – Турция; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 20,
          category: "reebook",
          name: "Nike Air force 4 Red",
          price: 290000,
          description:
            "Cтрана производителя – Турция; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
      ],
    },
    {
      id: "vans",
      name: "vans",
      products: [
        {
          id: 21,
          category: "vans",
          name: "Nike Air force 5 Violet",
          price: 345000,
          description:
            "Cтрана производителя – Россия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 22,
          category: "vans",
          name: "Nike Air force 5 Violet",
          price: 145000,
          description:
            "Cтрана производителя – Россия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 23,
          category: "vans",
          name: "Nike Air force 5 Violet",
          price: 575000,
          description:
            "Cтрана производителя – Россия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 24,
          category: "vans",
          name: "Nike Air force 5 Violet",
          price: 595000,
          description:
            "Cтрана производителя – Россия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
        {
          id: 25,
          category: "vans",
          name: "Nike Air force 5 Violet",
          price: 405000,
          description:
            "Cтрана производителя – Россия; Качество – Люкс; Материал – Эко кожа",
          image: "https://picsum.photos/300",
        },
      ],
    },
  ];
  // const [productsCategories, setProductsCategories] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchProducts(); // Ждём загрузки данных
  //       console.log(data);

  //       setProductsCategories(data || []); // Если data undefined, ставим []
  //     } catch (error) {
  //       console.error("Ошибка загрузки данных:", error);
  //       setProductsCategories([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="relative pb-10 mx-auto min-h-screen">
      {/* Sidebar */}
      <Navbar />
      {/* Categories */}
      <CategoriesList />
      {/* MAIN */}
      <main>
        {/* {loading && (
          <div className="min-h-[50vh] place-content-center">
            <Loader />
          </div>
        )} */}
        {productsCategories &&
          productsCategories?.map(({ id, name, products }) => (
            <ProductsList
              key={id}
              id={id}
              name={name}
              products={products}
            />
          ))}
      </main>
    </div>
  );
};

export default RootLayout;
