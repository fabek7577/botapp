import { Link } from "react-router-dom";
import BasicArrowIcon from "/public/profile/basicArrow.jsx";
import StarsIcon from "/public/profile/stars.jsx";
import DeliveryIcon from "/public/profile/delivery.jsx";
import MenuIcon from "/public/profile/menu.jsx";
import LocationIcon from "/public/profile/location.jsx";
import ProfileIcon from "/public/profile/profile.jsx";

const Profile = () => {
  return (
    <section className="h-screen">
      <div className="pt-15 px-4">
        <div className="w-35 h-35 mx-auto">
          <ProfileIcon />
        </div>
        <h1 className="text-center text-3xl mt-3">Farrux</h1>
        <div className="text-center text-zinc-500 mt-2 select-none ">
          +998 90 000 00 00 • @farrux
        </div>
        <div className="bg-white rounded-2xl w-full mt-4 flex flex-col justify-center divide-y-1  divide-zinc-200 overflow-hidden">
          <Link to="/announcement" className="p-3.5 pl-5 flex justify-between active:bg-zinc-50">
            <span className="flex items-center gap-5">
              <StarsIcon className="w-7 h-7" />
              Анонсы
            </span>
            <BasicArrowIcon />
          </Link>
          <Link to="/orders" className="p-3.5 pl-5 flex justify-between active:bg-zinc-50">
            <span className="flex items-center gap-5">
              <MenuIcon className="w-7 h-7" />
              Заказы
            </span>
            <BasicArrowIcon />
          </Link>
          <Link to="/locations" className="p-3.5 pl-5 flex justify-between active:bg-zinc-50">
            <span className="flex items-center gap-5">
              <LocationIcon className="w-7 h-7" />
              Филиалы
            </span>
            <BasicArrowIcon />
          </Link>
          <Link
            to="/delivery-conditions"
            className="p-3.5 pl-5 flex justify-between active:bg-zinc-50"
          >
            <span className="flex items-center gap-5">
              <DeliveryIcon className="w-7 h-7" />
              Условия
            </span>
            <BasicArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
