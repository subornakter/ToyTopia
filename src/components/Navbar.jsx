import { Link } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Logout successful");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="bg-[#bdeef8] py-2 px-5 border-b border-b-slate-300 sticky top-0 z-50">
      <MyContainer className="flex items-center justify-between">
    
        <div className="flex items-center gap-3">
         
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo */}
          {/* <figure>
            <img
              className="w-[150px] h-[50px]"
              src="https://i.ibb.co/Hfk12RhR/Toytopia.webp"
              alt="logo"
            />
          </figure> */}
          <h1 className="font-bold text-2xl md:text-4xl text-[#1096B5]">ToyTopia</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          <li><MyLink to="/">Home</MyLink></li>
          <li><MyLink to="/toys">Toys</MyLink></li>
          <li><MyLink to="/store">Store</MyLink></li>
          <li><MyLink to="/profile">MyProfile</MyLink></li>
        </ul>

      
        {loading ? (
          <ClockLoader color="#e74c3c" size={30} />
        ) : user ? (
          <div className="flex items-center gap-3">
            <img
              src={user?.photoURL ?? "https://via.placeholder.com/40"}
              alt="User Avatar"
              className="h-[40px] w-[40px] rounded-full border-2 border-[#1096B5]"
              title={user?.displayName ?? "User"}
            />
            <button
              onClick={handleSignout}
              className="bg-[#1096B5] text-white px-3 py-2 rounded-md font-semibold hover:bg-[#0d809a]"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="bg-[#1096B5] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#0d809a]"
          >
            Sign In
          </Link>
        )}
      </MyContainer>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#bdeef8] mt-2 border-t border-t-slate-300 py-4 px-5 space-y-3">
          <ul className="flex flex-col gap-3">
            <li onClick={() => setMenuOpen(false)}><MyLink to="/">Home</MyLink></li>
            <li onClick={() => setMenuOpen(false)}><MyLink to="/toys">Toys</MyLink></li>
            <li onClick={() => setMenuOpen(false)}><MyLink to="/store">Store</MyLink></li>
            <li onClick={() => setMenuOpen(false)}><MyLink to="/profile">MyProfile</MyLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
