import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDishById } from "../../data";
import BasketIcon from "../../public/basket";

const sizes = [
  {
    size: 36,
    avable: true,
  },
  {
    size: 37,
    avable: true,
  },
  {
    size: 38,
    avable: false,
  },
  {
    size: 39,
    avable: true,
  },
  {
    size: 40,
    avable: true,
  },
  {
    size: 41,
    avable: false,
  },
  {
    size: 42,
    avable: true,
  },
  {
    size: 43,
    avable: false,
  },
  {
    size: 44,
    avable: false,
  },
  {
    size: 45,
    avable: false,
  },
];
const avableClass =
  "border-zinc-200 bg-white px-6 py-2.5 text-lg rounded-xl border-[1.8px] cursor-pointer";
const notAvableClass =
  "bg-[#DEDDE7] relative after:absolute after:w-full after:h-[1px] border-gray-400/30 after:bg-gray-400/70 after:top-[50%] after:right-0 after:-rotate-[50deg] pointer-events-none px-6 py-2.5 text-lg rounded-xl border-[1.8px] cursor-pointer";
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState(null);
  const [isPreordering, setIsPreordering] = useState(false);
  const [isChoosed, setIsChoosed] = useState(true);

  useEffect(() => {
    const dishData = getDishById(id);

    setDish(dishData);
  }, [id]);

  const handlePreorder = () => {
    if (isChoosed === true) {
      return;
    }
    setIsPreordering(true);
    setTimeout(() => {
      alert(`"${dish.name}" is successfully ordered!`);
      setIsPreordering(false);
      navigate("/");
    }, 1000);
  };

  if (!dish) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#30b0c7]"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pb-8 relative">
      <div className="relative">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-100 object-cover"
        />
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between text-[#333]">
          <h1 className="text-2xl font-bold mb-2">{dish.name}</h1>
          <p className="text-lg mb-4">{dish.price.toLocaleString()} сум</p>
        </div>

        <div className="bg-zinc-100 rounded-lg shadow-md p-4 mb-6">
          <h2 className="font-bold text-lg mb-2">Description</h2>
          <p className="text-gray-700">{dish.description}</p>
        </div>
      </div>
      <div className="scroll-hidden w-full flex flex-row items-center justify-start gap-2 overflow-x-scroll overflow-y-hidden px-4">
        {sizes.map(({ size, avable }) => (
          <button
            key={size}
            onClick={() => {
              setIsChoosed(size);
            }}
            className={`${avable ? avableClass : notAvableClass} ${
              isChoosed === size ? "!border-[#30b0c7]" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="w-full rounded-t-[2rem] max-w-3xl fixed left-1/2 -translate-x-1/2 bottom-0 untouchable p-3 bg-white">
        <button
          onClick={handlePreorder}
          disabled={isPreordering}
          className={`w-full py-3 flex justify-center items-center gap-2 rounded-[2rem] disabled:bg-gray-400 cursor-pointer text-lg text-white ${
            isPreordering ? "bg-gray-400" : "bg-[#30b0c7]"
          } ${isChoosed === true ? "bg-gray-400" : "bg-[#30b0c7]"}`}
        >
          <BasketIcon /> {isPreordering ? "Ordering..." : "Order"}
        </button>
      </div>
    </div>
  );
};
export default ProductDetail;
