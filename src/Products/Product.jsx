import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="min-w-[192px] sm:min-w-[222px] border border-white active:border-zinc-200 flex flex-col rounded-2xl sm:rounded-3xl bg-white overflow-hidden"
    >
      <div className="w-full">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="p-3">
        <h1 className="text-sm">{product.name}</h1>
        <p className="text-xs text-[#3333339e] line-clamp-3">
          {product.description}
        </p>
        <span className="mt-8 bg-[#efeef7] rounded-xl sm:rounded-full py-2 w-full text-sm flex justify-center items-center">
          {product.price.toLocaleString()} сум
        </span>
      </div>
    </Link>
  );
};
export default Product;
