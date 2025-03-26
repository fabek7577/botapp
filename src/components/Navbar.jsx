import { Link } from "react-router-dom";
import SearchIcon from "/public/navbar/search";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <Link to="/profile" className="w-12 rounded-full bg-neutral-50 overflow-hidden cursor-pointer">
          <img src="/navbar/profile.png" alt="profile image" />
        </Link>
        <h1 className="text-3xl font-bold">LOGO</h1>
        <SearchIcon className="w-12 h-12 bg-neutral-50 rounded-full flex justify-center items-center cursor-pointer" />
      </nav>
    </>
  );
}

export default Navbar;
