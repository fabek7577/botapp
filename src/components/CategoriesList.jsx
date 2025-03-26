import { useEffect, useState } from "react";
import Category from "./Category";
import { fetchCategories } from "../services/apiProducts";

const CategoriesList = () => {
  const categories = [
    { id: "nike", name: "Nike" },
    { id: "addidas", name: "Addidas" },
    { id: "newBalance", name: "New Balance" },
    { id: "reebook", name: "Reebook" },
    { id: "vans", name: "Vans" },
  ];

  // const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchCategories();
  //       setCategories(data || []);
  //     } catch (error) {
  //       console.error("Ошибка загрузки данных:", error);
  //       setCategories([]);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (categories.length > 0) {
  //     setActiveCategory(categories[0].id);
  //   }
  // }, [categories]);

  useEffect(() => {
    if (categories.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveCategory(visibleEntry.target.id);
        }
      },
      { threshold: 0.9, rootMargin: "-50px 0px -50px 0px" }
    );

    const observeCategories = () => {
      let allSectionsLoaded = true;

      categories.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          observer.observe(section);
        } else {
          allSectionsLoaded = false;
        }
      });

      // Если не все секции загружены, попробуем ещё раз через 100 мс
      if (!allSectionsLoaded) {
        setTimeout(observeCategories, 100);
      }
    };

    observeCategories();

    return () => observer.disconnect();
  }, [categories]);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ block: "center", behavior: "instant" });
      setActiveCategory(id); // Меняем активную категорию сразу при клике
    }
  };
  return (
    <>
      <div className="sticky top-0 sm:top-2 sm:rounded-full bg-white p-1.5 my-4 overflow-x-scroll flex gap-2 no-scrollbar shadow-md shadow-zinc-300/50">
        {categories.length > 0 &&
          categories.map((item) => (
            <Category
              key={item.id}
              id={item.id}
              name={item.name}
              activeCategory={activeCategory}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
            />
          ))}
      </div>
    </>
  );
};
export default CategoriesList;
