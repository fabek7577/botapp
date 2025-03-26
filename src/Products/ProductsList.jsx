import { Link } from "react-router-dom";
import Product from "./Product";
import ArrowIcon from "/public/arrow.jsx";
const ProductsList = ({ id, name, products }) => {
  return (
    <section id={id} className="mt-6">
      <div className="flex justify-between items-center px-4">
        <h1 id={id} className="text-xl">
          {name}
        </h1>
        <Link to={`/categories/${id}`} className="bg-white text-md text-zinc-500 rounded-xl py-1.5 px-3 flex justify-center items-center gap-2">
          Все <ArrowIcon />
        </Link>
      </div>
      <div className="overflow-x-scroll px-4">
        <div className="mt-4 flex items-center gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          <div className="min-w-[150px] flex flex-col justify-center items-center">
            <Link className="flex flex-col justify-center items-center">
              <ArrowIcon className="w-14 h-14 bg-white rounded-full flex justify-center items-center cursor-pointer" />
              <span className="mt-4 text-[#71717a]">Все товары</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductsList;
