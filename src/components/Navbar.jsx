import { Link, NavLink } from "react-router";

import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
// import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-slate-200 py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img className="w-[150px] h-[50px]" src="https://i.ibb.co.com/Hfk12RhR/Toytopia.webp" alt="" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/shop"}>Shop</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;